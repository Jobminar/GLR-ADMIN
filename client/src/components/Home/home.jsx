import React from "react";
import { useContext } from "react";
import { Data } from "../Contextprovider";
import Homecources from "./Homecources";
import Homeaboutus from "./homeaboutus";
import Blogsandregister from "./blogs&register";
import Notificationshome from "./notifications";
import "./home.css";

import Gallery from "./homecarousel";
import MyCarousal from "./Carousel";

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
        <Gallery />
      </div>
    </>
  );
};

export default Home;
