import { useState, type FormEvent } from "react";
import Contact from "./contact";

const EmailButton = () => {
    const [revealedEmail, setRevealedEmail] = useState("");
    const [fetching, setFetching] = useState(false);
    const fetchEmail = async () => {
        setFetching(true);

        try {
            const response = await fetch("/revealEmail.php", {
                method: "POST",
                headers: {"Content-Type": "application/x-www-form-urlencoded"}
            });

            const email = await response.text();

            if (!response.ok) {
                throw new Error(email);
            }
            setRevealedEmail(email);

            setFetching(false);
        } catch (error) {
            setFetching(false);
            setRevealedEmail("");
            
            if (error instanceof Error && !!error?.message) {
                alert(error.message);
            } else {
                alert("Something went wrong. Please try again.");
            }
        }
    }

    if (!!revealedEmail) {
        return <EmailLink email={revealedEmail} />;
    }

    return (
        <button 
            className="reveal-email-button"
            onClick={fetchEmail}
        >
            {fetching ? <i className="fas fa-spinner fa-spin"></i> : "Reveal Email"}
        </button>
    )
}

const EmailLink = ({email}:{email: string}) => {
    return (
        <a href={`mailto:${email}`} style={{color: "blue", textDecoration: "underline"}}>
            {email}
        </a>
    );
}

const ContactContainer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("/contact.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    name,
                    email,
                    phone,
                    message,
                }),
            });

            const text = await response.text();

            if (!response.ok) {
                throw new Error(text);
            }

            setName("");
            setEmail("");
            setPhone("");
            setMessage("");


            alert("Message sent successfully!");
        } catch (error) {
            
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("Something went wrong.");
            }
        }
    };

    return (
        <Contact 
            handleSubmit={handleSubmit} 
            data={{ name, email, phone, message }} 
            setters={{ setName, setEmail, setPhone, setMessage }} 
            canSubmit={Boolean(name.trim() && email.trim() && message.trim() && isValidEmail(email))}
            emailComponent={<EmailButton />}
        />
    )
}
export default ContactContainer;