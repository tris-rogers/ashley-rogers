import "./contact.css";

const Contact = () => {
    return (
        <div className="contact-container section-container" id="contact">
            <h1 className="section-element main-title section-title">
                Get In Touch
            </h1>
            <p className="section-element contact-blurb">
                Ready to take the first step? Reach out to schedule your initial consultaion.
            </p>
            <div className="bubble-container contact-send-a-message section-element">
                <div className="input-container">
                    <label>Name</label>
                    <input className="contact-input" type="text" placeholder="Your Name" />
                </div>

                <div className="input-container">
                    <label>Email</label>
                    <input className="contact-input" type="email" placeholder="your@email.com" />
                </div>

                <div className="input-container">
                    <label>Phone</label>
                    <input className="contact-input" type="tel" placeholder="077 00 000 000" />
                </div>

                <div className="input-container">
                    <label>Message</label>
                    <textarea className="contact-input" placeholder="Tell me about what brings you here.."></textarea>
                </div>

                <div className="input-container button-container">
                    <button className="contact-input">Send Message</button>
                </div>
            </div>
        </div>
    )
}
export default Contact;