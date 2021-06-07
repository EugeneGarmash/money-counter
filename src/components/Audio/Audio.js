import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import 

const Audio = () => {
  const dispatch = useDispatch();
  const entertainmentMode = useSelector(s => s.audio.entertainmentMode);

  console.log('Audio updated');


  // setTimeout(
  //   () => {
  //     dispatch({type: 'SOME_ACTION'});
  //   },
  //   1000
  // )

  // useEffect(() => {
  //   dispatch(changeTrack(entertainmentMode));
  // }, [entertainmentMode]);

  return null;
}

export default Audio;