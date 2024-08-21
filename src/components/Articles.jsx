import React from "react";
import Confetti from "../assets/images/image-confetti.jpg";
// import currency from "../assets/images/image-currency.jpg";
// import restaurant from "../assets/images/image-restaurant.jpg";
// import plane from "../assets/images/image-plane.jpg";








function Articles(){

    function Aitem({image, author, title, desc }){
        return(
            <>
                <div className="item">
                    <div>
                        <img src={image}></img>
                        <h6>{author}</h6>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                </div>
            </>
        )
    }

    const items =[
        {
            image: <Confetti />,
            author: "By Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            desc: " After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
        },
        {
            image: <Confetti />,
            author: "By Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            desc: " After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
        },
        {
            image: <Confetti />,
            author: "By Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            desc: " After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
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
            <div className="container">
                <div className="inner-container">
                    <div className="">
                        <h1 className="text-primary-DarkBlue text-5xl">Latest Articles</h1>
                    </div>
                    <div className="items-list">
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