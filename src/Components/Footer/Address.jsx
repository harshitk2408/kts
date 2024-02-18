import './Address.css'
import { BiPhoneCall } from 'react-icons/bi'
import { CiLocationOn} from 'react-icons/ci'
export default function Address(props) {
    let tel = "tel:91" + props.number
    return (
        <div className="add">
            <div className='cityname'>{props.city}</div>
            <a href={tel} className='phone'><BiPhoneCall/> +91 {props.number}</a>
            <div className="loc">{props.address}</div>
            <a href={props.location} target="_blank" rel="noreferrer" className='map'><CiLocationOn/> See on Map</a>
        </div>
    )
}