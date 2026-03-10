import "./footer.css";

interface FooterLink {
  name: string;
  url?: string;
  path?: string;
  style?: string;
}

interface FooterColumn {
  column: string;
  links: FooterLink[];
}

interface FooterProps {
  info: {
    copyrightMessage: string;
    developerMessage: string;
    developerCompany: string;
    links: FooterColumn[];
  };
}

const Footer = ({info}: FooterProps) => {
    return (
        <div className="footer-container">
            <div className="links-container">
                <div className="links-column">
                    <div>Pages</div>
                    <ul>
                        {
                            info.links[1].links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.path}>{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="links-column">
                    <div>Important Links</div>
                    <ul>
                        {
                            info.links[0].links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url}>{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className="copyright-message">{info.copyrightMessage}</div>
            <div className="developer-message">
                {info.developerMessage} <span><u>{info.developerCompany}</u></span>
            </div>
        </div>
    );
}

export default Footer;