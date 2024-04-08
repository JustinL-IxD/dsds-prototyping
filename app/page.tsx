/* eslint-disable max-len */

import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import { TaskListGroup } from '@/components/TaskList';
import SectionHeader from '@/components/SectionHeader';

export const metadata:Metadata = {
    title: 'Apply for Pension Age Disability Payment',
};

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const Page:React.FC = function Page() {
    const pageTitle:string = (
        typeof metadata.title === 'string'
            ? metadata.title
            : 'Social Security Scotland'
    );

    const groups:ScotGov.Component.TaskList[] = [
        {
            label: 'Day and night',
            summary: 'You can complete these in any order.',
            sections: [
                {
                    id: 'hospital',
                    label: 'Current stays in a hospital, care home or legal detention',
                    summary: "Tell us whether you're currently in hospital, a care home or legal detention",
                    status: 'not-started',
                    link: '/hospital-care-home-legal-detention',
                },
            ],
            ordered: true,
        },
        {
            label: 'Day care',
            summary: 'You can complete these in any order.',
            sections: [
                {
                    id: 'bed',
                    label: 'Getting in and out of bed',
                    summary: 'Questions about your ability to get in or out of bed and help you need to do this',
                    status: 'not-started',
                    link: 'getting-in-and-out-of-bed',
                },
            ],
            ordered: true,
        },
    ];

    return (
        <>
            <Wrapper>
                <PageHeader title={pageTitle} />
            </Wrapper>

            <Wrapper hasBackground="darkblue">
                <p>
                    This is something that you’ll be able to use to build up pages using the
                    {' '}
                    <a href="https://designsystem.gov.scot" target="_blank" rel="noopener noreferrer">
                        Digital Scotland Design System
                    </a>
                    .
                </p>
            </Wrapper>

            <Wrapper>
                <TaskListGroup
                    heading=""
                    summary="You need to complete and review each section below before submitting your application."
                    ordered
                    groups={groups}
                />
                <hr />
                <h2>Section header</h2>
                <SectionHeader
                    link="/"
                    title="Adult disability payment"
                />
                <h3>Without link</h3>
                <SectionHeader
                    title="Adult disability payment"
                />
            </Wrapper>
        </>
    );
};

export default Page;
