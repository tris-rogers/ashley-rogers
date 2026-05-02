export const CTAPrimary = ()=> {
    return (
        <button className="cta-button primary" onClick={()=>{
                const element = document.querySelector('#contact');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }}
        >
            Get In Touch
        </button>
    )
}

export const CTASecondary = () => {
    return (
        <button className="cta-button secondary" onClick={()=>{
            const element = document.querySelector('.dropdown-container');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            if (!element?.classList.contains('dropdown-open')) {
                const clickContainer = document.querySelector('.dropdown-container .dropdown-title');
                if (clickContainer) {
                    clickContainer.dispatchEvent(new MouseEvent('click', { bubbles: true }));
                }
            }
            }}
        >
            Learn More
        </button>
    )
}