
import { useEffect, useRef, useState } from 'react';
import Navigation from './navigation';
import NavigationSmallScreen from './navigation-small-screen';

const NavigationContainer = () => {
  const [selectedLink, setSelectedLink] = useState<string>("");
  
  const links = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Pricing', path: '#pricing' },
    { name: 'Contact', path: '#contact', style: "cta" }
  ];

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(true);

  const handleClick = (linkName: string, path: string) => {
    setSelectedLink(linkName);
    if (!!path) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  const resizeTimeoutRef = useRef<any>(null);
  const scrollTimeoutRef = useRef<any>(null);

  useEffect(() => {

    const handleWindowResize = () => {
      clearTimeout(resizeTimeoutRef.current);

      resizeTimeoutRef.current = setTimeout(() => {
        setIsSmallScreen(window.innerWidth < 800);
      }, 1000);

    };

    handleWindowResize(); // Initial check

    const handleWindowScroll = () => {
      if (window.innerWidth < 800) return; // Skip on small screens

      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        for (const link of links) {
          const el = document.querySelector(link.path);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              setSelectedLink(link.name);
              break; // stop at first section that matches
            }
          }
        }
      }, 500); // adjust debounce delay as needed
    }

    window.addEventListener('resize', handleWindowResize);

    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('scroll', handleWindowScroll);
      clearTimeout(resizeTimeoutRef.current);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, [])

  if (isSmallScreen) {
    return (
      <NavigationSmallScreen
        links={links}
        selectedLink={selectedLink}
        setSelectedLink={handleClick}
      />
    )
  }

  return (
    <Navigation
      links={links}
      selectedLink={selectedLink}
      setSelectedLink={handleClick}
    />
  );
}

export default NavigationContainer;