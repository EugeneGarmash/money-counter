import React from 'react';
import AppMainButton from '../AppMainButton/AppMainButton';
import './AppFooter.scss';

type PropsType = {
  setCounterPassed: () => any,
  counterState: {
    secondsPassed: number,
    counterValue: number,
  },
}

const AppFooter: React.FC<PropsType> = props => {

  return (
    <div className='AppFooter'>
      <div className='AppFooter__primaryButtonContainer'>
        <AppMainButton />
      </div>
    </div>
  )
}

export default AppFooter;