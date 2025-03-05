import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <a
      href="https://wa.me/+923000431046?text=Hello,%20I%20am%20interested%20in%20your%20Digital%20Solution%20Software%20House%20services.%20Can%20you%20provide%20more%20details?"
      className="fixed bottom-5 right-5 w-16 h-16 bounce"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-full h-full"
      />
    </a>

  </StrictMode>
);
