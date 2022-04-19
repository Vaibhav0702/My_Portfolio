import React from "react";
import "./Projects.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { BsBootstrap, BsWordpress } from "react-icons/bs";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNetlify
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">

          
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://camo.githubusercontent.com/07c4a50179a68bd67a55806b9f21fc292461675f8a3bea57397813668255d8d6/68747470733a2f2f626c6f676765722e676f6f676c6575736572636f6e74656e742e636f6d2f696d672f622f523239765a32786c2f415676587345694e4a636130483254725667524e5a5150494455756e76394a474d4c70364346564e59655f57785751366a7162775530534351523333794d6430656779315f4c3937723658577263646a30366974354479377a6c7877662d422d324870316c793052366c30496266784e424b3978684246705f48424c7374424175564279436d546d3669344a627a7048353350422d696b4e6d3478577554757768516e67724849446b43594a514f585247554d6857425469726d5473554132732f73313238302f5768617473417070253230496d616765253230323032322d30342d3032253230617425323031332e33372e30322e6a706567"
                    alt="MyGlamm"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>MyGlamm</h2>
                <p>
                MYGLAMM is an ecommerce shopping  web application which provides international beauty products - skin care, makeup kit, cosmetics. We had to clone this website. This was a collaborative project built by a team of 4 executed in just 5 days.
                </p>
                <div className= "tec" >
                  <SiHtml5/>
                  <DiCss3/>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaAws />
                  <BsBootstrap/>
                  <SiNetlify/>
                </div>
                <div>
                  <a
                    href="https://nikeshandgroup.netlify.app/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Vaibhav0702/Myglamm-with_Frontend.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
       

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://miro.medium.com/max/700/1*VNb0tcgKmYTYfVrLPCQLYg.png"
                    alt="Max Fashion"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Max Fashion</h2>
                <p>
                Max Fashion is an ecommerce shopping  web application which provides clothes for all genders. We had to clone this website. This was a collaborative project built by a team of 5 executed in just 5 days.
                </p>
                <div className= "tec" >
                  <SiHtml5/>
                  <DiCss3/>
                  <SiNodedotjs />
                  <BsBootstrap/>
                </div>
                <div>
                  <a
                    href="https://maxfashionclone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/utukaule/MaxFashion.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/MPzWN49/weather-app.png"
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>SK Weather App</h2>
                <p>
                  Location based weather app. User can also search for their
                  cities and pickup location from map to see weather data of
                  respective places.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://sk-weather-app.netlify.app/weather-app.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/Weather-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </>
  );
};
