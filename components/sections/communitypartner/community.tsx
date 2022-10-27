import Image from "next/image";

export interface ICommunity {
    community: Community[];
}

interface Community {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
}

export async function getStaticProps() {
    // fecth data from an API /api/community
    console.log("getStaticProps");
    const res = await fetch("http://localhost:3000/api/community");
    const community = await res.json();
    console.log(community);

    return {
        props: {
            community,
        }, // will be passed to the page component as props
    }
}


const CommunityPartner: React.FC<ICommunity> = ({ community }) => {
    return (
        <>
            <div className='lg:p-20 sm:p-2 bg-white flex  flex-col text-center dark:bg-[#182232] py-10'>
                <h1 className='lg:text-6xl text-3xl dark:text-white font-mono'><span className='underline decoration-solid underline-offset-2 decoration-cyan-300 font-mono community'>Community</span> Partner</h1>
                <p className='dark:text-white font-light font-mono pt-5 text-base px-5 text-clip'>
                    Thanks to our community partners, who helped us  provide a better experience to our students.
                </p>
                <div className='grid  lg:grid-flow-col  grid-flow-row   justify-center place-items-center p-10 gap-5'>
                    {community?.map((partner) => {
                        return (
                            <div className='dark:bg-slate-600 bg-slate-100 rounded-lg p-10  hover:scale-105 transition-all duration-1000' key={partner.id} title={partner.description}>
                                <Image src={partner.image} height={150} width={150} alt={partner.name} className='rounded-xl  h-20 hover:scale-150 transition-all duration-1000' />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
};

export default CommunityPartner;