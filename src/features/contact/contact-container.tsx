import { useState, type FormEvent } from "react";
import Contact from "./contact";

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
        />
    )
}
export default ContactContainer;