// @ts-nocheck
import React from "react";

import Button from '../button/Button'


const Card = (props) => {

  return (
    <div className="border-1 drop-shadow-xl hover:shadow-md hover:shadow-gray-400 hover:-mt-1 mb-8">
        <div className="h-96 justify-center cursor-pointer">
          <a href={`/${props.id}`}>
            <img
              src={props.image}
              className="h-full w-full"
              alt=""
              width={150}
              height={50}
            />
          </a>
        </div>
        <div className="flex ml-1">
          <div className="p-3 pb-10">
            <div className="font-bold text-yellow-600 text-xl">{props.title}</div>
            <div className="text-white text-xs">{props.preview}</div>
          </div>
        </div>
    </div>
  );
};

export default Card;
