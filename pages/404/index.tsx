// ** templete page boilerplate :)

import Image from 'next/image';
import PrimaryLayout from '../../components/layouts/PrimaryLayout/Layout';
import { NextPageWithLayout } from './../page';

const About: NextPageWithLayout = () => {
    return (
        <section className='text-center p-10'>
            <h1>Oops! Page not Found !</h1>
            <Image src="/images/404.gif" width={500} height={500} />
        </section>
    );
}

export default About;

About.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};