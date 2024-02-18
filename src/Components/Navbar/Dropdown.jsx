import './Dropdown.css'
export default function Dropdown(props) {
    return (
        <div className='drop'>
            <div className="dropbtn">{props.name}</div>
            <div className="dropdown-content">
                <div>{props.first}</div>
                <div>{props.second}</div>
                <div>{props.third}</div>
                <div>{props.fourth}</div>
                <div>{props.fifth}</div>
            </div>
        </div>
    )
}