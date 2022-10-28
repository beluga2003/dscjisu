// import SpeedDail from '../components/speedDail';
import Chapter from '../layout/Chapter';
import Community from '../layout/Community';
import Header from '../layout/Header';
import Team from '../layout/Team';

import CommunityData from '../content/community.json';
import EventData from '../content/events.json';
import TeamData from '../content/team.json';

export async function getStaticProps() {

  // const team_data = await fetch("http://localhost:3000/api/team");
  // const event_data = await fetch("http://localhost:3000/api/event");
  // const community_data = await fetch("http://localhost:3000/api/community");
  // const Team = await team_data.json()
  // const Event = await event_data.json()
  // const Community = await community_data.json()
  // sort the event by date
  // const sortedEvent = Event.sort((a, b) => {
  //   return (b.id) - (a.id);
  // });

  const Team = TeamData;
  const Event = EventData;
  const Community = CommunityData;


  return {
    props: {
      team: Team,
      event: Event,
      community: Community
    }, // will be passed to the page component as props
  }
}

const Home = ({ team, _event, community }) => {
  return (
    <>
      <Header />
      {/* <Events event={event} /> */}
      <Team team={team} />
      <Chapter />
      <Community community={community} />
      {/* <SpeedDail /> */}
    </>
  );
};

export default Home;
