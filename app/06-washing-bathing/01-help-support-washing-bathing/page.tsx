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
                <PageHeader title="Help or support with washing, showering and bathing" caption="Washing and bathing" />
            </Wrapper>
            <Wrapper style={{ marginBottom: '40px' }}>
                <p>You should think about:</p>
                <ul>
                    <li>help you might need but do not already have</li>
                    <li>help you only need sometimes</li>
                    <li>help from a person, or using an aid, tool or adaptation</li>
                </ul>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="Do you need help or support with washing, showering or bathing?">
                    <p>This includes:</p>
                    <ul>
                        <li>help you might need but do not already have</li>
                        <li>help you only need sometimes</li>
                        <li>needing to use an aid, tool or adaptation</li>
                        <li>help from a person, or using an aid, tool or adaptation</li>
                    </ul>
                    <Radios
                        name="aids"
                        id="aids"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always need help or support with washing, showering or bathing',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never need help or support with washing, showering or bathing',
                            },
                        ]}
                    />
                </Question>
            </Wrapper>
            <Wrapper>
                <h2>Help or support from someone else</h2>
                <p>Example of help from a persion</p>
                <h3>Add in images in here</h3>
                <Question id="field-fixed-20" label="Tell us about the help or support you need from someone else to wash, shower or bathe yourself">
                    <p>We know this may vary, so let us know if this can change. For example, if you always have difficulty washing yourself without help from someone, or if you need someone to remind you to wash or bathe</p>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <h2>Aids, adaptations and tools</h2>
                <p>Example of aids and adaptations</p>
                <h3>Add in images in here</h3>
                <Question id="field-fixed-20" label="Tell us about any aids, adaptations or tools you use to wash, shower or bathe">
                    <p>For example, if you had rails installed to help you get in and out of the bath, or if you need to use a bath seat</p>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/06-washing-bathing"
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
