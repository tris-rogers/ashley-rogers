import Footer from "./footer";

const FooterContainer = () => {
    const startYear = 2026;
    const currentYear = new Date().getFullYear();
    const yearMessage = startYear === currentYear ? `${startYear}` : `${startYear} - ${currentYear}`;
    const info = {
        copyrightMessage: `© ${yearMessage} Ashley Rogers. All rights reserved.`,
        developerMessage: `Website designed and built by TR Software Solutions LTD`,
        links: [
            {
                column: 
                "Legal", 
                links: [
                    { name: 'Privacy Policy', url: '/privacy-policy' },
                    { name: 'Terms of Service', url: '/terms-of-service' }
                ]
            },
            {
                column: "Pages", 
                links: [
                    { name: 'Home', path: '#home' },
                    { name: 'About', path: '#about' },
                    { name: 'Services', path: '#services' },
                    { name: 'Pricing', path: '#pricing' },
                    { name: 'Contact', path: '#contact', style: "cta" }
                ]
            }
        ],
    };
    return (
        <Footer info={info} />
    );
}

export default FooterContainer;