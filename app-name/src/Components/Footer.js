import CustomButton from "./CustomButton";
import SocialIcons from "./SocialIcon";
import React from "react";

function Footer(){
    return(
        <div className="bg-dark text-center text-white py-4">
            <div className="container">
                <h1>Get In Touch</h1>
                <CustomButton text="Contact Me" className="btn btn-success"/>
                <SocialIcons className="my-3"/>
                <small>&copy; 2026 Youssef. All rights reserved.</small>


            </div>

        </div>
    )
}
export default Footer;