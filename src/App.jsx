//Packages
import { BrowserRouter ,Route, Routes, Navigate } from 'react-router-dom'

//Provider
import { FruverProvider } from './context/FruverProvider'
//Components
import Layout from './components/Layout'
import ApiConection from './components/ApiConection'
//Pages
import Home from './pages/Home'
import FrutasPage from './pages/FrutasPage'
import HortalizasPage from './pages/HortalizasPage'
import VerdurasPage from './pages/VerdurasPage'
import ApiPage from './pages/ApiPage'
import ShopCarPage from './pages/ShopCarPage'

function App() {


  return (
    
    <FruverProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >

            <Route index element={<Home/>}/>
            <Route path='frutas' element={<FrutasPage/>}/> 
            <Route path='verduras' element={<VerdurasPage/>}/>
            <Route path='hortalizas' element={<HortalizasPage/>}/>
            <Route path='api' element={<ApiPage/>} />
            <Route path='shopcar' element={<ShopCarPage/>} />
            

            <Route path='*' element={<Navigate replace to="/"/>}/>

          </Route>
        </Routes>
      </BrowserRouter>

    </FruverProvider>
      
      

    
  )
}

export default App
