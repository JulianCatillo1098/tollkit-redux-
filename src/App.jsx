
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBY } from './store/slices/counter/counterSlice';

function App() {
  const{counter}= useSelector((state) => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={()=>{dispatch(increment())}}>
          incrementar
        </button>
        <button onClick={()=>{dispatch(decrement())}}>
          decrementar
        </button>
        <button onClick={()=>{dispatch(incrementBY(2))}}>
          decrementar cada 2
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
