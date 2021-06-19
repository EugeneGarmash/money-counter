import { useSelector } from 'react-redux';
import SalaryStep from '../SalaryStep/SalaryStep';
import CounterStep from '../CounterStep/CounterStep';
import './AppStepManager.scss';
import { RootState } from '../../redux/store';

const AppStepManager = () => {
  const appIsInSalaryStep = useSelector((state: RootState) => state.app.appIsInSalaryStep);

  return (
    <main className='AppStepManager'>
    {
      appIsInSalaryStep
        ? <SalaryStep />
        : <CounterStep />
    }
  </main>
  );
}

export default AppStepManager;
