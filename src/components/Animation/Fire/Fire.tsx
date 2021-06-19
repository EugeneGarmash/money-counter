import classes from './Fire.module.scss';

interface Props {
  paused: boolean;
}

const Fire = (props: Props) => {
  return (
    <div className={classes.fire}>
      <div className={classes.flames}>
        <div className={`${classes.flame} ${props.paused ? classes.paused : ''}`}></div>
        <div className={`${classes.flame} ${props.paused ? classes.paused : ''}`}></div>
        <div className={`${classes.flame} ${props.paused ? classes.paused : ''}`}></div>
        <div className={`${classes.flame} ${props.paused ? classes.paused : ''}`}></div>
      </div>
      <div className={classes.logs}/>
    </div>
  )
};

export default Fire;
