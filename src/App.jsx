import { Tooltip } from "./components/tooltip/Tooltip"

const App = () => {

  return (
    <div className='App'>
      <button>Alert</button>
      <Tooltip text={'Pressing this button will destroy humanity'}>
        <span className="material-symbols-outlined">info</span>
      </Tooltip>
    </div>
  )
}

export default App
