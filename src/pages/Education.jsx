import "./Education.css";
import educationImg from "../images/education.png";
import { EducationData } from "../components/PagesData";
const Education = () => {
  return (
    <div className="education-section" id="education">
      <ul>
        {EducationData.map((item, index) => {
          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <li className="education-data" key={index}>
                <h2>{item.institution}</h2>
                <h3 style={{ fontWeight: 400, fontStyle: "italic" }}>
                  {item.date}
                </h3>
                <h2>{item.field}</h2>
              </li>
            </a>
          );
        })}
      </ul>
      <img src={educationImg} alt="Loading.." />
    </div>
  );
};

export default Education;
