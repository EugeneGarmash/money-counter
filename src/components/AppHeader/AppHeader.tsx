import React from 'react';
import styled from 'styled-components';
import MenuToggleButton from './MenuToggleButton';

import './AppHeader.scss';
import MuteButton from '../Button/MuteButton';

/** @info returns a react component
 * to modify styles use `props => condition ? a : b ` in template literals
 * but do not forget to pass props first
 * */
const StyledDisclaimer = styled.p`
  margin: ${props => props.margin};
  font-size: calc(10px + 1vmin);
  @media (min-width: 2500px) {
    color: orange;
  }
`

const StyledH1 = styled.h1`
  margin: 0;
`
const AppHeader = () => {

  return (
    <header className="AppHeader">
      <div className='AppHeader__MenuToggleButtonContainer'>
        <MenuToggleButton />
      </div>

      <div className=''>
        <StyledH1>Money counter</StyledH1>
        <StyledDisclaimer margin='0'>
          See how much your time cost
        </StyledDisclaimer>
      </div>

      <div className='AppHeader__muteButtonContainer'>
        <MuteButton />
      </div>

      <style jsx>{`
        .AppHeader {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
        }
        .AppHeader__MenuToggleButtonContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 30px;
        }
      `}</style>
    </header>
  );
}

export default AppHeader;