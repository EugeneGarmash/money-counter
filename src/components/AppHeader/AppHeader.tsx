import styled from 'styled-components';
import CloseToggleButton from '../Button/CloseToggleButton/CloseToggleButton';
import MuteButton from '../Button/MuteButton';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_MODAL, openModal } from '../../redux/modalReducer/modalReducer';
import { RootState } from '../../redux/store';

/** @info styled components */
/**
 * @info returns a react component
 * to modify styles use `props => condition ? a : b ` in template literals
 * but do not forget to pass props first
 * */
interface StyledDisclaimerType {
  margin: string;
}
const StyledDisclaimer = styled.p<StyledDisclaimerType>`
  margin: ${props => props.margin};
  font-size: calc(10px + 1vmin);
  @media (min-width: 2500px) {
    color: orange;
  }
`

const StyledH1 = styled.h1`
  margin: 0;
  @media (max-width: 410px) {
    font-size: calc(10px + 5vmin);
  }
`
/** @info styled components */


const AppHeader = () => {

  const dispatch = useDispatch();
  const mobileMeuIsOpen = useSelector((s: RootState) => s.modal[MENU_MODAL].isOpen);

  const handleToggleMenu = () => {
    dispatch(openModal(MENU_MODAL));
  }

  return (
    <header className="AppHeader">
      <div className='AppHeader__MenuToggleButtonContainer'>
        <CloseToggleButton
          closeMode={mobileMeuIsOpen}
          handleToggleMenu={handleToggleMenu}
        />
      </div>

      <div className='AppHeader__header'>
        <StyledH1>Money counter</StyledH1>
        <StyledDisclaimer margin='0'>
          See how much your time cost
        </StyledDisclaimer>
      </div>

      <div className='AppHeader__muteButtonContainer'>
        <MuteButton />
      </div>

      {/** @info https://www.google.com/search?q=styled+jsx+Received+%60true%60+for+a+non-boolean+attribute+%60jsx%60&ei=Pqy_YOrFArD5qwG6-b3ADg&oq=styled+jsx+Received+%60true%60+for+a+non-boolean+attribute+%60jsx%60&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEBYQHjoHCAAQRxCwAzoHCAAQsAMQQzoCCAA6BAgAEB5QlQNYhDJgmzVoAXACeACAAagBiAHrBJIBAzEuNJgBAKABAaABAqoBB2d3cy13aXrIAQrAAQE&sclient=gws-wiz&ved=0ahUKEwjq3NaPy4jxAhWw_CoKHbp8D-gQ4dUDCBE&uact=5 */}
      {/** @info https://stackoverflow.com/questions/57261540/warning-received-true-for-a-non-boolean-attribute-jsx-zeit-styled-jsx */}
      <style jsx>{`
        .AppHeader {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 45px;
          min-height: 50px;
        }
        .AppHeader__MenuToggleButtonContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 30px;
        }
        @media (max-width: 430px) {
          .AppHeader__MenuToggleButtonContainer {
            margin-right: 0;
          }
          .AppHeader {
            justify-content: space-between;
            margin-bottom: 15px;
          }
        }
      `}</style>
    </header>
  );
}

export default AppHeader;