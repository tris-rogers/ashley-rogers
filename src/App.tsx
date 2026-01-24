import './App.css';
import NavigationContainer from './components/navigation/navigation-container';
import HomeContainer from './features/home/home-container';
import AboutContainer from './features/about/about-container';
import ServicesContainer from './features/services/services-container';
import PricingContainer from './features/pricing/pricing-container';
import ContactContainer from './features/contact/contact-container';
import FooterContainer from './features/footer/footer-container';
import { useState } from 'react';
import bcrypt from "bcryptjs";

function App() {
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  if (!isAuth) {
    const PASSWORD_HASH = "$2b$10$UU0zBFWXQVxBS5VSYP80OOcFgvbojQC8cOdJMnBV6dP956OgOnK/e";
    const handlePasswordSubmit = () => {
          
      if (bcrypt.compareSync(password, PASSWORD_HASH)) {
        setIsAuth(true);
        alert("Access granted. Welcome!");
      } else {
        alert("Incorrect password. Please try again.");
      }
      
    }
    
    return (
      <div className="auth-container">
        <h2>Please enter the password to access the application:</h2>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          onClick={handlePasswordSubmit}
        >
          Submit
        </button>
      </div>
    );
  }

  return (
    <div>
      <NavigationContainer />

      {/* Home */}
      <HomeContainer />

      {/* About */}
      <AboutContainer />

      {/* Services */}
      <ServicesContainer />
      
      {/* Pricing */}
      <PricingContainer />

      {/* Contact */}
      <ContactContainer />

      {/* Footer */}
      <FooterContainer />
    </div>
  )
}

export default App
