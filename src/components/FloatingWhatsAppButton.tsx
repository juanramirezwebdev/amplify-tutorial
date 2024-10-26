import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWhatsAppButton.css';

const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/640273550632"
      className="floating-whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default FloatingWhatsAppButton;