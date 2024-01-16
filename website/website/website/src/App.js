import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import image from './image/image.jpg';
import logo from './image/logo.jpg'

function App() {
  const [email, setEmail] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [method, setMethod] = React.useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMethod('email');
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    setMethod('mobile');
  };

  const handleGoogleSignIn = () => {
    // Open Google login page in a new tab/window
    window.open('https://accounts.google.com', '_blank');
    setMethod('google');
  };

  return (
    <div className="container">
      <div className='logo'>
        <img src={logo}></img>
      </div>
      <div className="mobile-echo-description">
        <img src={image}></img>
      </div>
      <div className='space1'>
        <div className="welcome-message">
          <h1>Welcome to IECHO</h1>
          <h2> Login or Signup </h2>
          <p>Please choose an option to continue</p>
        </div>
        <div className="input-methods">
          <div className="input-method">
            <button> <FontAwesomeIcon icon={faEnvelope} /> Continue with Email</button>
          </div>
          <div className="input-method">
            <button> <FontAwesomeIcon icon={faMobileScreenButton} />Continue with Mobile</button>
          </div>
          <div className="input-method para">
            OR
          </div>
          <div className="input-method">
            <button onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} />Continue with Google</button>
          </div>
          <div>
            <p>
              By continuing, you accept the <a>Terms of Use</a> and <a>Privacy Policy</a>
            </p>
          </div>
        </div>
        <div className="disclaimer">
          <p>
          Disclaimer: This is an alpha test version of the iECHO website. The software is provided on an "as is" and "as available" basis. ECHO Institute (UNM) or ECHO india do not give any warranties, whether express or implied, as to the suitability or usability of the website.
          </p>
        </div>
      </div>
      <div>
      <div className="echo-description">
        <img src={image}></img>
        <h2>Learn from Experts and <br/> Share your Expertise</h2>
        <p>
          The ECHO model uses a hub-and-spoke <br/> knowledge-sharing approach.
        </p>
      </div>
      </div>
    </div>
  );
}

export default App;