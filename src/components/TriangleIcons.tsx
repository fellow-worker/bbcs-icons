import {  CaretLeft, CaretDown, CaretUp, CaretRight } from '@styled-icons/boxicons-regular'
import { IconProps } from '../interfaces/IconsProps';

export const TriangleDownIcon = ({size} : IconProps) => {
    return <CaretDown size={size} />
}

export const TriangleUpIcon = ({size} : IconProps) => {
    return <CaretUp size={size} />
}

export const TriangleLeftIcon = ({size} : IconProps) => {
    return <CaretLeft size={size} />
}

export const TriangleRightIcon = ({size} : IconProps) => {
    return <CaretRight size={size} />
}