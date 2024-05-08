import "./LandingPage.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare,FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../Assets/Logo.png'


function LandingPage(){
    return(
<div>

<div class="landingPage_main">
    <div class="landingPage_navbar">
    <div class="landingPage_navbar__logo">
    <img src={Logo} alt="Company Logo" />
    <span>Anarghya Communications</span>
</div>
<div class="landingPage_menu">
    <ul>
        <li><a href="#">CONTACTUS</a></li>
        <li><a href="#">LOGIN</a></li>
        <li><a href="#">REGESTER</a></li>

    </ul>

</div>

    </div>
    <div class="landingPage_content">
    <h1>Welcome to <br/><span>Employement</span><br/>Management System</h1>
    <p class="par">Your Geteway to innovative Software <br/>and Digital Excellence </p>



<div class="landingPage_form">
   
   <h2>Login Here</h2>
    <input type="email" name="email" placeholder="Enter Email Here"/>  
    <input type="password" name="password" placeholder="Enter password Here"/>  
  <a href="#">  <button class="landingPage_btnn">Login</button></a> <br></br><br></br><r></r>

    <p class="Link">Don't have an account<br></br>
    <a href="#"style={{color:"orange"}}> Sign up here</a></p>

</div>
</div>
</div>
<br/><br/>


   <footer class="landingPage_footer">
    <div class="landingPage_footer__content">
        <div class="landingPage_footer__section">
            <h3>About Us</h3>
            <p>Welcome to Anarghya Communications, where we are committed to spearheading technological innovations to craft bespoke software solutions tailored to meet the unique needs of our clients. As a dynamic software provider, we take immense pride in our ability to leverage cutting-edge technologies to develop unparalleled solutions that drive our clients towards unparalleled success.</p>
        </div>
        <div class="landingPage_footer__section">
    <h3>Contact Us</h3>
    <p ><a href="mailto:info@anarghya.com" style={{color:'white',textDecoration:'none'}}>✉️  Email: info@anarghya.com</a></p><br></br>
    <p><a href="tel:+1234567890" style={{color:"white",textDecoration:'none'}}>☎️  Phone: +123 456 7890</a></p><br></br>
    <p><a href=" Regus, SL jubilee, 3rd floor Aditya Enclave, Venkatagiri, Jubilee Hills Hyderabad, Telangana 500033" style={{color:"white",textDecoration:'none'}}>📍 Madhaput, India</a></p><br></br>
    <div class="social-icons" style={{ marginLeft: '20px', padding:'10px' }}>
   
    <a  href="#" ><FaFacebookSquare size={40} color="#3b5998" style={{padding:'10px'} }/></a>
     <a href="#"><FaInstagram size={40} color="#e4405f"style={{padding:'10px'} } /></a> 
     <a href="#"> <FaLinkedin size={40} color="#0077b5" style={{padding:'10px'} }/></a>

    </div>

</div>


        <div class="landingPage_footer__section">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Contact</a></li>
               
            </ul>
        </div>
    </div>
    <div class="landingPage_footer__bottom">
        <p>&copy; 2024 Anarghya Communications. All Rights Reserved.</p>
    </div>
</footer>

</div>
)
}
export default LandingPage;

