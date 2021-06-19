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
  const counter = useSelector(state => state.counter);

  const startInterval = useCallback(
    () => {
      timerId.current = setInterval(
        () => {
          dispatch(setCounterValue({
            counterValue: counter.counterValue + counter.counterSalaryStep,
            secondsPassed: counter.secondsPassed + counterTimeStepInSeconds,
          }));
        },
        counter.counterTimeStep
      )
    },
    [ counter, dispatch ]
  );

  useEffect(() => {
    counterIsActive && startInterval();
    return () => clearTimeout(timerId?.current);
  }, [startInterval, counterIsActive]);

  return null;
}

export default Counter;
