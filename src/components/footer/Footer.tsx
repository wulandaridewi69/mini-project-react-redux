// @ts-nocheck
import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {

    return (
        <div className="row bg-cyan-900 rounded-t-3xl sm:text-left flex">
            <div className="text-white text-center ">
                <a href="https://www.linkedin.com/in/dewi-wulandari-970590136/">
                <h6> © Copyright WANDA'S 2022. All Right Reserved.</h6>
                </a>
            </div>
            <div className="text-white text-center">
                <a href='https://www.facebook.com/getplusindonesia/'>
                    <FacebookIcon />
                </a>
                <a href='https://www.instagram.com/getplusid/'>
                    <InstagramIcon />
                </a>
                <a href='https://twitter.com/GetPlusID'>
                    <TwitterIcon />
                </a>
            </div>

        </div>
    );
};

export default Footer;