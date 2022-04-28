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
                <div className="tec" >
                  <SiHtml5 />
                  <DiCss3 />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaAws />
                  <BsBootstrap />
                  <SiNetlify />
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
                <div className="tec" >
                  <SiHtml5 />
                  <DiCss3 />
                  <SiNodedotjs />
                  <BsBootstrap />
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

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/97450767/165701189-64bcfffd-18b9-4096-8e9c-21ff20a8e459.png"
                    alt="Youtube_app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>YouTube</h2>
                <p>
                  Youtube is a video-streaming platform used by creators across the globe to publish original content. I have tried to clone this project with HTML, CSS and JS.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://youtubeloading.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Vaibhav0702/Youtube_app.git"
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
                    src="https://user-images.githubusercontent.com/97450767/165779624-c6f9e317-12b5-4184-a2e4-e76d4ad8b1fa.png"
                    alt="Stop_Watch"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Stop Watch</h2>
                <p>
                  Stop Watch is use to calculate time required for specific task, I have tried to make stop watch like Google stopwatch , it will provide featchers like Stop, Pause and Reset timer.
                </p>
                <div>

                  <IoLogoJavascript />
                  <FaReact />
                  <DiCss3 />

                </div>
                <div>
                  <a
                    href="https://vstopwatch.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Vaibhav0702/Stop_Watch.git"
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
                    src="https://user-images.githubusercontent.com/97450767/165694268-70fb96be-1a7e-44de-a710-d4c0934a006b.png"
                    alt="Weather_app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather App</h2>
                <p>
                  Weather App is a platform used to get weather report as per users search for their respective city or they can also pick up any location from the provided google map And also see upcoming 7 days data after searching.
                </p>
                <div>

                  <IoLogoJavascript />
                  <SiHtml5 />
                  <DiCss3 />

                </div>
                <div>
                  {/* <a
                    href="https://vstopwatch.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/Vaibhav0702/weather_app.git"
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
                    src="https://user-images.githubusercontent.com/97450767/165793532-4040faa2-5eae-4024-abf2-4fddd0295477.png"
                    alt="Movie_app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Movie App</h2>
                <p>
                Movie app is a Movie-streaming platform used for watching top movie. In this app on the landing page we can see slideshow of trending movies and see all trending movies below and also sort them according to Rating.
                </p>
                <div>

                  <IoLogoJavascript />
                  <SiHtml5 />
                  <DiCss3 />

                </div>
                <div>
                  <a
                    href="https://filmstan.netlify.app/home.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Vaibhav0702/Movie_app.git"
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


          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/97450767/165774596-72e70fda-35d5-4c5f-8ce0-a424e107c842.png"
                    alt="Translate_app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Translate App</h2>
                <p>
                Translate App is a platform used to translate language of the input word or sentance from English to Hindi, I have tried to make a website based on translate app, it will translate language of the input word or sentance from English to Hindi 
                </p>
                <div>

                  <IoLogoJavascript />
                  <SiHtml5 />
                  <DiCss3 />

                </div>
                <div>
                  <a
                    href="https://translatetool.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Vaibhav0702/translate_app.git"
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

          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/97450767/165800181-1adc65aa-df5a-4e32-aeb9-d1d88f98a809.png"
                    alt="Food_app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Food App</h2>
                <p>
                Food App is a food ordering platform used for order and enjoy our favourite food. In this app we can order our favourite food and enjoy it after delivery.
                </p>
                <div>

                  <IoLogoJavascript />
                  <SiHtml5 />
                  <DiCss3 />

                </div>
                <div>
                  <a
                    href="https://khanaapp.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Vaibhav0702/Food_App.git"
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
