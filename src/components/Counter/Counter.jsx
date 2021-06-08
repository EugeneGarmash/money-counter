import {
  useEffect,
  useCallback,
  useRef,
} from 'react'
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { setCounterValue } from '../../redux/counterReducer/counterReducer';
import { counterTimeStepInSeconds } from '../../utils/constants';

const Counter = () => {
  const timerId = useRef(null);
  const dispatch = useDispatch();

  const counterIsActive = useSelector(state => state.counter.counterIsActive);
  const counterTimeStep = useSelector(state => state.counter.counterTimeStep);
  const counterSalaryStep = useSelector(state => state.counter.counterSalaryStep);
  const counterValue = useSelector(state => state.counter.counterValue);

  const startInterval = useCallback(
    () => {
      timerId.current = setInterval(
        () => {
          dispatch(setCounterValue({
            ...counterValue,
            counterValue: counterValue.counterValue + counterSalaryStep,
            secondsPassed: counterValue.secondsPassed + counterTimeStepInSeconds,
          }));
        },
        counterTimeStep
      )
    },
    [
      counterSalaryStep,
      counterTimeStep,
      counterValue,
      dispatch,
    ]
  );

  useEffect(() => {
    counterIsActive && startInterval();
    return () => clearTimeout(timerId?.current);
  }, [startInterval, counterIsActive]);

  return null;
}

export default Counter;