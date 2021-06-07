import {
  useEffect,
  useCallback,
  useRef,
} from 'react'
import {
  useSelector,
} from 'react-redux';

const Counter = props => {
  const {
    counterIsActive,
    setCounterPassed,
  } = props;
  const timerId = useRef(null);
  const counterTimeStep = useSelector(state => state.counter.counterTimeStep);
  const counterSalaryStep = useSelector(state => state.counter.counterSalaryStep);

  const startInterval = useCallback(
    () => {
      timerId.current = setInterval(
        () => {
          setCounterPassed(state =>
            !counterIsActive
              ? state
              : {
                  ...state,
                counterValue: state.counterValue + counterSalaryStep,
                secondsPassed: state.secondsPassed + counterTimeStep / 1000,
              }
          );
        },
        counterTimeStep
      )
    },
    [counterIsActive, counterSalaryStep, counterTimeStep, setCounterPassed]
  );

  useEffect(() => {
    startInterval();
    return () => clearTimeout(timerId.current);
  }, [startInterval]);

  return null;
}

export default Counter;