import React from 'react'
import animationData from "../assets/890-loading-animation.json";


const Fail = (props) => {

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
      <div className="w-full h-screen flex justify-center items-center">
        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_rqtv3qia.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop controls autoplay></lottie-player>
      </div>
      <div className='fail text-center text-5xl font-bold text-teal-600'>
        <h6>Sorry Guys</h6>
      </div>
    </div>
  );
}

export default Fail;
