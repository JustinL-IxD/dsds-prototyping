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
    title: 'About eating and drinking',
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
                <PageHeader title={pageTitle} caption="Eating and drinking" />
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
                    <li>help or support you need eating and drinking</li>
                    <li>help or support you need from another person</li>
                    <li>any aids, adaptations or tools you use</li>
                </ul>
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
                        href="/11-eating-drinking/01-help-support-eating-drinking"
                    >
                        Continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default GettingInAndOutOfBed;