
// import './App.css';
import './app.scss'
import {Route,Routes} from "react-router-dom";
import HomePage from './components/home-page/HomePage';
import Header from './components/header/Header';
import CartPage from './components/order_page/OrderPage';






function App() {
  return (
     <div className='app'>
 
     <Header />
       
       <Routes>
             <Route path='/' element={<HomePage/>}/>
             <Route path='/add' element={<CartPage/>}/>
             <Route path='/edit' />     
      </Routes>
      


     </div>   
    
  )
}

export default App;
