import CustomButton from "./CustomButton";
import react from "react";
function About() {
  return (
    <div className="container mt-5">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginLeft: "40px" }}>
          <h2>About Me</h2>
          <p>
            I am a passionate web developer with experience in front-end and
            back-end technologies. I love building responsive and user-friendly
            websites. I am a passionate web developer with experience in
            front-end and back-end technologies. I love building responsive and
            user-friendly websites. I am a passionate web developer with
            experience in front-end and back-end technologies. I love building
            responsive and user-friendly websites.
          </p>
        </div>
      </div>
              <div style={{ textAlign: "center" }}>
          <CustomButton text="contact me" variant="outline-black" />
        </div>

    </div>
  );
}
export default About;
