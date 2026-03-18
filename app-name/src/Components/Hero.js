import CustomButton from "./CustomButton";
import React from "react";

function Hero() {
  return (
    <div className="text-white ps-5 bg-dark d-flex align-items-center"
    style = {{
        backgroundImage: "url('/images/imge1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
      height: '40vh'

    }} >
        <div>
        <h1> Youssef </h1>
        <h1> Frontend Developer </h1>
        <CustomButton text="contact me" variant="outline-light"/>
        </div>


    </div>
  );
}
export default Hero;