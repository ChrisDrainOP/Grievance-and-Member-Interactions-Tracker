import React, { useState, useEffect } from "react";
import NavLogoContainer from "../components/NavigationLogoContainer";
import LogOnForm from "../components/LogOnForm";

const Authentication = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    callBackEndAPI()
      .then((res) => setData(res.express))
      .catch((err) => console.log(err));
  });

  const callBackEndAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  return (
    <div className='main-gradient h-screen'>
      <NavLogoContainer />
      <LogOnForm />
      <h1 className='text-2xl'>{data}</h1>
    </div>
  );
};

export default Authentication;
