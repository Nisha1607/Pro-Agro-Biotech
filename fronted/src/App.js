import React,{useEffect} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import NavBar from './components/NavBar';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import MainScreen from './screens/MainScreen';
import Logo from './ProAgroLogo.png';
//import './fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faHome,faUser,faCartPlus,faHandHoldingHeart,faPhone} from '@fortawesome/free-solid-svg-icons';
import {  faFacebookSquare ,faProductHunt,faWhatsapp} from '@fortawesome/free-brands-svg-icons' 
import { DirectoryService } from 'aws-sdk';
//import Footer from './components/Footer';
function App() {
  const [scrolled,setScrolled]=React.useState(false);
  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
 
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
      
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/homescreen"  component={HomeScreen} />
            <Route path="/" exact={true} component={MainScreen} />
          </div>
        </main>
       

       
    <div style={{
     backgroundColor: '#222629'
  }}>
  <footer class="footer" >
  <ul class="footer__nav">
  <li>
    <div class="footer__addr" >
      
      <h2>Quick Links</h2>
      <ul >
      <li><i class="fa fa-angle-right"/><a href="/" style={{color:' rgb(161, 154, 154)', paddingLeft:'6%'}} >Home</a></li>
        
        <li><i class="fa fa-angle-right"/><a href="cart.html" style={{color:' rgb(161, 154, 154)', paddingLeft:'6%'}} >AboutUs</a></li>
        
        <li><i class="fa fa-angle-right"/><Link to="/HomeScreen" style={{color:' rgb(161, 154, 154)', paddingLeft:'6%'}} >Products</Link></li>
        
        <li><i class="fa fa-angle-right"/><Link to="/cart/:id?" style={{color:' rgb(161, 154, 154)', paddingLeft:'6%'}} >Cart</Link></li>
        </ul>
    </div>
    </li>
    <li class="nav__item">
      <h2 class="nav__title">Contact</h2>
      <ul class="nav__ul">
        <li>

        <div className="card bg-light">
        <article
            className="card-body mx-auto"
            style={{ maxWidth: "400px" }}>
           
            <div className="row justify-content-center">
            <FontAwesomeIcon icon={faEnvelope} size="lg"/>&nbsp;&nbsp;
            <a href="proagrobiotech@gmail.com">  proagrobiotech@gmail.com</a>
            </div>
        </article>
      </div>   
       
        </li>

        <li>
        <FontAwesomeIcon icon={faFacebookSquare}  size="lg"/>&nbsp;&nbsp;&nbsp;
          <a href="https://m.facebook.com/Pro-Agro-Biotech-490679667993620/">Pro Agro Biotech</a>
          
        </li>
            
        <li>
        <FontAwesomeIcon icon={faWhatsapp}  size="lg"/>&nbsp;&nbsp;
          <a>  9225856505</a>
        </li>
      </ul>
    </li>
    <li>
    <div class="footer__addr" >
      
      <h2>Address</h2>
      <address>
        Flat No. 402, Ojas Apartment, Plot No. 33, Near Mali Mangal Karyalaya , Vishrambag, Sangli - 416415
          <h4> Customer care No.:<br/><FontAwesomeIcon icon={faWhatsapp}  size="lg"/>&nbsp;&nbsp; +91 9284916280</h4>
        <br/> 
       
      </address>
    </div>
    </li>
    
  </ul>
  
  <div class="legal">
    <p>&copy; 2019 Something. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made with <span class="heart">♥</span> by PAB</span>
    </div>
  </div>

       </footer>
        </div>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
