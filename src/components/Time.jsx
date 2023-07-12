import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeTime } from '../redux/timeSlice';
import { changeActionState } from '../redux/actionStateSlice';
import '../styles/Time.scss'

const Time = ({name}) => {

  const dispatch = useDispatch();

  const time = useSelector(state=>state.time);
  const mode = useSelector(state=>state.mode);

  function reduceTime() {
    const newTime = {...time}

    newTime[name]-=1

    dispatch(changeTime(newTime));
    dispatch(changeActionState(name));


  }

  function addTime() {
    const newTime = {...time}

    newTime[name]+=1

    dispatch(changeTime(newTime));
    dispatch(changeActionState(name));
  }


  return (
    <div className='d-flex flex-column align-items-center' >
      <h4  id={`${name}-label`} >{name[0].toUpperCase()+name.slice(1)}</h4>
      <section  className='d-flex align-items-center justify-content-between' style={{width:'160px'}}  >
        <button id={`${name}-decrement`} onClick={time[name]>1?reduceTime:undefined} className={`time-button ${mode}-mode ${mode}-time-button`}><i className='bi bi-arrow-down-circle fs-4 button-icon' /></button>
        <p id={`${name}-length`} className='fs-2' >{time[name]}</p>
        <button id={`${name}-increment`} onClick={time[name]<60?addTime:undefined}className={`time-button ${mode}-mode ${mode}-time-button`}><i className='bi bi-arrow-up-circle fs-4 button-icon' /></button>
      </section>
    </div>
  )
}

Time.propTypes = { name: PropTypes.string.isRequired }

export {Time};