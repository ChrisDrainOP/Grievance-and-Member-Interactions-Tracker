import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SignUpOverlay = (props) => {
  const [formValues, setFormValues] = useState({});
  const [resJson, setResJson] = useState("");
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("got here submit==>>", formValues);
    const { email, confirmEmail, password, confirmPassword } = formValues;
    if (email !== confirmEmail) {
      return alert("Email doesn't match");
    }

    if (password !== confirmPassword) {
      return alert("Password doesn't match");
    }

    if (password.length < 6 || confirmPassword.length < 6) {
      return alert("Password should be 6 characters or more");
    }

    const res = await fetch("/users/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, fullName, password }),
    });
    const resJson = await res.json();
    console.log("res json==>>", resJson);
    
    if (resJson.errors) {
      setResJson(resJson);
    }
    if (resJson.isAuthenticated) {
      history.push("/home");
    }
    if (resJson.userExist) {
      setResJson(resJson);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const {
    fullName,
    email,
    confirmEmail,
    password,
    confirmPassword,
  } = formValues;

  return (
    <div className='bg-black bg-opacity-75 absolute z-10 h-screen w-full top-0 left-0'>
      <FontAwesomeIcon
        className='text-2xl text-white absolute right-7 top-3'
        icon={faTimes}
        onClick={props.onCloseOverlayClick}
      />
      <form
        className='w-3/4  m-auto relative top-1/2 transform -translate-y-2/4'
        onSubmit={handleSubmit}
        method='post'
      >
        <h3 className='text-white text-2xl pb-5'>Create your Account</h3>
        {resJson.errors ? (
          <h3 className='text-white text-1xl pb-5'>{resJson.errors }</h3>
        ) : null}
        {resJson.userExist ? (
          <h3 className='text-white text-1xl pb-5'>{resJson.userExist }</h3>
        ) : null}
        <div className='mb-9'>
          <label className='block text-white font-bold' htmlFor='email'>
            Name(First and Last):
          </label>
          <input
            className='text-black font-medium '
            type='text'
            name='fullName'
            id='fullName'
            value={fullName || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='my-3'>
          <label className='block text-white font-bold' htmlFor='email'>
            Email:
          </label>
          <input
            className='text-black font-medium '
            type='email'
            name='email'
            id='email'
            value={email || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='mb-9'>
          <label className='block text-white font-bold' htmlFor='email2'>
            Confirm Email:
          </label>
          <input
            className='text-black font-medium '
            type='email'
            name='confirmEmail'
            id='confirmEmail'
            value={confirmEmail || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='block text-white font-bold' htmlFor='password'>
            Password:
          </label>
          <input
            className='text-black font-medium '
            type='password'
            name='password'
            id='password'
            value={password || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className=''>
          <label className='block text-white font-bold' htmlFor='password2'>
            Confirm Password:
          </label>
          <input
            className='text-black font-medium '
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            value={confirmPassword || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button
            type='submit'
            className='border border-solid rounded-md border-black  px-2 py-1 border-opacity-30 my-4 bg-indigo-500 text-white font-bold'
          >
            Submit!
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpOverlay;
