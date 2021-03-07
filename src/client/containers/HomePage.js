import { React, useState, useEffect } from "react";
import DisplayUserInfo from "../components/DisplayUserInfo";
import NavigationIcons from "../components/NavigationIcons.js";
import GrievanceListContainer from "./GrievanceListContainer.js";
import GrievanceTableContainer from "./GrievanceTableContainer";
import GrievanceFormContainer from "./GrievanceFormContainer";

const HomePage = ({ history, ...props }) => {
  const [displayName, setDisplayName] = useState("");
  const [image, setImage] = useState("");

  //Profile information is brought in from /server/routers/index.js
  
  useEffect(() => {
    loadProfile();
  },[]);

  const loadProfile = async () => {
    const response = await fetch("/home/token", {
      "method": "GET",
      "credentials": "same-origin",
    });
    const data = await response.json();

    console.log(data)

    setDisplayName(
      data.displayName
        .toLowerCase()
        .replace(/(\w{1})(\w+)/g, function replacer(match, p1, p2) {
          return [p1.toUpperCase(), p2, " "].join("");
        })
    );
    setImage(data.image);
  };


  return (
    /*This component contains the entire app*/
    <div className='main-gradient pt-2 h-screen'>
      <DisplayUserInfo displayName={displayName} image={image} />
      <NavigationIcons />
      <GrievanceListContainer />
      <GrievanceTableContainer />
      <GrievanceFormContainer />
    </div>
  );
};

export default HomePage;
