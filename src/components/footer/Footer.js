import './Footer.css'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faPhoneVolume, faClock } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='social-info'>
                <img src={logo} alt="Logo of the restaurant" />
                <h3 className='footer-socials'>Соціальні мережі</h3>
                <div className='icons'>
                    <FontAwesomeIcon icon={faFacebook} style={{color: "#FDD58C"}}/>
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#FDD58C"}}/>
                    <FontAwesomeIcon icon={faTwitter} style={{color: "#FDD58C"}}/> 
                </div>   
            </div>
            <div className='contact-info'>
                <li>
                    <ul><FontAwesomeIcon icon={faLocationDot} style={{color: "#FDD58C"}}/> 6101 Annunciation St, New Orleans</ul>
                    <ul><FontAwesomeIcon icon={faPhoneVolume} style={{color: "#FDD58C"}}/> +1 504 346 - 13 - 13</ul>
                    <ul><FontAwesomeIcon icon={faClock} style={{color: "#FDD58C"}}/> Mon - Fri 07:00 am - 10:00 pm </ul>
                    <ul><FontAwesomeIcon icon={faClock} style={{color: "#6d008e"}}/> Sat - Sun 09:00 am - 10:00 pm  </ul>
                </li>
            </div>
            
        </footer>
    )
}

export default Footer