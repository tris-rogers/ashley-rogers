import './App.css'
import NavigationContainer from './components/navigation/navigation-container'
import HomeContainer from './features/home/home-container'
import AboutContainer from './features/about/about-container'
import ServicesContainer from './features/services/services-container'
import PricingContainer from './features/pricing/pricing-container'
import ContactContainer from './features/contact/contact-container'
import FooterContainer from './features/footer/footer-container'

function App() {

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
