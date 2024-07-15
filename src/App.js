import './App.css'
import Sidebar from './component/Sidebar'

function App() {

  return (
    <>
    <div className='h-screen flex flex-row  '>
    <Sidebar/>
    <div className='flex-1 bgDark bg-contain'></div>
    </div>
        </>
  )
}

export default App
