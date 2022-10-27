import PrimaryLayout from '../components/layouts/PrimaryLayout/Layout';
import { NextPageWithLayout } from './page';
const Home: NextPageWithLayout = () => {
  return (
    <>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
