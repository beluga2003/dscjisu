import { NextPageWithLayout } from './page';
// import NavigationLayout from './NavigationLayout';

// import Community from './components/Community';
// import Events from './components/Events';
// import Header from './components/Header';
// import Newsletter from './components/Newsletter';
// import SpeedDail from './components/speedDail';
// import Team from './components/Team';

import PrimaryLayout from '../components/layouts/PrimaryLayout/Layout';


const Home: NextPageWithLayout = () => {

  return (
    <>
      {/* <Header />
      <Events />
      <Team />
      <Newsletter />
      <Community />
      <SpeedDail /> */}
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
