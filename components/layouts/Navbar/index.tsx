
import CloseIcon from '@mui/icons-material/Close';
import SegmentIcon from '@mui/icons-material/Segment';
import Link from 'next/link';
import { useState } from 'react';
function Navbar() {
    const [open, setOpen] = useState(false)


    const toogleMenu = () => {
        const menu = document.querySelector('#menu-list')
        menu?.classList.toggle('hidden')
        setOpen(!open)
    }

    return (
        <>
            <div className='lg:flex   flex-row justify-between  lg:items-center lg:justify-between px-5 py-2  shadow-sm bg-black bg-opacity-90  shadow-slate-50  sticky top-0  bg-bg-dark text-white z-50 '>
                <div className="flex flex-row justify-between">
                    <div className='inline '>
                        <Link href='/' passHref>
                            <span >
                                <span className='text-green-600 font-mono font-semibold text-4xl'>G</span>
                                <span className='text-red-600 font-mono font-semibold text-4xl'>D</span>
                                <span className='text-yellow-600 font-mono font-semibold text-4xl'>S</span>
                                <span className='text-blue-600 font-mono font-semibold text-4xl dark:text-blue-400'>C </span>
                                <span id="jis--university" className='text-black  font-mono font-semibold text-3xl hover:underline underline-offset-4 decoration-green-500 dark:text-white'>JIS University</span>
                            </span>
                        </Link>
                    </div>
                    <div className="">
                        <span className=' lg:hidden text-3xl'>
                            {!open ? <CloseIcon onClick={toogleMenu} className='cursor-pointer menu-options' /> : <SegmentIcon onClick={toogleMenu} className='cursor-pointer menu-options text-6xl' />}
                        </span>
                    </div>
                </div>

                <div className="links bg-dark  lg:flex flex-row hidden" id="menu-list">
                    <ul className='lg:flex lg:flex-row lg:justify-end lg:opacity-100 opacity-100 text-center flex-col   p-10 gap-2 sm:flex   lg:py-0  lg:pl-0 '>
                        <li onClick={toogleMenu}><Link href={'/'}  ><a href="#" className="nav-list   hover:font-semibold " >Home</a></Link></li>
                        <li onClick={toogleMenu}><Link href={'/event'} ><a href="#" className="nav-list   hover:font-semibold ">Events</a></Link></li>
                        <li onClick={toogleMenu}><Link href={'/blog'} ><a href="#" className="nav-list   hover:font-semibold ">Blogs</a></Link></li>
                        <li onClick={toogleMenu}><Link href={'/project'}><a href="#" className="nav-list   hover:font-semibold ">Projects</a></Link></li>
                        <li onClick={toogleMenu}><Link href={'/team'} ><a href="#" className="nav-list   hover:font-semibold ">Teams</a></Link></li>
                        <li onClick={toogleMenu}><Link href={'/contact'}  ><a href="#" className="nav-list   hover:font-semibold ">Join Us</a></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar