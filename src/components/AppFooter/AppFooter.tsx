import React from 'react';
import AppMainButton from '../AppMainButton/AppMainButton';
import './AppFooter.scss';

type PropsType = {
}

const AppFooter: React.FC<PropsType> = () => {

  return (
    <div className='AppFooter'>
      <div className='AppFooter__primaryButtonContainer'>
        <AppMainButton />
      </div>
    </div>
  )
}

export default AppFooter;
