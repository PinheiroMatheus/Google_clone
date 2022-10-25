import { HiMagnifyingGlass } from 'react-icons/hi2'
import { ImKeyboard } from 'react-icons/im'
import { FaMicrophone, FaCamera } from 'react-icons/fa'
import GoogleLogo from '../images/googlelogo.png'

import '../styles/components/main.sass'

const Main = () => {
    return (
        <div className='main'>
            <img src={GoogleLogo} alt="google logo" />
            <div className="input-box">
                <a href=""><HiMagnifyingGlass className='input-icon' /></a>
                <input type="text" className='main-input' />
                <a href=""><ImKeyboard className='input-icon end-icons' /></a>
                <a href=""><FaMicrophone className='input-icon end-icons' /></a>
                <a href=""><FaCamera className='input-icon end-icons' /></a>
            </div>
            <div className="buttons">
                <a href="">Pesquisa Google</a>
                <a href="">Estou com sorte</a>
            </div>
        </div>
    )
}

export default Main