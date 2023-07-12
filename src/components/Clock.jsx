import '../styles/Clock.scss'
import { useDispatch } from 'react-redux';
import { changeTime } from '../redux/timeSlice';
import { changeTimeState } from '../redux/timeStateSlice';
import { changeActionState } from '../redux/actionStateSlice';
import { changePlayState } from '../redux/playStateSlice';

const Clock = () => {

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(changeActionState('session'));
    dispatch(changeTimeState('session'));
    dispatch(changeTime({session:25,break:5}));
    dispatch(changePlayState(false));

  }


  return (
    <span onClick={handleClick} className="clock"><div>25 + 5</div></span>
  )
}

export {Clock};