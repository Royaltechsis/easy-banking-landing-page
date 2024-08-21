import React from "react";
import imageMockups from '../assets/images/image-mockups.png';

function Hero() {
    return (
        <>
        <div className="container hero flex w-full items-center justify-center ">
            <div className="inner-container flex flex-col-reverse xs:flex-col lg:flex-row sm:flex-col xl:flex-row">
                <div className="caption flex p-5 flex-col justify-center items-center md:w-2/4 w-full">
                    <div className="md:w-4/5 gap-3 flex flex-col text-center md:text-left">
                        <h1 className="text-5xl font-light">Next generation digital banking</h1>
                        <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
                        for spending, saving, budgeting, investing, and much more.</p>
                        <div className=" md:flex md:space-x-4">
                            <a className="header-cta cta px-4 py-2 rounded text-sm">Request Invite</a>
                        </div>
                    </div>
                </div>
                <div className="image flex items-center justify-center md:w-2/4">
                    <img src={imageMockups} alt="" className="md:w-10/12 w-full" />
                </div>
            </div>
        </div>
        </>
    )
    
}
export default Hero;