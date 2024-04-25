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
    title: 'About getting in and out of bed',
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
                <PageHeader title={pageTitle} caption="Washing and bathing" />
            </Wrapper>
            <Wrapper style={{ marginBottom: '20px' }}>
                <Image
                    src={bedPic1}
                    alt="An image of a bathroom"
                    height={300}
                />
                <Image
                    src={bedPic2}
                    alt="A man in bath using tool to wash back"
                    height={300}
                />
            </Wrapper>
            <Wrapper>
                <p>In this section, we&apos;ll ask about:</p>
                <ul>
                    <li>whether you need help or support washing and bathing</li>
                    <li>help you need from someone else</li>
                    <li>any aids, adaptations or tools you use</li>
                </ul>
                <p>You should tell us if:</p>
                <ul>
                    <li>your mental health affects whether you can wash and bathe</li>
                    <li>you have difficulty understanding how and when to wash and bathe</li>
                </ul>
                <h2>What&apos;s covered in other sections</h2>
                <p>You can tell us about your ability to get to and from the bathroom in the Moving around section.</p>
                <p>You can tell us more about your ability to get dressed and undressed in the Dressing and undressing section.</p>
                <p>It&apos;s ok if you&apos;re not sure where to put something. We&apos;ll take into account all relevant information that&apos;s included anywhere in your application.</p>
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
                        href="/06-washing-bathing/01-help-support-washing-bathing"
                    >
                        Continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default GettingInAndOutOfBed;
