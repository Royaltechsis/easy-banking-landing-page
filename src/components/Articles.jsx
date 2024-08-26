import React from "react";
import Confetti from "../assets/images/image-confetti.jpg";
import Currency from "../assets/images/image-currency.jpg";
import Restaurant from "../assets/images/image-restaurant.jpg";
import Plane from "../assets/images/image-plane.jpg";








function Articles(){

    function Aitem({image, author, title, desc }){
        return(
            <>
                <div className="item flex flex-col sm:w-1/4 w-4/5 p-4">
                    <div className="flex flex-col gap-2 w-full">
                        <img src={image}></img>
                        <h6 className="text-gray-500 text">{author}</h6>
                        <h3 className="text-1xl text-lg">{title}</h3>
                        <p className="text-gray-500">{desc}</p>
                    </div>
                </div>
            </>
        )
    }

    const items =[
        {
            image: <Currency />,
            author: "By Claire Robinson",
            title: "Receive money in any currency with no fees",
            desc: " Receive money in any currency with no fees The world is getting smaller and we’re becoming more mobile. So why should you be  forced to only receive money in a single …",
        },
        {
            image: <Restaurant />,
            author: "By Wilson Hutton ",
            title: "Our invite-only Beta accounts are now live!",
            desc: " After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
        },
        {
            image: <Plane />,
            author: "By Wilson Hutton",
            title: "Take your easy banking card wherever you go",
            desc: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
        },
        {
            image: <Confetti />,
            author: "By Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            desc: " After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
        },

    ]



    return(
        <>
            <div className="container flex items-center justify-center">
                <div className="inner-container w-10/12 gap-20 flex flex-col p-5">
                    <div className="">
                        <h1 className="text-primary-DarkBlue text-5xl">Latest Articles</h1>
                    </div>
                    <div className="items-list sm:flex sm:gap-3 sm:flex-row flew-wrap sm:justify-between justify-center items-center  flex flex-col">
                    {items.map((item, index) => (
                        <Aitem
                            key={index}
                            image={item.image}
                            author={item.author}
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


export  default Articles;