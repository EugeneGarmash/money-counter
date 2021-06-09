import { Fragment } from 'react';
import Spinner from '../Spinner/Spinner';
import Counter from '../Counter/Counter';
import Modals from '../Modals/Modals';
import RoutingGuard from '../RoutingGuard/RoutingGuard';

const Helpers = () => {
  return (
    <Fragment>
      <Counter />

      <Spinner />


      <Modals />

      <RoutingGuard />

    </Fragment>
  );
}

export default Helpers;