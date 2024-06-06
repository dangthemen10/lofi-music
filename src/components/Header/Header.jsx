import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changeDayNight } from '../../redux/actions';
import './Header.scss';
import { Link } from 'react-router-dom';
import DarkLightSwitch from '../DarkLightSwitch/DarkLightSwitch';

const Header = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const daynight = useSelector((state) => state.modeState);
  const dispatch = useDispatch();

  const { mode } = daynight;

  const daynightHandler = () => {
    dispatch(changeDayNight(mode));
  };

  const fullscreenHandler = () => {
    if (!fullscreen) {
      setFullscreen(true);
      const e = document.documentElement;
      e.requestFullscreen();
    } else {
      setFullscreen(false);
      if (!document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
  };

  return (
    <nav className='wrap'>
      <Link to='/'>
        <img src='/assets/icons/lofi-logo.gif' alt='' />
      </Link>
      
      <div className='nav-menu'>
        <div onClick={daynightHandler}>
          <DarkLightSwitch theme={mode} />
        </div>

        <button onClick={fullscreenHandler} className='fullscreen-btn'>
          <i className='fas fa-expand fa-lg'></i>
        </button>
      </div>
      
    </nav>
  );
};

export default Header;
