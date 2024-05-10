import React from "react";
import { useContext } from "react";
import { Data } from "../Contextprovider";
import Homecources from "./Homecources";
import Homeaboutus from "./homeaboutus";
import Blogsandregister from "./blogs&register";
import Notificationshome from "./notifications";
import "./home.css";


import MyCarousal from "./Carousel";
import Gallery from "./gallery";
import Testomials from "./testomial";

const Home = () => {
  const { fullname } = useContext(Data);
  return (
    <>
      <div>
        <div className="main-image">
          <MyCarousal />
        </div>
        <Notificationshome />
        <Homecources />
        <Homeaboutus />
        <Blogsandregister />
        <Gallery/>
        {/* <Testomials/> */}
      </div>
    </>
  );
};

export default Home;
