import { Time } from "./components/Time"
import { Display } from "./components/Display"
import { Controls } from "./components/Controls"
import { Footer } from "./components/Footer"
import { Switch } from "./components/Switch"
import { Clock } from "./components/Clock"
import { useSelector } from "react-redux"

function App() {

  const mode = useSelector(state=>state.mode);

  return (
    <main className={`w-100 h-100 ${mode}-mode d-flex flex-column align-items-center justify-content-center gap-3`}>
      <h1>POMODORO CLOCK</h1>
      <section className="d-flex align-items-center justify-content-between" style={{width:'350px'}}  >
        <Time name='session' />
        <Time name='break' />
      </section>
      <Display />
      <Controls />
      <Footer />
      <Switch />
      <Clock />
    </main>
  )
}

export default App
