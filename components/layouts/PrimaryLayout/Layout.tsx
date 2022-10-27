import Head from 'next/head';
import Footer from './../Footer';
import Navbar from './../Navbar';
export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
    justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
    children,
    ...divProps
}) => {
    return (
        <>
            <Head>
                <title>GDSC MAIN Layout</title>
            </Head>
            <div {...divProps} >
                <Navbar />
                <main className="">{children}</main>
                <div className="m-auto" />
                <Footer />
            </div>
        </>
    );
};

export default PrimaryLayout;