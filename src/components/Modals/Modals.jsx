import React, { Fragment } from 'react';

import AuthentificationModal from './AuthentificationModal';
import MenuModal from './MenuModal';


const Modals = () => {

  // render conditionally to prevent redundant rendering

  return (
    <Fragment>
      <AuthentificationModal />
      <MenuModal />
    </Fragment>
  )
}

export default Modals;