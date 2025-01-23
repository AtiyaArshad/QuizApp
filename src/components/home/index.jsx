import React, { useEffect, useState } from 'react';
import './index.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state/index";

const Home = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(''); // State for error message
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    if (!email.trim()) {
      return 'Email is required.';
    }

    if (email.trim() !== email) {
      return 'Email should not contain leading or trailing spaces.';
    }

    const emailRegex = /^[^\s@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address.';
    }

    if (email.length > 254) {
      return 'Email is too long.';
    }

    const disallowedCharsRegex = /[\s,<>#]/;
    if (disallowedCharsRegex.test(email)) {
      return 'Email contains invalid characters.';
    }

    return ''; // No errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error messages

    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    // Proceed if valid
    dispatch(
      setLogin({
        user: email,
      })
    );

    console.log("Logged in");
    navigate("/quiz");
  };

  const enterFullscreen = () => {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };

  useEffect(() => {
    const exitFullscreenHandler = () => {
      if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        navigate('/');
      }
    };

    document.addEventListener('fullscreenchange', exitFullscreenHandler);
    document.addEventListener('mozfullscreenchange', exitFullscreenHandler);
    document.addEventListener('webkitfullscreenchange', exitFullscreenHandler);
    document.addEventListener('msfullscreenchange', exitFullscreenHandler);

    return () => {
      document.removeEventListener('fullscreenchange', exitFullscreenHandler);
      document.removeEventListener('mozfullscreenchange', exitFullscreenHandler);
      document.removeEventListener('webkitfullscreenchange', exitFullscreenHandler);
      document.removeEventListener('msfullscreenchange', exitFullscreenHandler);
    };
  }, [navigate]);

  return (
    <div>
      <div className="white__box">
        <div className="col3">
          <form onSubmit={handleSubmit}>
            <div className='col4'>
              <div className='headline'>QuizSphere : Where Facts Meet Fun!</div>
              <input
                className="effect"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
              />
              {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>} {/* Display error */}
              <button className='submit' type="submit" onClick={enterFullscreen}>
                ENTER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
