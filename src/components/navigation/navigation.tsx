import "./navigation.css";

type NavigationProps = {
    links: { name: string; path: string, style?: string }[];
    selectedLink: string;
    setSelectedLink: (link: string, path: string) => void;
}

const Navigation = ({ links, selectedLink, setSelectedLink }: NavigationProps) => {
    return <div className="navigation-container large-screen">
        <div className="navigation-header">
            <div className="name-title">Ashley Rogers</div>
        </div>

        <div className="link-container">
            {
                links.map((link) => (
                    <a
                        key={link.name}
                        href={link.path}
                        onClick={() => setSelectedLink(link.name, link.path)}
                        className={`nav-link ${selectedLink === link.name ? 'selected' : ''} ${link?.style === "cta" ? "cta-link" : ""}`}
                        style={{ fontWeight: selectedLink === link.name ? 'bold' : 'normal', marginRight: '20px' }}
                    >
                        {link.name}
                    </a>
                ))
            }
        </div>
    </div>
}

export default Navigation;