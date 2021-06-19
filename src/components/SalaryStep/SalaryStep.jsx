import propTypes from 'prop-types';
import Radium from 'radium';
import { connect } from 'react-redux';
import { setSalaryValue } from '../../redux/salaryReducer/salaryActionCreators';
import { initializeACounter } from '../../redux/counterReducer/counterReducer';
import './SalaryStep.scss';
import { useLocalization } from '../../utils/translations';

/** @info radium */
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

  const { translations } = useLocalization();

  const handleSalaryInputChange = event => {
    props.setSalaryValue(event.target.value);
  }
  const handlePressEnter = (event) => {
    if (event.key === 'Enter' && props.salaryValue) {
      props.initializeACounter();
    }
  }

  return (
    <div className='SalaryStep'>
      <span className='SalaryStep__topText'>{translations.i_make}</span>
      <input
        type='text'
        inputMode='numeric'
        style={salaryInputStyles}
        value={props.salaryValue}
        onChange={handleSalaryInputChange}
        placeholder={translations.type_here}
        onKeyDown={handlePressEnter}
      />
      <span className='SalaryStep__bottomText'>{translations.units_per_month}</span>
      <br />
    </div>
  );
}

SalaryStep.propTypes = {
  salaryValue: propTypes.string,
  setSalaryValue: propTypes.func,
}

const mapStateToProps = (state) => {
  return {
    salaryValue: state.salary.salaryValue,
  }
};

const mapDispatchToProps = dispatch => ({
  setSalaryValue: value => dispatch(setSalaryValue(value)),
  initializeACounter: () => dispatch(initializeACounter()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Radium(SalaryStep));

/** @info mapDispatchToProps may be a simple object */
// export default connect(
//   state => ({
//     salaryValue: state.salary.salaryValue,
//   }), {
//     setSalaryValue,
// })(Radium(SalaryStep));

/** @info second way */
// export default connect(
//   state => ({
//     salaryValue: state.salary.salaryValue,
//   }), dispatch => ({
//     setSalaryValue: value => dispatch(setSalaryValue(value)),
//     initializeACounter: (token) => dispatch(initializeACounter(token)),
//   })
// )(Radium(SalaryStep));
