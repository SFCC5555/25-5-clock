import { useSelector } from "react-redux"
import { changeMode } from "../redux/modeSlice"
import { useDispatch } from "react-redux"
import '../styles/Switch.scss'

const Switch = () => {

  const dispatch = useDispatch();

  const mode = useSelector(state=>state.mode);

  function handleClick() {
    dispatch(changeMode(mode==='light'?'dark':'light'))
  }

  return (
    <div onClick={handleClick} className={`switch-container ${mode}-switch-container d-flex align-items-center justify-content-${mode==='light'?'start':'end'} px-1 ${mode}-mode`}><div className={`switch justify-${mode==='light'?'start':'end'} ${mode}-switch`} /></div>
  )
}

export {Switch};