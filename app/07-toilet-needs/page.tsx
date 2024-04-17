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
    title: 'About your toilet needs and managing incontinence',
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
                <PageHeader title={pageTitle} caption="Toilet needs and managing incontinence" />
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
                    <li>whether you need help or support using the toilet or managing incontinence</li>
                    <li>help you need from someone else</li>
                    <li>any aids, adaptations or tools you use</li>
                </ul>
                <p>We understand it might be difficult to answer some of the questions in this section but try not to feel embarrassed or miss out any information.</p>
                <h2>What&apos;s covered in other sections</h2>
                <p>You can tell us about your ability to get to and from the bathroom in the Moving around section.</p>
                <p>If you need to change your underwear or clothes if they get soiled, you can tell us about this in the Dressing and undressing section.</p>
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
                        href="/07-toilet-needs/01-help-support-toilet"
                    >
                        Continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default GettingInAndOutOfBed;
