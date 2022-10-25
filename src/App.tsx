import {Route, Routes} from 'react-router-dom'
import {ProductsPage} from './pages/ProductsPage'
import {AboutPage} from './pages/AboutPage'
import {Navigation} from './components/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/TS-Store" element={ <ProductsPage /> } />
        <Route path="/TS-Store/about" element={ <AboutPage /> } />
      </Routes>
    </>
  )
}

export default App;
