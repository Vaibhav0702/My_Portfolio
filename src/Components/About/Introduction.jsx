import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Vaibhav.jpeg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Vaibhav Ginnalwar </span> And I'm a 
                <span className="different"> Mechanical Engineering</span> graduate from 
                <span className="different"> Sant Gadge Baba Amravati University, Maharashtra, India</span>. I've also completed a 
                <span className="different"> full stack web development</span> course at 
                <span className="different"> Masai School</span> and have 
                <span className="different"> 1+ year of experience</span> as a Junior Full-Stack Developer.
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Entrepreneure{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Foodie{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Traveler{" "}
              </h4>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
