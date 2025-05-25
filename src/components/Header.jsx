
import React, { useState, useEffect } from 'react';
import { Switch } from "../components/ui/switch";
import { Sun, Moon } from "lucide-react";
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Apply the initial theme
    document.documentElement.classList.toggle('light-theme', !isDarkTheme);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDarkTheme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle('light-theme');
  };

  const setLightTheme = () => {
    if (isDarkTheme) {
      setIsDarkTheme(false);
      document.documentElement.classList.add('light-theme');
    }
  };

  const setDarkTheme = () => {
    if (!isDarkTheme) {
      setIsDarkTheme(true);
      document.documentElement.classList.remove('light-theme');
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="theme-toggle">
          <div 
            className={`theme-icon-wrapper ${isDarkTheme ? 'active' : ''}`}
            onClick={setDarkTheme}
          >
            <Moon size={16} className="theme-icon dark-icon" />
          </div>
          <Switch 
            checked={!isDarkTheme}
            onCheckedChange={toggleTheme}
          />
          <div 
            className={`theme-icon-wrapper ${!isDarkTheme ? 'active' : ''}`}
            onClick={setLightTheme}
          >
            <Sun size={16} className="theme-icon light-icon" />
          </div>
        </div>
        <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
