import React, { useState, useEffect } from "react";
import NavLogoContainer from "../components/NavigationLogoContainer";
import LogOnForm from "../components/LogOnForm";
import SignUpOverLay from "../components/SignUpOverLay";

const Authentication = () => {
  const [isSignUpClicked, setSignUpClicked] = useState(false);
  const [isCloseOverlayClicked, setCloseOverlay] = useState(false);

  const handleSignUpClick = () => {
    setSignUpClicked(!isSignUpClicked);
  };

  const handleCloseOverlay = () => {
    setCloseOverlay(!isCloseOverlayClicked);
    setSignUpClicked(!isSignUpClicked);
  };
  const [data, setData] = useState(null);

  useEffect(() => {
    callBackEndAPI()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  });

  const callBackEndAPI = async () => {
    const response = await fetch("/yolo");
    const body = await response.text();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    console.log(body);
    return body;
  };

  return (
    <div className='main-gradient h-screen'>
      <NavLogoContainer />
      <p>{data}</p>
      <LogOnForm onSignUpClick={handleSignUpClick} />
      {isSignUpClicked ? (
        <SignUpOverLay onCloseOverlayClick={handleCloseOverlay} />
      ) : null}
    </div>
  );
};

export default Authentication;
