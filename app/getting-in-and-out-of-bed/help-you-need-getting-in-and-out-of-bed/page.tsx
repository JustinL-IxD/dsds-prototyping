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
                    title="Adult disability payment"
                />
            </Wrapper>
            <Wrapper>
                <PageHeader title="Help you need getting in and out of bed" />
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
                <form>
                    <Radios
                        name="difficulty"
                        id="difficulty"
                        label="Do you have difficulty getting in and out of bed?"
                        hintText="Ask lewis about this section for complex hint text"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always have difficulty getting in and out of bed',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never have difficulty getting in and out of bed',
                            },
                        ]}
                    />
                </form>
            </Wrapper>
            <Wrapper>
                <form>
                    <Radios
                        name="aids"
                        id="aids"
                        label="Do you ever use any aids, tools or adaptations to get in or out of bed?"
                        hintText="Ask lewis about this section for complex hint text"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                hintText: 'I sometimes or always use an aid, tool or adaptation to get in and out of bed',
                            },
                            {
                                label: 'No',
                                value: 'no',
                                hintText: 'I never use an aid, tool or adatation to get in and out of bed',
                            },
                        ]}
                    />
                </form>
            </Wrapper>
            <Wrapper>
                <Question id="field-fixed-20" label="Tell us about help and support you need getting in or out of bed">
                    <p>You should also tell us:</p>
                    <ul>
                        <li>help you might need but do not already have</li>
                        <li>help you only need sometimes</li>
                        <li>help from a person, or using an aid, tool or adaptation</li>
                    </ul>
                    <p>We know this might vary, so let us know if this can change. For example, if your condition flares up every few weeks, or if you sometimes stay in bed all day.</p>
                    <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                </Question>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/getting-in-and-out-of-bed"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="/getting-in-and-out-of-bed/check-your-answers"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default HelpYouNeedGettingInAndOutOfBed;
