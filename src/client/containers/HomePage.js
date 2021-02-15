import { React, useState, useEffect } from "react";
import NavigationIcons from "../components/NavigationIcons.js";
import GrievanceListContainer from "./GrievanceListContainer.js";
import GrievanceTableContainer from "./GrievanceTableContainer";
import GrievanceFormContainer from "./GrievanceFormContainer";

const HomePage = (prop) => {
  const [displayName, setDisplayName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    loadProfile();
  });

  const loadProfile = async () => {
    const response = await fetch("/userInfo");
    const data = await response.json();
    console.log("response==>>", data);
    setDisplayName(
      data.displayName.replace(
        /(\w{1})(\w+)/g,
        function replacer(match, p1, p2) {
          console.log(p1, p2);
          return [p1.toUpperCase(), p2, " "].join("");
        }
      )
    );
    setImage(data.image);
  };

  return (
    /*This component contains the entire app*/
    <div className='main-gradient pt-2 h-screen'>
      <h3 className='text-center'>Welcome, {displayName}</h3>
      <NavigationIcons />
      <GrievanceListContainer />
      <GrievanceTableContainer />
      <GrievanceFormContainer />
    </div>
  );
};

export default HomePage;
