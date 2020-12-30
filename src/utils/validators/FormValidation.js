import React from 'react'

export const required = value => {
    if(value) return undefined
    return "This field is required"
}

const maxLengthCreator = number => value => {
    if(value && value.length > number) return `Must be ${number} characters or less`
    return undefined
}

export const maxLength50 = maxLengthCreator(50);

