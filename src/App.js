
import './App.css';
import Sidevar from './components/sidebar/Sidevar';
import Topvar from './components/topvar/Topvar';
import Home from './Pages/home/Home';
import {BrowserRouter as Router , Navigate , Route , Routes} from 'react-router-dom'
import UserList from './Pages/userlist/UserList';
import User from './Pages/user/User';
import NewUser from './Pages/newUser/NewUser';
import ProductList from './Pages/productList/ProductList';
import Product from './Pages/product/Product';
import NewProduct from './Pages/newProduct/NewProduct';

function App() {
  return (
    <Router>
    <div className="App">
      <Topvar/>
     <div className='container'>
       <Sidevar />
       <Routes>
         <Route exact path='/' element={<Home/>}/>
          <Route path='/users' element={<UserList/>}/>
          <Route path='/user/:userId' element={<User/>}/>
          <Route path='/newUser' element={<NewUser/>}/>
          <Route path ='/products' element={<ProductList/>} />
          <Route path ='/product/:productId' element={<Product/>} />
          <Route path ='/newProduct' element={<NewProduct/>} />

      </Routes>
     </div>


    </div>
    </Router>
  );
}

export default App;
