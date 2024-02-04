import Header from "../Header/header";

import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Header />
      <div className="about-page">
        <div className="about-container-text">
          <p>
            Enthusiastic mechanical engineer turned programmer. Developing MERN
            STACK applications...
          </p>
        </div>
        <div className="about-container-socialhandle">
          <p>
            Feel free to reach out through the following social handles. Looking
            forward to connecting with you!
          </p>
          <div className="social-icons">
            <Link to="https://github.com/Jaycee-9" target="_blank">
              <GitHub
                style={{ fontSize: "50px", color: "white" }}
                className="icon-link"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/jay-thakkur1998"
              target="_blank"
            >
              <LinkedIn
                style={{ fontSize: "50px", color: "white" }}
                className="icon-link"
              />
            </Link>
            <Link to="https://www.instagram.com/_jaycee_._/" target="_blank">
              <Instagram
                style={{ fontSize: "50px", color: "white" }}
                className="icon-link"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
