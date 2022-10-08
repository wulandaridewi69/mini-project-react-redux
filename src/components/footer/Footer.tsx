// @ts-nocheck
import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
    
    return (
        <div className="bg-[#085E7D] sm:text-left flex bottom-0">
            <a href='https://www.facebook.com/getplusindonesia/'>
                <FacebookIcon />
            </a>
            <a href='https://www.instagram.com/getplusid/'>
                <InstagramIcon />
            </a>
            <a href='https://twitter.com/GetPlusID'>
                <TwitterIcon />
            </a>
            <div className="bg-white text-black text-center py-2">
                <h6> © Copyright WANDA'S 2022. All Right Reserved.</h6>
            </div>
        </div>
    );
};

export default Footer;