import '../styles/Controls.scss';
import { useSelector, useDispatch } from "react-redux";
import { changeClockTime } from '../redux/clockTimeSlice';
import { changeTimeState } from '../redux/timeStateSlice';
import { changeActionState } from '../redux/actionStateSlice';
import { useState, useEffect, useCallback } from 'react';
import { changePlayState } from '../redux/playStateSlice';
import alarm from '../assets/audio/alarm-clock.mp3';


const Controls = () => {
  const dispatch = useDispatch();

  const mode = useSelector(state => state.mode);
  const clockTime = useSelector(state => state.clockTime);
  const timeState = useSelector(state => state.timeState);
  const time = useSelector(state => state.time);
  const playState = useSelector(state => state.playState);

  const [intervalId, setIntervalId] = useState(null);

  const update = useCallback(() => {
    const newClockTime = { ...clockTime };
    
    if (newClockTime.minutes === 0 && newClockTime.seconds === 0) {
      dispatch(changeTimeState(timeState === 'session' ? 'break' : 'session'));
      dispatch(changeActionState(timeState === 'session' ? 'break' : 'session'));

      const audio = document.getElementById('beep');
      audio.currentTime = 0; // Reiniciar la reproducción desde el principio
      audio.play();
    }

    const timeInSeconds = newClockTime.minutes * 60 + newClockTime.seconds - 1;

    newClockTime.minutes = Math.floor(timeInSeconds / 60);
    newClockTime.seconds = Math.floor(timeInSeconds % 60);

    dispatch(changeClockTime(newClockTime));
  }, [clockTime, dispatch, timeState]);

  useEffect(() => {
    if (playState) {
      const id = setInterval(update, 1000);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [playState, update]);

  function play() {
    dispatch(changePlayState(true));
  }

  function reload() {
    dispatch(changeTimeState('session'));
    dispatch(changeClockTime({ minutes: time.session, seconds: 0 }));
    dispatch(changePlayState(false));
  }

  function pause() {
    dispatch(changePlayState(false));
  }

  return (
    <section className="d-flex align-items-center justify-content-center gap-5 mt-3">
      <button onClick={!playState ? play : undefined} className={`control-button ${mode}-control-button`}>
        <i className="bi bi-play fs-4 button-icon" />
      </button>
      <button onClick={pause} className={`control-button ${mode}-control-button`}>
        <i className="bi bi-pause fs-4 button-icon" />
      </button>
      <button onClick={reload} className={`control-button ${mode}-control-button`}>
        <i className="bi bi-repeat fs-4 button-icon" />
      </button>
      <audio id='beep' src={alarm} />
    </section>
  );
};

export { Controls };