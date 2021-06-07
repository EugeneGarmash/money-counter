import React from 'react';

import AppMainButton from '../AppMainButton';

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
        <AppMainButton
          setCounterPassed={props.setCounterPassed}
          counterState={props.counterState}
        />
      </div>
    </div>
  )
}

export default AppFooter;