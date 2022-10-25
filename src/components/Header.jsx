import { TbGridDots } from 'react-icons/tb'

import '../styles/components/header.sass'

const Header = () => {
    return (
        <div className='header'>
            <a href="" className='text-link'>Gmail</a>
            <a href="" className='text-link'>Imagens</a>
            <a href=""><TbGridDots className='grid-dots image-link' /></a>
            <a href="" className='image-link'>Logo</a>
        </div>
    )
}

export default Header