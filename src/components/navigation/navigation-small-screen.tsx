import { useState } from "react";
import "./navigation.css";

type NavigationHeaderProps = {
    actionBtn?: React.ReactNode;
}

const NavigationHeader = ({ actionBtn }: NavigationHeaderProps) => (
    <div className="navigation-header">
        <div className="name-title">Ashley Rogers</div>
        {actionBtn}
    </div>
)

// type NavigationProps = {
//     links: { name: string; path: string }[];
//     selectedLink: string;
//     setSelectedLink: (link: string, path: string) => void;
// }
type NavigationLink = {
  name: string;
  path: string;
  style?: string;
};

type NavigationProps = {
  links: NavigationLink[];
  selectedLink: string;
  setSelectedLink: (link: string, path: string) => void;
};

const NavigationSmallScreen = ({ links, selectedLink, setSelectedLink }: NavigationProps) => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleLinkClick = (linkName: string, path: string) => {
        setSelectedLink(linkName, path);
        setIsMenuOpen(false);

    }

    return (
        <div className={`navigation-container small-screen`}>
            <NavigationHeader
                actionBtn={
                    <div className="hamburger-btn" onClick={() => setIsMenuOpen(true)}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                }
            />

            <div className={`links-container ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
                <NavigationHeader
                    actionBtn={
                        <div className="hamburger-btn" onClick={() => setIsMenuOpen(false)}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    }
                />
                <div className="link-container">
                    {
                        links.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className={`nav-link ${selectedLink === link.name ? 'selected' : ''} ${link?.style === "cta" ? "cta-link" : ""}`}
                                onClick={() => handleLinkClick(link.name, link.path)}
                            >
                                {link.name}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default NavigationSmallScreen;