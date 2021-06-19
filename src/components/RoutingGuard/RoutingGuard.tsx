import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import handleActiveTabClose from '../../utils/handleActiveTabClose';
import { useEffect } from 'react';

const RoutingGuard = () => {
  const counterIsActive = useSelector((state: RootState) => state.counter.counterIsActive);

  useEffect(() => {
    handleActiveTabClose(counterIsActive);
  }, [counterIsActive]);

  return  null
}

export default RoutingGuard;
