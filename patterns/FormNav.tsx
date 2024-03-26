'use client';

import React from 'react';

import ButtonGroup from '@/components/ButtonGroup';
import Button from '@/components/Button';

const FormNav:React.FC<ScotGov.Pattern.FormNav> = function FormNav({
    back = true,
    next = true,
}) {
    let backEnabled;
    let backLabel;
    let backHref;

    let nextEnabled;
    let nextLabel;
    let nextHref;

    switch (typeof back) {
        case 'string':
            backEnabled = true;
            backHref = back;
            break;

        case 'object':
            backEnabled = typeof back.enabled === 'boolean' ? back.enabled : true;
            backLabel = back?.label;
            backHref = back?.href;
            break;

        default:
            backEnabled = !!back;
            break;
    }

    switch (typeof next) {
        case 'string':
            nextEnabled = true;
            nextHref = next;
            break;

        case 'object':
            nextEnabled = typeof next.enabled === 'boolean' ? next.enabled : true;
            nextLabel = next?.label;
            nextHref = next?.href;
            break;

        default:
            nextEnabled = !!next;
            break;
    }

    console.log({
        next, back,
    }, {
        nextEnabled,
        nextLabel,
        nextHref,
    }, {
        backEnabled,
        backLabel,
        backHref,
    });

    return (
        <ButtonGroup>
            { backEnabled && (
                <Button
                    variants="cancel"
                    icon="chevron_left"
                    iconSide="left"
                    href={backHref}
                    type={!backHref ? 'button' : undefined}
                    onClick={!backHref ? (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault();
                        window.history.back();
                    } : undefined}
                >
                    { backLabel || 'Back' }
                </Button>
            )}
            { nextEnabled && (
                <Button
                    icon="chevron_right"
                    href={nextHref}
                    type={!nextHref ? 'submit' : undefined}
                >
                    { nextLabel || 'Save and continue' }
                </Button>
            )}
        </ButtonGroup>
    );
};

export default FormNav;
