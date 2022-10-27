import TeamCard from "../../cards/team/TeamCard";


export interface ITeamTemplate {
    team: EachTeamMember[];
}

interface EachTeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    tagline: string;
    linkedin: string;
    twitter: string;
    github: string;
}

const Team: React.FC<ITeamTemplate> = ({ team }) => {
    return (
        <>
            <div className=" pt-20 text-center dark:bg-[#182232] px-5">
                <h1 className='lg:text-6xl text-4xl dark:text-white font-mono'>Organizers</h1>
                <p className='dark:text-white font-light font-mono pt-5 text-base px-5 text-clip'>
                    We are a team of passionate developers who are passionate about building great products.
                </p>
                <div className="lg:px-24 sm:p-5">

                    <div className=" grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  lg:mx-5">
                        {team.map((item) => {
                            return (
                                <TeamCard
                                    id={item.id}
                                    tagline={item.tagline}
                                    key={item.id}
                                    name={item.name}
                                    image={item.image}
                                    role={item.role}
                                    linkedin={item.linkedin}
                                    github={item.github}
                                    twitter={item.twitter}
                                />
                            )
                        })}
                    </div>
                </div>


            </div>
        </>
    )
}

export default Team;
