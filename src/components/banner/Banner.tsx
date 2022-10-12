// @ts-nocheck
import React from "react";

const Banner = (props) => {
    return (
        <div className="rounded-lg pb-8 pl-12 pr-12 pt-8">
            <img
                src={props.image}
                className="h-full w-full "
                alt=""
                width={200}
                height={30}
            />
        </div>
    );
}

export default Banner;