import react from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";


function Footer(){
    return(
        <>
        <div className="footer container w-full bg-primary-DarkBlue flex p-16 items-center justify-center ">
            <div className="inner-container w-10/12 flex  flex-col sm:flex-row sm:justify-between  justify-center items-center">
                <div className="flex flex-col sm:flex-row sm:gap-28 gap-2 text-white">
                    <div>
                    <div className="flex-shrink-0 logo flex items-center justify-center">
                        <a href="#" className="ml-[-10px] text-xl font-bold text-white">
                            <Logo />
                        </a>
                    </div>
                        <div className="logo-list"></div>
                    </div>
                    <ul className="flex flex-col sm:gap-4">
                        <li>About Us</li>
                        <li>contact</li>
                        <li>blog</li>
                    </ul>
                    <ul className="flex flex-col sm:gap-4">
                        <li>Career</li>
                        <li>Support</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="hidden md:flex md:space-x-4">
                        <a href="login.php" className="header-cta cta px-4 py-2 rounded text-sm"> Request Invite</a>
                    </div>
                    <p className="text-gray-500">© Easybank. All Rights Reserved</p>
                </div>

            </div>
                
        </div>
        </>
    )
}


export default Footer;