import PrimaryLayout from '../components/layouts/PrimaryLayout/Layout';
import CommunityPartner from '../components/sections/communitypartner/community';
import { NextPageWithLayout } from './page';


const Home: NextPageWithLayout = () => {
  return (
    <>
      <CommunityPartner />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
