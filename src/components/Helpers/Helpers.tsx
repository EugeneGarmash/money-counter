import { Fragment } from 'react';
import Spinner from '../Spinner';
import Audio from '../Audio/Audio';
import Counter from '../Counter/Counter';
import Modals from '../Modals/Modals';

const Helpers = () => {
  return (
    <Fragment>
      <Counter />

      <Spinner />

      <Audio />

      <Modals />
    </Fragment>
  );
}

export default Helpers;