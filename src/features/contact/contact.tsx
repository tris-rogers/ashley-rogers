import type { FormEvent } from "react";

import "./contact.css";

interface ContactProps {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;

    data: {
        name: string;
        email: string;
        phone: string;
        message: string;
    };

    setters: {
        setName: React.Dispatch<React.SetStateAction<string>>;
        setEmail: React.Dispatch<React.SetStateAction<string>>;
        setPhone: React.Dispatch<React.SetStateAction<string>>;
        setMessage: React.Dispatch<React.SetStateAction<string>>;
    };

    canSubmit: boolean;
    emailComponent: React.ReactNode;
}

const Contact = ({handleSubmit, data, setters, canSubmit, emailComponent}: ContactProps) => {
    const { name, email, phone, message } = data;
    const { setName, setEmail, setPhone, setMessage } = setters;

    return (
        <div className="contact-container section-container" id="contact">
            <h1 className="section-element main-title section-title">
                Get In Touch
            </h1>
            <div className="section-element contact-blurb" style={{maxWidth: 500, textAlign: 'left'}}>
                <p>
                    If you are considering counselling and would like to find out more, you are welcome to contact me.
                    Reaching out does not commit you to starting therapy. It is simply an opportunity to ask questions or
                    arrange an initial session.
                </p>
                <p>You can contact me by:</p>
                <ul>
                    <li>Email: {emailComponent}</li>
                    {/* <li>Phone</li> */}
                    <li>Contact Form Below</li>
                </ul>

                <br />
                <h2 id="pricing">Pricing</h2>
                <p>£45 per hour session.</p>
                <p>Please get in touch if this feels prohibitive as I have some reduced rate spaces.</p>
                <p>I offer a free 30min appointment to have an initial discussion to see if we are the right fit to work effectively together.</p>
            </div>
            <form className="bubble-container contact-send-a-message section-element" onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Name</label>
                    <input className="contact-input" type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                </div>

                <div className="input-container">
                    <label>Email</label>
                    <input className="contact-input" type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="input-container">
                    <label>Phone</label>
                    <input className="contact-input" type="tel" placeholder="077 00 000 000" value={phone} onChange={e => setPhone(e.target.value)} />
                </div>

                <div className="input-container">
                    <label>Message</label>
                    <textarea className="contact-input" placeholder="Tell me about what brings you here.." value={message} onChange={e => setMessage(e.target.value)}></textarea>
                </div>

                <div className="input-container button-container">
                    <button className="contact-input" type="submit" disabled={!canSubmit}>
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Contact;