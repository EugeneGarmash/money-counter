import { Fragment } from 'react';
import Spinner from '../Spinner';
import Audio from '../Audio/Audio';
import Counter from '../Counter/Counter';
import Modals from '../Modals/Modals';
import RoutingGuard from '../RoutingGuard/RoutingGuard';

const Helpers = () => {
  return (
    <Fragment>
      <Counter />

      <Spinner />

      <Audio />

      <Modals />

      <RoutingGuard />

    </Fragment>
  );
}

export default Helpers;