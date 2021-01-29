import React, { useState, useEffect } from "react";
import NavLogoContainer from "../components/NavigationLogoContainer";
import LogOnForm from "../components/LogOnForm";

const Authentication = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    callBackEndAPI()
      .then((res) => setData(res.user.avatarUrl))
      .catch((err) => console.log(err));
  });

  const callBackEndAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  return (
    <div className='main-gradient h-screen'>
      <NavLogoContainer />
      <LogOnForm />
    </div>
  );
};

export default Authentication;
