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
                <PageHeader title="About your medication" caption="Conditions, medications and treatments" />
            </Wrapper>
            <Wrapper>
                <p>If you have a recent prescription list showing your medication, you can either upload it online or post it to us.</p>
                <p>You can enter details of medications below if:</p>
                <ul>
                    <li>you do not have a prescription list</li>
                    <li>you need to add any medications that are not on your prescription list</li>
                </ul>
                <h2>Ask lewis about repeater component</h2>
            </Wrapper>
            <Wrapper>
                <form>
                    <Radios
                        name="add-medication"
                        id="add-medication"
                        label="Does your medication cause any side effects?"
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
                    <Question id="field-fixed-20" label="Tell us any side effects caused by your medication">
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
                        href="./04-medications"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href="./06-add-medication"
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
