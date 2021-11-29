import {  ChevronLeft, KeyboardArrowDown, KeyboardArrowUp, ChevronRight } from '@styled-icons/material-rounded'
import { IconProps } from '../interfaces/IconsProps';

export const ChevronDownIcon = ({size} : IconProps) => {
    return <KeyboardArrowDown size={size} />
}

export const ChevronUpIcon = ({size} : IconProps) => {
    return <KeyboardArrowUp size={size} />
}

export const ChevronLeftIcon = ({size} : IconProps) => {
    return <ChevronLeft size={size} />
}

export const ChevronRightIcon = ({size} : IconProps) => {
    return <ChevronRight size={size} />
}