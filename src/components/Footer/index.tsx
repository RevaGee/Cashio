import React from "react";
import "./styles.scss"
import {LogoFooter} from "../../images/icons/iconizer-CASHIO_logo_green";
import ParticlesComponent from "../Paralax/particles";


export const Footer = () => {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const openModal = () => {
    //     setIsModalOpen(true);
    // }
    // const closeModal = () => {
    //     setIsModalOpen(false);
    // }
    // const handleOutsideClick = (event: any) => {
    //     if (event.target === event.currentTarget) {
    //         setIsModalOpen(false);
    //     }
    // };

    return (
        <div className="footer">
            {/*<ParticlesComponent/>*/}
            <div className="footer__content">
                <div className="footer_start_content">
                    <div className="logo_footer"><LogoFooter /></div>

                    <div className="footer__text">
                        <p>Grow your business with CASHIO</p>
                    </div>
                </div>
                <div className="footer_end_content">
                    <div className = 'footer_media'>
                        <div className="footer__copyright">
                            <p>Copyright ©CASHIO 2024 · All Rights Reserved</p>
                        </div>
                        <div className="modal_prv_content">
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*{isModalOpen && (*/}
            {/*    <div className="modal" onClick={handleOutsideClick}>*/}
            {/*        <div className="modal__content">*/}
            {/*            <button onClick={closeModal}>Close</button>*/}
            {/*            <p>*/}
            {/*                Privacy Policy*/}
            {/*                Last Updated: 26/01/2024*/}

            {/*                Welcome To CASHIO!<br/>*/}

            {/*                At CASHIO, we are committed to protecting the privacy and security of your*/}
            {/*                Personal Information. This Privacy Policy Outlines How We Collect, Use, Disclose, And*/}
            {/*                Protect Your Information When You Use Our Website And Services. By Using Our Website And*/}
            {/*                Services, You Consent To The Practices Described In This Privacy Policy. Please Take A*/}
            {/*                Moment To Review This Document Carefully.*/}


            {/*                Information We Collect*/}
            {/*                Personal Information*/}

            {/*                We May Collect Personal Information That You Provide Directly To Us, Such As Your Name,*/}
            {/*                Email Address, Phone Number, And Company Information. This Information Is Collected When You*/}
            {/*                Sign Up For Our Services, Subscribe To Newsletters, Or Contact Us For Support.*/}


            {/*                Log Data*/}

            {/*                Like Many Websites, We May Collect Information That Your Browser Sends Whenever You Visit*/}
            {/*                Our Website. This May Include Your IP Address, Browser Type, Browser Version, The Pages Of*/}
            {/*                Our Website That You Visit, The Time And Date Of Your Visit, The Time Spent On Those Pages,*/}
            {/*                And Other Statistics.*/}


            {/*                Cookies*/}

            {/*                We Use Cookies To Collect Information And Improve Our Services. Cookies Are Small Data Files*/}
            {/*                That Are Stored On Your Device. You Can Instruct Your Browser To Refuse All Cookies Or To*/}
            {/*                Indicate When A Cookie Is Being Sent. However, If You Do Not Accept Cookies, You May Not Be*/}
            {/*                Able To Use Some Portions Of Our Website.*/}


            {/*                How We Use Your Information*/}
            {/*                We Use The Information We Collect For Various Purposes, Including:*/}

            {/*                - Providing, Maintaining, And Improving Our Services*/}
            {/*                - Sending You Updates, Newsletters, And Marketing Communications*/}
            {/*                - Responding To Your Inquiries And Providing Customer Support*/}
            {/*                - Analyzing Usage Data To Enhance The User Experience*/}

            {/*                Information Sharing*/}
            {/*                We Do Not Sell, Trade, Or Rent Your Personal Information To Third Parties. However, We May*/}
            {/*                Share Your Information With Trusted Third Parties Who Assist Us In Operating Our Website,*/}
            {/*                Conducting Our Business, Or Servicing You, As Long As Those Parties Agree To Keep This*/}
            {/*                Information Confidential.*/}

            {/*                Security*/}
            {/*                We Take The Security Of Your Information Seriously And Implement Industry-Standard Measures*/}
            {/*                To Protect It. However, No Method Of Transmission Over The Internet Or Electronic Storage Is*/}
            {/*                100% Secure. Therefore, We Cannot Guarantee Its Absolute Security.*/}

            {/*                Your Choices*/}
            {/*                You Can Control The Information We Collect By Adjusting Your Browser Settings, Unsubscribing*/}
            {/*                From Newsletters, Or Contacting Us Directly. You May Also Request Access, Correction, Or*/}
            {/*                Deletion Of Your Personal Information By Reaching Out To Our Privacy Team.*/}

            {/*                Changes To This Privacy Policy*/}
            {/*                We May Update This Privacy Policy From Time To Time. The Date Of The Latest Revision Will Be*/}
            {/*                Indicated At The Top Of The Page. We Encourage You To Review This Privacy Policy*/}
            {/*                Periodically For Any Changes.*/}

            {/*                Contact Us*/}
            {/*                If You Have Any Questions Or Concerns About Our Terms Of Use, Please Contact Us At [Your*/}
            {/*                Contact Email]*/}


            {/*                Thank You For Choosing [Your Company Name]. We Appreciate Your Cooperation And Adherence To*/}
            {/*                These Terms.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
}
