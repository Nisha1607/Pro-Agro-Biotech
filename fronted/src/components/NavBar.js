import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Logo from './ProAgroBioLogo.png';
import './navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faHome,faUser,faCartPlus,faHandHoldingHeart,faBars,faPhone} from '@fortawesome/free-solid-svg-icons';
import {  faFacebookSquare ,faProductHunt,faWhatsapp} from '@fortawesome/free-brands-svg-icons';

function NavBar() {

    const [showLinks,setShowLinks]=useState('false');
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
 
    return (
        <header  className={x.join(" ")}>
        <div className="NavBar brand">
             <div className="leftSide">
                <img src={Logo} height="80px" width="115px" Align="left"/>
                <Link to="/"><a style={{ fontFamily: 'Cambria',paddingLeft:'10px'}}> PRO AGRO BIOTECH</a></Link>
             </div>
             <div className="rightSide">
             <div className="links" id={showLinks ? "hidden" : ""}>
             

          <a href="/"><FontAwesomeIcon id="idhome" icon={faHome}/>&nbsp;Home</a>
        
          <a href="cart.html"><FontAwesomeIcon icon={faHandHoldingHeart}/>&nbsp;AboutUs</a>
          
          <Link to="/HomeScreen"><FontAwesomeIcon icon={faProductHunt} />&nbsp;Products</Link>
          
            <Link to="/cart/:id?"><FontAwesomeIcon icon={faCartPlus} />&nbsp;Cart</Link>
            
            {userInfo ? (
              <Link to="/profile"><FontAwesomeIcon icon={faUser} />&nbsp;{userInfo.name}</Link>
            ) : (
              <Link to="/signin"><FontAwesomeIcon icon={faUser} />&nbsp;Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
             </div>
             
             <button onClick={()=>setShowLinks(!showLinks)} style={{marginLeft:'65%'}}><FontAwesomeIcon icon={faBars} /></button>
             </div>  
            </div> 
        </header>
    )
}

export default NavBar;
