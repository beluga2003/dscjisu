import Image from "next/image"

function Header() {
    return (
        <div className=' text-center mx-auto dark:bg-[#182232] text-white'>
            <div className="container   lg:p-10 mx-auto ">

                <div>
                    <div className="mx-auto h-25 ourlogo">
                        <Image
                            src="/animation_gdsc.webp"
                            alt="branding"
                            className='mx-auto pb-6 h-full'
                            height={250}
                            width={250}
                        />
                        <h3 className="brandingt">Google Developer Students Club</h3>
                        <h4 className="brandingt">Jis University</h4>
                    </div>

                    <div className=" text-clip lg:px-16  herop">
                        <p className='font-mono font-medium text-lg'>The Google Developer&apos;s Student Club, <span className='community'>JIS UNIVERSITY</span> , 💐 welcomes all of you wholeheartedly. We Welcome students to grow and learn together.
                            We at JIS University build a <span className='underline font-extrabold font-mono decoration-solid decoration-cyan-300 underline-offset-2'>peer-to-peer</span>  learning process making a better environment for students to learn and develop.
                            This year our Club is aiming to organize resourceful <span className='underline  font-extrabold font-mono  decoration-solid decoration-violet-600 underline-offset-4'>BootCamps</span> and Interesting Workshops. The major idea is to learn new skills through hands-on workshops and create innovative projects which will help in the betterment of our <span className='underline  font-extrabold font-mono  decoration-solid decoration-yellow-300 underline-offset-2'>Society</span>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header