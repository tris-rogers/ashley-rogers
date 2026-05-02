import "./privacy-policy.css";

const PrivacyPolicy = ({close}) => {
    return (
        <div className="privacy-policy-container">
            <div className="close-policy" onClick={close}>Close</div>

            <div className="privacy-policy-content">
                <h1>Privacy Policy</h1>
                <p>Effective Date: 1st May 2026</p>
                <p>Website: https://www.ash-therapy.co.uk</p>

                <h2>Introduction</h2>
                <p>
                    At ash-therapy.co.uk, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect any personal information you provide through this website.
                </p>

                <h2>Information We Collect</h2>
                <p>
                    We only collect information that you choose to provide through our contact form, which may include:

                    <ul>
                        <li>Your Name</li>
                        <li>Email Address</li>
                        <li>Phone Number</li>
                        <li>The contents of your message</li>
                    </ul>

                    Please do not include sensitive information such as your date of birth, address, or any other personally identifiable information in your message.
                </p>

                <h2>How We Use Your Information</h2>
                <p>
                    We use the information you provide to respond to your inquiries and to provide you with the services you request. We do not share your information with third parties for marketing purposes.
                </p>
                <p>
                    We use your information to:
                    <ul>
                        <li>Response to your enquiry</li>
                        <li>Communicate with you about our services</li>
                        <li>Arrange appointments or consultations where appropriate</li>
                    </ul>
                </p>

                <h2>Legal Basis for Processing</h2>
                <p>
                    We process your personal information for the purpose of responding to your enquiry and providing information about our services. This is based on our legitimate interest in communicating with prospective clients and, where applicable, taking steps at your request before entering into a service agreement.
                </p>

                <h2>How Your Information Is Stored</h2>
                <p>
                    Information submitted through the contact form is sent via email and may be stored securely in our email system.
                    We take reasonable measures to protect your personal information from unauthorised access, misuse, or loss.
                </p>

                <h2>Sharing Your Information</h2>
                <p>
                    We do not sell, rent, or share your personal information with third parties, except where necessary to operate this website (for example, website hosting or email providers) or where required by law.
                </p>

                <h2>How Long We Keep Your Information</h2>
                <p>We will only keep your personal information for as long as necessary to respond to your enquiry and maintain appropriate business records, unless a longer retention period is required by law.</p>
            
                <h2>Your Rights</h2>
                <p>
                    You may have the right to:

                    <ul>
                        <li>Request access to the personal information we hold about you</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your information where appropriate</li>
                        <li>Object to or restrict how your information is processed</li>
                    </ul>

                    To exercise any of these rights, please get in contact with us.
                </p>

                <h2>Changes to This Privacy Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised effective date.
                </p>
            </div>
        </div>
    );
}

export default PrivacyPolicy;