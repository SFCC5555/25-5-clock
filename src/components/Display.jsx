import { useEffect } from 'react';
import '../styles/Display.scss'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeClockTime } from '../redux/clockTimeSlice';

const Display = () => {

  const dispatch = useDispatch();

  const time = useSelector(state=>state.time);

  const clockTime = useSelector(state=>state.clockTime);

  const timeState = useSelector(state=>state.timeState);

  const actionState = useSelector(state=>state.actionState);


  useEffect(()=>{
    
    if (timeState===actionState) {
      dispatch(changeClockTime({minutes:time[timeState],seconds:0}))
    }
    
  },[time,timeState])

  
  return (
    <div className="display" >
      <h4>{timeState[0].toUpperCase()+timeState.slice(1)}</h4>
      <div className='fs-1' >{clockTime.minutes<10?`0${clockTime.minutes}`:clockTime.minutes}:{clockTime.seconds<10?`0${clockTime.seconds}`:clockTime.seconds}</div>
    </div>
  )
}

export {Display};