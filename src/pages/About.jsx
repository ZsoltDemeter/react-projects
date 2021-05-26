import "./About.css";
import codingSpace from "./codingSpace.jpg";

const About = () => {
  return (
    <div className="about-section" id="about">
      <h2>About me</h2>
      <p>
        My name is Demeter Zsolt. I am very passionate about programming and
        especially web development. I spend most of my free time challenging
        myself to improve in the field, by learning new technologies, solving
        puzzles and doing exercises. My goal is to become a full-stack
        web-developer in the next 3 to 5 years.
      </p>
      <img src={codingSpace} alt={"Loading..."} />
    </div>
  );
};

export default About;
