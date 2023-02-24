import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = ()=>{
    return(
<div className='footerStyle'>
    <div className='footerHeader'>
        <div><p>CONTACT</p></div>
        <div><p>MURMUR</p></div>
        <div><p>HOURS</p></div>
    </div>
    <div className='footerParagraf'>
        <div>
            <p>Cat House Street 55 </p>
            
            <p>Myau, Athens 10555</p>
            <p>info@winecat.gr</p>
            <p>+30 222 22 22 22</p>
        </div>
        <div>
            <p className='faStyle'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></p>
        </div>
        <div>
            <p>Sun-Thu 17:30-01:00</p>
            <p>Fri-Sat 14:00-01:00</p>
        </div>
    </div>
</div>
    )
}
export default Footer;