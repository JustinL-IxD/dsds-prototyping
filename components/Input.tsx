'use client';

import React, { useRef } from 'react';
import classNames from '../lib/classNames';
import Button from './Button';

const allowedInputTypes = [
    'color',
    'date',
    'datetime-local',
    'email',
    'month',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week',
];

/**
 * @param {ScotGov.Component.Field.Input} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Input:React.FC<ScotGov.Component.Field.Input> = function Input({
    type: defaultType,
    inputMode: defaultMode,
    name,
    id,
    className,
    value,
    error,
    width = 'fixed-20',
    onChange,
    onBlur,
    icon,
    currency,
    ...props
}) {
    let type = defaultType as React.HTMLInputTypeAttribute;
    let inputMode = defaultMode;
    const inputRef = useRef(null);

    if (!allowedInputTypes.includes(type)) {
        type = 'text';
    }

    if (type === 'number' && !inputMode) {
        type = 'text';
        inputMode = 'numeric';
    }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        if (typeof onChange === 'function') {
            onChange(event);
        }
    };

    const handleBlur = (event:React.FocusEvent<HTMLInputElement>) => {
        const { target } = event;
        target.value = target.value.trim();

        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    };

    return (
        <div
            className={classNames(
                icon ? 'ds_input__wrapper ds_input__wrapper--has-icon' : '',
                currency ? 'ds_currency-wrapper' : '',
            )}
            data-symbol={currency}
        >
            <input
                type={type}
                inputMode={inputMode}
                id={id}
                name={name}
                defaultValue={value}
                className={classNames(
                    'ds_input',
                    width ? `ds_input--${width}` : '',
                    error ? 'ds_input--error' : '',
                    className,
                )}
                onChange={handleChange}
                onBlur={handleBlur}
                ref={inputRef}
                {...props}
            />
            { icon && (
                <Button
                    iconSide="icon-only"
                    icon={icon}
                    onClick={() => {
                        if (inputRef.current) {
                            (inputRef.current as HTMLInputElement).focus();
                        }
                    }}
                >
                    { name }
                </Button>
            )}
        </div>
    );
};

export default Input;
