import { Prompt } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const RoutingGuard = () => {
  const opened = useSelector((state: RootState) => state.counter.counterIsActive);

  return (
    null
    // <Prompt when={opened} message={'The counter is active, are you sure you want to leave the page?'} />
  )
}

export default RoutingGuard;