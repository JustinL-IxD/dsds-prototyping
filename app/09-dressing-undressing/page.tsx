/* eslint-disable max-len */

import type { Metadata } from 'next';
import Image from 'next/image';
import bedPic1 from '@/public/images/bed-01.png';
import bedPic2 from '@/public/images/bed-02.png';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import SectionHeader from '@/components/SectionHeader';

export const metadata:Metadata = {
    title: 'About dressing and undressing',
};

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const GettingInAndOutOfBed:React.FC = function GettingInAndOutOfBed() {
    const pageTitle:string = (
        typeof metadata.title === 'string'
            ? metadata.title
            : 'Social Security Scotland'
    );

    return (
        <>
            <Wrapper>
                <SectionHeader
                    link="/"
                    title="Pension Age Disability Payment"
                />
            </Wrapper>
            <Wrapper>
                <PageHeader title={pageTitle} caption="Dressing and undressing" />
            </Wrapper>
            <Wrapper style={{ marginBottom: '20px' }}>
                <Image
                    src={bedPic1}
                    alt="A hospital"
                    height={300}
                />
                <Image
                    src={bedPic2}
                    alt="A hospital"
                    height={300}
                />
            </Wrapper>
            <Wrapper>
                <p>In this section, we&apos;ll ask about:</p>
                <ul>
                    <li>help or support you need dressing and undressing</li>
                    <li>help or support you need from another person</li>
                    <li>any aids, adaptations or tools you use</li>
                </ul>
                <p>You should tell us if your mental health affects your ability to get dressed and undressed.</p>
                <h2>What we mean by dressing and undressing</h2>
                <p>This is putting on and taking off clothes, socks and shoes. This includes doing up buttons, zips and tying shoelaces.</p>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="/09-dressing-undressing/01-help-support-dressing"
                    >
                        Continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default GettingInAndOutOfBed;
