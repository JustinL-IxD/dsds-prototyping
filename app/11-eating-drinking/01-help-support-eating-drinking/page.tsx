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
                <PageHeader title="Help or support eating and drinking" caption="Eating and drinking" />
            </Wrapper>
            <Wrapper style={{ marginBottom: '40px' }}>
                <Question id="field-fixed-20" label="Do you need help or support eating and drinking?">
                    <p>This includes:</p>
                    <ul>
                        <li>help you might need but do not already have</li>
                        <li>help you only need sometimes</li>
                        <li>help from a person, or using an aid, tool or adaptation</li>
                    </ul>
                    <Radios
                        name="eating"
                        id="eating"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always need help or support eating and drinking',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never need help or support eating and drinking',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper>
                <h2>Help or support from someone else</h2>
                <p>Example of help from someone else</p>
                <h3>Add in images in here</h3>
                <Question id="field-fixed-20" label="Tell us about the help or support you need from someone else to eating and drinking">
                    <p>This includes help or support you might need but do not already have.</p>
                    <p>For example, if you need someone to:</p>
                    <ul>
                        <li>help you cut up food or feed you</li>
                        <li>make sure you don&apos;t choke</li>
                        <li>remind or encourage you to eat and drink</li>
                    </ul>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <h2>Aids, adaptations and tools</h2>
                <p>Examples of help you might need include:</p>
                <h3>Add in images in here</h3>
                <Question id="field-fixed-20" label="Tell us about any aids, adaptations or tools you use eating and drinking">
                    <p>For example, if you need to use a feeding tube, or if you need to use plate guards to make sure you don&apos;t spill food.</p>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/11-eating-drinking"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="./02-check-your-answers"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default HelpYouNeedGettingInAndOutOfBed;
