import FacebookIcon from '@mui/icons-material/Facebook';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from 'next/image';
import Link from 'next/link';

// import FooterAnimation from '../assets/animation_gdsc.webp'


function Footer() {
    return (
        <div className=' bg-orange-200 bg-bg-dark '>
            <div className="footer">
                <div className='grid  grid-cols-3  lg:gap-2 gap-4 text-black  p-10 text-start  lg:place-items-center  '>
                    <div className='sm:col-span-1 col-span-3'>
                        <Image src="/animation_gdsc.webp" height="80" width="90" alt='Google developer Student Club' className='h-[90px]' /> <br />
                        <span className='text-black  font-mono font-medium'>Google Developer Student Club <br /> JIS University</span>
                        <div className='mt-5'>
                            <ul>
                                <li ><Link href={'/contact'}  ><a href="#" className="font-mono font-light cursor-default hover:text-slate-900 text-black   hover:font-semibold decoration-red-600">Join Us</a></Link></li>
                                <li ><Link href={'/'}  ><a href="#" className="font-mono font-light cursor-default hover:text-slate-900 text-black   hover:font-semibold decoration-red-600" >Home</a></Link></li>
                                <li ><Link href={'/event'} ><a href="#" className="font-mono font-light cursor-default hover:text-slate-900 text-black   hover:font-semibold decoration-red-600">Events</a></Link></li>
                                <li ><Link href={'/blog'} ><a href="#" className="font-mono font-light cursor-default hover:text-slate-900 text-black   hover:font-semibold decoration-red-600">Blogs</a></Link></li>
                                <li ><Link href={'/project'}><a href="#" className="font-mono font-light cursor-default hover:text-slate-900 text-black   hover:font-semibold decoration-red-600">Projects</a></Link></li>
                                <li ><Link href={'/team'} ><a href="#" className="font-mono font-light cursor-default hover:text-slate-900 text-black   hover:font-semibold decoration-red-600">Teams</a></Link></li>
                            </ul>
                        </div>
                    </div>


                    <div className='sm:col-span-1 col-span-3'>
                        <span className='text-black  font-mono font-bold text-xl underline underline-offset-4'>Contact Us</span>
                        <div className='mt-5'>
                            <ul className=' text-black font-mono font-medium'>
                                <li> <a href="https://www.facebook.com/groups/gdscjisu"><FacebookIcon className='text-black m-2' />@gdscjisu</a></li>
                                <li> <a href="https://www.instagram.com/gdsc_jisu/"><InstagramIcon className='text-black m-2' />@gdsc_jisu</a></li>
                                <li>  <a href="https://twitter.com/gdsc_jisu"><TwitterIcon className='text-black m-2' /></a>@gdsc_jisu</li>
                                <li>  <a href="https://github.com/gdsc-jisu"><GitHubIcon className='text-black m-2' />@gdsc-jisu</a></li>
                                <li> <a href="https://www.linkedin.com/company/gdsc-jisu"><LinkedInIcon className='text-black m-2' />@gdsc-jisu</a></li>
                                <li>  <a href="https://www.youtube.com/"><YouTubeIcon className='text-black m-2' /></a>@404NotFound</li>
                            </ul>
                        </div>
                    </div>



                    <div className='sm:col-span-1 col-span-3'>
                        <span className='text-black  font-mono font-bold text-xl underline underline-offset-4'>Resources</span>
                        <div className='mt-5'>
                            <ul className=' text-black font-mono font-medium'>
                                <li> <a href="https://www.facebook.com/groups/gdscjisu"><InsertDriveFileIcon className='text-black m-2' />CheatSheets</a></li>
                                <li> <a href="https://www.instagram.com/gdsc_jisu/"><RssFeedIcon className='text-black m-2' />Blogs</a></li>
                                <li>  <a href="https://twitter.com/gdsc_jisu"><PlayCircleIcon className='text-black m-2' /></a>Videos</li>
                                <li>  <a href="https://twitter.com/gdsc_jisu"><FollowTheSignsIcon className='text-black m-2' /></a>RoadMaps</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='grid  grid-cols-2  lg:gap-2 gap-4 text-black  p-10 lg:place-items-center'>
                    <div className='sm:col-span-1 col-span-2'>
                        <span className=' text-black font-mono font-medium'>© 2022 Google Developer Student Club JIS University</span>
                    </div>
                    <div className='sm:col-span-1 col-span-2'>
                        <span className=' text-black font-mono font-medium'>Made with ❤️ By Abhishek & Chandan</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer