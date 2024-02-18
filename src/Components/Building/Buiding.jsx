import './Building.css'
import { Player } from '@lottiefiles/react-lottie-player';
import Typewriter from 'typewriter-effect';
import truck from '../../Assets/truck-red.json'
import Contact_buttons from '../Contact_buttons/Contact_buttons';
export default function Building() {
    return (
        <div className='content'>
            <div className='container'>
                <div className='type'>
                    <Typewriter
                        options={{
                            strings: ["Hello !", "Move your goods with us"],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 20
                        }}
                    />
                </div>
                <div className='truckvid'>
                    <Player
                        autoplay
                        loop
                        src={truck}
                        className='truck'
                    />
                </div>
            </div>
            <Contact_buttons/>
        </div>
    )
}