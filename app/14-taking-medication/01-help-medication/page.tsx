/* eslint-disable max-len */

'use client';

import React from 'react';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import Radios from '@/components/Radio';
import Question from '@/components/Question';
import TextArea from '@/components/TextArea';
import SectionHeader from '@/components/SectionHeader';
import Details from '@/components/Details';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const HelpYouNeedGettingInAndOutOfBed:React.FC = function HelpYouNeedGettingInAndOutOfBed() {
    return (
        <>
            <Wrapper>
                <SectionHeader
                    link="/"
                    title="Pension Age Disability Payment"
                />
            </Wrapper>
            <Wrapper>
                <PageHeader title="We want to know if you need help to take medication" caption="Support taking medication, monitoring a condition and with therapy" />
            </Wrapper>
            <Wrapper style={{ marginBottom: '40px' }}>
                <p>This is only medication that has been prescribed for you.</p>
                <Details label="What medication should I include">
                    <p>Medication can include:</p>
                    <ul>
                        <li>pills</li>
                        <li>capsules</li>
                        <li>tablets</li>
                        <li>creams</li>
                        <li>injections</li>
                        <li>salves</li>
                        <li>remedies</li>
                        <li>medicated wraps</li>
                        <li>inhalers</li>
                        <li>nebulisers</li>
                        <li>patches</li>
                    </ul>
                </Details>
                <p>Remember to think about:</p>
                <ul>
                    <li>help you might need but do not already have</li>
                    <li>help you only sometimes need</li>
                </ul>
                <p>Here are some examples of things you might need to use to help you take medication:</p>
                <h3>Add images here</h3>
            </Wrapper>
            <Wrapper style={{ marginBottom: '40px' }}>
                <Question id="field-fixed-20" label="Do you need help to take prescribed medication?">
                    <Radios
                        name="dressing"
                        id="dressing"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I need to use something or get help from another person to take medication',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I can take medication by myself or do not take medication',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="What help do you need to take medication, and why do you need this help?">
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="How often do you need this help?">
                    <p>We know this might vary so you do not have to be exact, just tell us roughly.</p>
                    <p>For example:</p>
                    <ul>
                        <li>I need to use a pill box three times a day</li>
                        <li>I need someone to remind me about 4 days each week</li>
                    </ul>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/14-taking-medication"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="./02-monitor-condition"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default HelpYouNeedGettingInAndOutOfBed;
