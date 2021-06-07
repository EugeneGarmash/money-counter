import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import Radium from 'radium';
import { connect } from 'react-redux';

import { setSalaryValue } from '../../redux/salaryReducer/salaryActionCreators';
import { logout } from '../../redux/authReducer/authActionCreators';
import { setCounterSalaryStep } from '../../redux/counterReducer/counterReducer';
import { toggleAppState } from '../../redux/appReducer/appReducer';
import { initializeACounter } from '../../redux/counterReducer/counterReducer';
import {
  AUTH_MODAL
} from '../../redux/modalReducer/modalReducer';
import { RootState } from '../../redux/store';

import buttonClasses from '../AppMainButton/AppMainButton.module.scss';
import './SalaryStep.scss';
import Button from '../Button/Button';

const salaryInputStyles = {
  padding: '10px',
  border: 'none',
  borderRadius: '3px',
  maxWidth: '100%',
  color: '#282c34',
  fontSize: '50px',
  marginBottom: '20px',
  textAlign: 'center',
  backgroundColor: 'rgba(230, 224, 224, 0.5)',
  ':hover': {
    outline: 'none',
    backgroundColor: 'rgba(230, 224, 224, 0.7)',
  },
  ':focus' : {
    outline: 'none',
    backgroundColor: 'rgba(230, 224, 224, 0.7)',
  },
  '@media (min-width: 2500px)': {
    backgroundColor: 'orange',
  }
}

const SalaryStep = props => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(s => s.auth.success.token);
  // const userIsAuthentificated = useSelector(s => s.auth.success.token);

  const handleSalaryInputChange = event => {
    props.setSalaryValue(event.target.value);
  }
  const handlePressEnter = (event) => {
    if (event.key === 'Enter' && props.salaryValue) {
      props.initializeACounter(isLoggedIn);
    }
  }

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className='SalaryStep'>
      <span className='SalaryStep__topText'>I make</span>
      <input
        type='text'
        style={salaryInputStyles}
        value={props.salaryValue}
        onChange={handleSalaryInputChange}
        placeholder='type here'
        onKeyDown={handlePressEnter}
      />
      <span className='SalaryStep__bottomText'>units per month</span>
      <br />
      <div className='SalaryStep__testBlock'>
        {/* { isLoggedIn
            ? <div>
              <div className='SalaryStep__buttonContainer'>
                <Button
                  onClick={handleLogout}
                  className={buttonClasses.AppMainButton}
                >
                  Logout
                </Button>
              </div>
                <Button
                  onClick={handleLogout}
                  className={buttonClasses.AppMainButton}
                >
                  Personal Cabinet
                </Button>
              </div>
            : null

        } */}
      </div>
    </div>
  );
}

SalaryStep.propTypes = {
  salaryValue: propTypes.string,
  setSalaryValue: propTypes.func,
}

/** @info mapDispatchToProps may be a simple object */
// export default connect(
//   state => ({
//     salaryValue: state.salary.salaryValue,
//   }), {
//     setSalaryValue,
// })(Radium(SalaryStep));

const mapStateToProps = (state) => {
  return {
    salaryValue: state.salary.salaryValue,
    authModalIsOpen: state.modal[AUTH_MODAL].isOpen,
  }
};

const mapDispatchToProps = dispatch => ({
  setSalaryValue: value => dispatch(setSalaryValue(value)),
  toggleAppState: () => dispatch(toggleAppState()),
  setCounterSalaryStep: () => dispatch(setCounterSalaryStep()),
  initializeACounter: (token) => dispatch(initializeACounter(token)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Radium(SalaryStep));

// export default connect(
//   state => ({
//     salaryValue: state.salary.salaryValue,
//     authModalIsOpen: state.modal[AUTH_MODAL].isOpen,
//   }), dispatch => ({
//     setSalaryValue: value => dispatch(setSalaryValue(value)),
//     toggleAppState: () => dispatch(toggleAppState()),
//     setCounterSalaryStep: () => dispatch(setCounterSalaryStep()),
//     initializeACounter: (token) => dispatch(initializeACounter(token)),
//   })
// )(Radium(SalaryStep));