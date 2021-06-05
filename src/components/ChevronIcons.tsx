import {  ChevronLeft, ChevronDown, ChevronUp, ChevronRight } from '@styled-icons/boxicons-regular'
import { IconProps } from '../interfaces/IconsProps';

export const ChevronDownIcon : React.FC<IconProps> = ({size}) => {
    return <ChevronDown size={size} />
}

export const ChevronUpIcon : React.FC<IconProps> = ({size}) => {
    return <ChevronUp size={size} />
}

export const ChevronLeftIcon : React.FC<IconProps> = ({size}) => {
    return <ChevronLeft size={size} />
}

export const ChevronRightIcon : React.FC<IconProps> = ({size}) => {
    return <ChevronRight size={size} />
}