import {  ChevronLeft, ChevronDown, ChevronUp, ChevronRight } from '@styled-icons/boxicons-regular'
import { IconProps } from '../interfaces/IconsProps';

export const ChevronDownIcon = ({size} : IconProps) => {
    return <ChevronDown size={size} />
}

export const ChevronUpIcon = ({size} : IconProps) => {
    return <ChevronUp size={size} />
}

export const ChevronLeftIcon = ({size} : IconProps) => {
    return <ChevronLeft size={size} />
}

export const ChevronRightIcon = ({size} : IconProps) => {
    return <ChevronRight size={size} />
}