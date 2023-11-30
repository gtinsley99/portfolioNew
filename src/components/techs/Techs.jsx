import "./Techs.css";
import HTML from "../../images/techImg/html.png";
import CSS from "../../images/techImg/CSS3_logo.svg.png";
import JavaScript from "../../images/techImg/javascript.png";
import React from "../../images/techImg/React-icon.svg.png";
import MySQL from "../../images/techImg/mysql-logo.svg";
import MongoDB from "../../images/techImg/mongodb.svg";

const Techs = () => {
  return (
    <div className="techs" id="skills">
      <h2>My Technologies</h2>
      <div className="techImgs">
        <div>
          <img className="techPic" alt="HTML" src={HTML} />
          <p>HTML</p>
        </div>
        <div>
          <img className="techPic" alt="CSS" src={CSS} />
          <p>CSS</p>
        </div>
        <div>
          <img className="techPic" alt="JavaScript" src={JavaScript} />
          <p>JavaScript</p>
        </div>
        <div>
          <img className="techPic" alt="React" src={React} />
          <p>React</p>
        </div>
        <div>
          <img className="techPic" alt="MySQL" src={MySQL} />
          <p>MySQL</p>
        </div>
        <div>
          <img className="techPic" alt="MongoDB" src={MongoDB} />
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default Techs;
