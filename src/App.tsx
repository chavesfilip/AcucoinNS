import Home1 from './pages/Home1'
import {Routes, Route} from 'react-router-dom'

import Pt from './pages/Home2/pt'







function App() {

    

  return (
    <>
            <Routes>
                <Route path="/" element={<Home1 />} />
                <Route path="/pt" element={<Pt />} />

            </Routes>
    </>
  )
}

export default App
