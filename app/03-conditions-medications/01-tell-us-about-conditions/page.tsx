/* eslint-disable max-len */

'use client';

import React, { useState } from 'react';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import Radios from '@/components/Radio';
import SectionHeader from '@/components/SectionHeader';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const StayHospitalCareHomeLegalDetention:React.FC = function StayHospitalCareHomeLegalDetention() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <Wrapper>
                <SectionHeader
                    link="/"
                    title="Pension Age Disability Payment"
                />
            </Wrapper>
            <Wrapper>
                <PageHeader title="Tell us about your conditions and symptoms" />
            </Wrapper>
            <Wrapper>
                <p>If you know the name of your condition or conditions you can enter them below.</p>
                <p>Examples of conditions you might want to add - needs to be an expandable component</p>
                <p>If you do not know the name of your condition or are waiting for a diagnosis, you can tell us about:</p>
                <ul>
                    <li>your symptoms</li>
                    <li>any test results you&apos;re waiting for</li>
                </ul>
            </Wrapper>
            <Wrapper>
                <form>
                    <Radios
                        name="go-next"
                        id="go-next"
                        label="Do you have any conditions or symptoms?"
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
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="./"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href={open ? './02-about-conditions' : './04-medications'}
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
