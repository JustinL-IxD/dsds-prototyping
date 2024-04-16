/* eslint-disable max-len */

'use client';

import React, { useState } from 'react';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import SectionHeader from '@/components/SectionHeader';
import Radios from '@/components/Radio';
import Question from '@/components/Question';
import TextArea from '@/components/TextArea';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const StayHospitalCareHomeLegalDetention:React.FC = function StayHospitalCareHomeLegalDetention() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Wrapper>
                <SectionHeader
                    link="/"
                    title="Pension Age Disability Payment"
                />
            </Wrapper>
            <Wrapper>
                <PageHeader title="About your treatments or therapies" />
            </Wrapper>
            <Wrapper>
                <p>Tell us about any treatment or therapies you take.</p>
                <p>We&apos;ll ask about:</p>
                <ul>
                    <li>the name of the treatment or therapy</li>
                    <li>how frequently you do it</li>
                    <li>how long it takes</li>
                </ul>
                <h2>Ask lewis about repeater component</h2>
            </Wrapper>
            <Wrapper>
                <form>
                    <Radios
                        name="go-next"
                        id="go-next"
                        label="Does your treatments and therapies cause any side effects?"
                        hintText="opens when items have been inputted but need to sort logic"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                /**
                                    * @param {Event} event - The event object
                                 */
                                onChange() {
                                    setOpen(true);
                                },
                            },
                            {
                                label: 'No',
                                value: 'no',
                                /**
                                    * @param {Event} event - The event object
                                 */
                                onChange() {
                                    setOpen(false);
                                },
                            },
                        ]}
                    />
                </form>
            </Wrapper>
            {open && (
                <Wrapper>
                    <Question id="field-fixed-20" label="Tell us any side effects caused by your treatments and therapies">
                        <p>Include any side effect you get from any of your treatments. Include any details such as when and how often the side effect occurs, as well as how long it lasts and it affects your day to day life.</p>
                        <TextArea name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                    </Question>
                </Wrapper>
            )}
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./07-therapies"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="./09-add-therapies"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
