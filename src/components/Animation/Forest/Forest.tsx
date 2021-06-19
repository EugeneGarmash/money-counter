import classes from './Forest.module.scss';

interface Props {
  paused: boolean;
}

const Forest = (props: Props) => {
  return (
    <div className={classes.triangles}>
      <div className={classes.triangle2}></div>
      <div className={classes.triangle1}></div>
      <div className={classes.triangle3}></div>
      <div className={classes.triangle5}></div>
      <div className={classes.triangle6}></div>
      <div className={`${classes.sun} ${props.paused ? classes.paused : ''}`}></div>
    </div>
  )
};

export default Forest;
