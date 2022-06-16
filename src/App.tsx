import { useState, ChangeEvent } from 'react'
import Home from './pages/home'
import Banner  from './pages/banner'
import Article from './pages/article'
import Info from './pages/info'
import Info1 from './pages/info1'
import Full from './pages/full'
import Footer from './pages/footer'
import  Footer1 from './pages/footerr'
import Info2 from './pages/info2'




import { i18n } from './components/translete/i18n'

const i18n_STORAGE_KEY = 'i18nextLng';






function App() {

    

  return (
      <div>
            
            <Home />
            <Banner />
            <Article />
            <Info />
            <Info1 />
            <Info2 />
            <Full />
            <Footer />
            <Footer1 />
           
            
           

      </div>
  )
}

export default App
