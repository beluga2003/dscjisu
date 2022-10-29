// ** templete page boilerplate :)

// import PrimaryLayout from '../components/layouts/PrimaryLayout/Layout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
    return (
        <div className='min-h-screen'>
            <h1>About</h1>
            <p>This is the Templete page</p>
        </div>
    );
}

export default About;

// About.getLayout = (page) => {
//     return <PrimaryLayout>{page}</PrimaryLayout>;
// };