import bacLogo from "../../assets/images/BACP-Logo.png";

import { useState } from "react";

import Footer from "./footer";
import PrivacyPolicy from "../privacy-policy/privacy-policy";

const FooterContainer = () => {
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
    const startYear = 2026;
    const currentYear = new Date().getFullYear();
    const yearMessage = startYear === currentYear ? `${startYear}` : `${startYear} - ${currentYear}`;
    const info = {
        copyrightMessage: `© ${yearMessage} Ashley Rogers. All rights reserved.`,
        developerMessage: `Website designed and built by`,
        developerCompany: 'TR Software Solutions LTD',
        links: [
            {
                column: 
                "Legal", 
                links: [
                    { name: 'Privacy Policy', onClick: ()=> setShowPrivacyPolicy(true)},
                    // { name: 'Terms of Service', url: '/terms-of-service' }
                ]
            },
            {
                column: "Pages", 
                links: [
                    { name: 'Home', path: '#home' },
                    { name: 'About', path: '#about' },
                    // { name: 'Services', path: '#services' },
                    { name: 'Pricing', path: '#pricing' },
                    { name: 'Contact', path: '#contact', style: "cta" }
                ]
            }
        ],
    };
    return (
        <>
            {showPrivacyPolicy && <PrivacyPolicy close={()=>setShowPrivacyPolicy(false)} />}
            <Footer info={info} logo={bacLogo} />
        </>
    );
}

export default FooterContainer;