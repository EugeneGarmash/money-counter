import classes from './MenuToggleButton.module.scss';
import cn from 'classnames';

const CloseToggleButton = (props) => {
  const {
    handleToggleMenu,
    closeMode,
  } = props;

  return (
    <div
      onClick={handleToggleMenu}
      className={cn(
        classes.MenuToggleButton , {
        [classes.MenuToggleButton_open]: closeMode,
      })
    }>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default CloseToggleButton;