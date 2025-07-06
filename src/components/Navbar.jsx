import { Link, NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { BsCart, BsMoonFill, BsSunFill } from 'react-icons/bs'
import NavLinks from './NavLinks'
import { useEffect, useState } from 'react'

const themes = {
    winter: 'winter',
    dracula: 'dracula'
}

const getThemeFromLOcalStorage=()=>{
    return localStorage.getItem('theme')||themes.winter
}
const Navbar = () => {
    const [theme, setTheme] = useState(getThemeFromLOcalStorage())
    const handleTheme = () => {
        const { dracula, winter } = themes
        const newTheme = theme === winter ? dracula : winter
        setTheme(newTheme)
    }
    useEffect(()=>{
        document.documentElement.setAttribute('data-theme',theme)
        localStorage.setItem('theme',theme)
    },[theme])
    
    return (
        <nav className='bg-base-200'>
            <div className='navbar aligin-element'>
                <div className='navbar-start'>
                    {/*TITLE*/}
                    <NavLink to={'/'} className={'hidden lg:flex btn-primary text-3xl items-center'}>C</NavLink>
                    {/*DROPDOWN*/}
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost  lg:hidden'>
                            <FaBars className='w-6 h-6' />
                        </label>
                        <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3  z-[1] shadow bg-base-100  rounded-2xl w-52'>
                            <NavLinks />
                        </ul>

                    </div>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal'>
                        <NavLinks />
                    </ul>
                </div>
                <div className='navbar-end'>
                    {/*THEME*/}
                    <label className="swap swap-rotate">
                        <input type="checkbox" onChange={handleTheme} />
                        {/* sun icons*/}
                        <BsSunFill className=' swap-off w-4 h-4' />
                        {/* moon icons*/}
                        <BsMoonFill className='swap-on h-4 w-4' />

                    </label>
                    {/*cart */}
                    <NavLink to={'/cart'} className={'btn btn-ghost btn-circle btn-md ml-4'}>


                        <div className='indicator'>
                            <BsCart className='w-6 h-6' />
                            <span className='badge badge-sm  badge-primary indicator-item '>
                                0
                            </span>
                        </div>

                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
export default Navbar