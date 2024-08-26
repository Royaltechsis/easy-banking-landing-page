import React from "react";
import { ReactComponent as Budgeting } from "../assets/images/icon-budgeting.svg";
import { ReactComponent as Online } from "../assets/images/icon-online.svg";
import { ReactComponent as Api } from "../assets/images/icon-api.svg";
import { ReactComponent as Onboarding } from "../assets/images/icon-onboarding.svg";



function Fitem({image, title, desc}) {
    return(
        <>
            <div className="item sm:w-11/12  w-3/4 flex flex-col gap-3 justify-center items-center lg:w-2/12 md:w-5/12 md:justify-start md:items-start">
                <div className="img">{image}</div>
                <h3 className="feature-title text-2xl text-primary-DarkBlue">{title}</h3>
                <p className="feature-desc text-primary-GrayishBlue ">{desc}</p>
            </div>
        </>
    )
}


function Features(){
    


    const items= [
        {
            image: <Online/>,
            title: "Online Banking",
            desc:"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
        },
        
        {
            image: <Budgeting/>,
            title: "Simple Budgeting",
            desc:" See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
        },
        {
            image: <Onboarding/>,
            title: "Fast Onboarding",
            desc:"We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
        },
        {
            image: <Api/>,
            title: "Open API",
            desc:" Manage your savings, investments, pension, and much more from one account Tracking your money has never been easier.",
        }
    ]




    return(
        <>
        <div className="features container flex w-full items-center justify-center bg-primary-VeryLightGray">
            <div className="inner-container flex flex-col w-full  p-5 justify-center pb-14 pt-14">
                <div className="mb-10 flex items-center justify-center">
                    <div className="top flex flex-col gap-6 w-10/12">
                        <h1 className="text-5xl text-primary-DarkBlue sm:text-left text-center">Why Choose Easybank?</h1>
                        <p className="flex sm:w-4/6 text-primary-GrayishBlue sm:text-left text-center">We leverage Open Banking to turn your bank account into your financial hub.<br></br> Control 
                        your finances like never before.</p>
                        
                    </div>
                </div>
                <div className="items-list flex flex-wrap gap-14 sm:items-center justify-center">
                    {items.map((item, index) => (
                        <Fitem
                            key={index}
                            image={item.image}
                            title={item.title}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}


export default Features;