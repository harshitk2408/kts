import './Contact_buttons.css'
import { BsWhatsapp } from 'react-icons/bs'
import { BiSolidPhoneCall } from 'react-icons/bi'
export default function Contact_buttons() {
    const click = (e) => {
        const target=e.currentTarget
        target.classList.add('clicked')
        setTimeout(() => {
            target.classList.remove('clicked')
        },200)
    }
    return (
        <div className='buttons'>
            <a href="https://wa.me/919319610257?text=" target='_blank' rel='noreferrer' className='but'>
                <div className='con-but wtsapp' onClick={(e)=>click(e)}>
                    <BsWhatsapp /> WhatsApp
                </div>
            </a>
            <a href="tel:919319610257" className='but'>
                <div className="con-but" onClick={(e)=>click(e)}>
                    <BiSolidPhoneCall /> Call Us
                </div>
            </a>
        </div>
    )
}