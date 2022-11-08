import FacebookIcon from '@mui/icons-material/Facebook';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'next/image';
import Link from 'next/link';

// import FooterAnimation from '../assets/animation_gdsc.webp'


function Footer() {
    return (
        <div className=' bg-slate-900  '>
            <div className="footer">
                <div className='grid  grid-cols-3  lg:gap-2 gap-4 text-white  p-10  lg:place-items-center '>
                    <div className='sm:col-span-1 col-span-3'>
                        <Image src="/images/gdsc_nav_logo.png" height="80" width="90" alt='Google developer Student Club' className='h-[90px]' /> <br />
                        <span className='text-white  font-mono font-medium'>Google Developer Student Club <br /> JIS University Kolkata</span>
                        <div className='mt-5'>
                            <ul>
                                <li ><Link href={'/'}  ><a href="#" className="font-mono font-light cursor-default hover:text-slate-200 text-white   hover:font-semibold decoration-red-600" >Home</a></Link></li>
                                <li ><Link href={'/event'} ><a href="#" className="font-mono font-light cursor-default hover:text-slate-200 text-white   hover:font-semibold decoration-red-600">Events</a></Link></li>
                                <li ><Link href={'/blog'} ><a href="#" className="font-mono font-light cursor-default hover:text-slate-200 text-white   hover:font-semibold decoration-red-600">Blogs</a></Link></li>
                                <li ><Link href={'/project'}><a href="#" className="font-mono font-light cursor-default hover:text-slate-200 text-white   hover:font-semibold decoration-red-600">Projects</a></Link></li>
                                <li ><Link href={'/team'} ><a href="#" className="font-mono font-light cursor-default hover:text-slate-200 text-white   hover:font-semibold decoration-red-600">Teams</a></Link></li>
                                <li ><Link href={'/contact'}  ><a href="#" className="font-mono font-light cursor-default hover:text-slate-200 text-white   hover:font-semibold decoration-red-600">Join Us</a></Link></li>
                            </ul>
                        </div>
                    </div>


                    <div className='sm:col-span-1 col-span-3'>
                        <span className='text-white  font-mono font-bold text-xl underline underline-offset-4'>Contact Us</span>
                        <div className='mt-5'>
                            <ul className=' text-white font-mono font-medium'>
                                <li> <a href="https://www.facebook.com/groups/gdscjisu"><FacebookIcon className='text-white m-2' />@gdscjisu</a></li>
                                <li>  <a href="https://twitter.com/gdsc_jisu"><TwitterIcon className='text-white m-2' /></a>@gdsc_jisu</li>
                                <li>  <a href="https://github.com/gdsc-jisu"><GitHubIcon className='text-white m-2' />@gdsc-jisu</a></li>
                                <li> <a href="https://www.linkedin.com/company/gdsc-jisu"><LinkedInIcon className='text-white m-2' />@gdsc-jisu</a></li>
                            </ul>
                        </div>
                    </div>



                    <div className='sm:col-span-1 col-span-3 content-start'>
                        <span className='text-white  font-mono font-bold text-xl underline underline-offset-4'>Resources</span>
                        <div className='mt-5'>
                            <ul className=' text-white font-mono font-medium'>
                                <li> <Link passHref href="/cheatsheet">
                                    <a>
                                        <InsertDriveFileIcon className='text-white m-2' />CheatSheets
                                    </a>
                                </Link>
                                </li>
                                <li> <Link passHref href="/blog">
                                    <a>
                                        <RssFeedIcon className='text-white m-2' />Blogs
                                    </a>
                                </Link>
                                </li>
                                <li> <Link passHref href="/roadmap">
                                    <a>
                                        <FollowTheSignsIcon className='text-white m-2' />Roadmap
                                    </a>
                                </Link>
                                </li>
                                <li> <Link passHref href="/video">
                                    <a>
                                        <PlayCircleIcon className='text-white m-2' />Video
                                    </a>
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='grid  grid-cols-2  lg:gap-2 gap-4 text-white  p-10 lg:place-items-center'>
                    <div className='sm:col-span-1 col-span-2'>
                        <span className=' text-white font-mono font-medium'>© 2022 Google Developer Student Club JIS University</span>
                    </div>
                    <div className='sm:col-span-1 col-span-2'>
                        <span className=' text-white font-mono font-medium'>Made with ❤️ By Abhishek & Chandan</span>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Footer