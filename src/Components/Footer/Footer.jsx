import './Footer.css';
import Address from './Address'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
export default function Footer() {
    return (
        <div className='footer'>
            <div className='description'>
                Express Freight<br /> Movement
            </div>
            <Address city="DELHI" number="9953110257" address="2/1, Main road, Geeta Colony, Delhi 110031" location="https://www.google.com/maps/place/Khurana+Transport+Service+%26+Packers+and+Movers/@28.6558124,77.2684822,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfcbd2ce645b9:0x1335f3458d5fbe89!8m2!3d28.6558125!4d77.2733531!16s%2Fg%2F11b76c4nb0?entry=ttu" />
            <Address city="LUDHIANA" number="9811740257" address="256, Ghoda Factory Road, Transport Nagar, Industrial Area- A, Ludhiana, Punjab 141003" location="https://www.google.com/maps/place/Ghoda+Factory/@30.8986834,75.8777727,17z/data=!4m15!1m8!3m7!1s0x391a8321f1fe0c2f:0x62a705b1a6b51937!2sGhoda+Factory!8m2!3d30.8985817!4d75.8777018!10e5!16s%2Fg%2F11gf996sft!3m5!1s0x391a8321f1fe0c2f:0x62a705b1a6b51937!8m2!3d30.8985817!4d75.8777018!16s%2Fg%2F11gf996sft?entry=ttu" />
            <div className='follow'>
                <span>Want to know more about us ?<br/>
                Follow Us on:</span> 
                <div className='socials'>
                    <a href="https://www.facebook.com/khuranatransportservice" target='_blank' rel='noreferrer' ><BsFacebook /> </a>
                    <a href="https://www.instagram.com/khuranatransportservice/" target='_blank' rel='noreferrer'><BsInstagram /> </a>
                    <a href="https://www.linkedin.com/in/khurana-transport-service-9aa33a234/" target='_blank' rel='noreferrer'><BsLinkedin /> </a>

                </div>
            </div>
        </div>
    )
}