import Head from 'next/head';
import Wrapper from '../components/Wrapper';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const Home:React.FC = function Home() {
    return (
        <>
            <Head>
                <title>Social Security Scotland</title>
            </Head>

            <Wrapper>
                <p>
                    This is something that you’ll be able to use to build up pages using the
                    {' '}
                    <a href="https://designsystem.gov.scot" target="_blank" rel="noopener noreferrer">
                        Digital Scotland Design System
                    </a>
                    .
                </p>
            </Wrapper>
        </>
    );
};

export default Home;

/**
 * Props to load when rendering the page server-side
 * @returns {object} - The props to use for the page
 */
export async function getServerSideProps() {
    return {
        props: {
            title: {
                caption: 'Social Security Scotland',
                title: 'Prototype Toolkit',
            },
            navigation: [
                {
                    text: 'Digital Scotland Design System',
                    href: 'https://designsystem.gov.scot',
                    target: '_blank',
                },
            ],
        },
    };
}
