// @ts-nocheck
import React from 'react'
import animationData from "../assets/890-loading-animation.json";


const Loading = (props) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className='flex flex-col items-center pt-5'>
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_a2chheio.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  
        loop controls autoplay></lottie-player>
    </div>
  );
}

export default Loading;
