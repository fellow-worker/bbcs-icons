import {  CaretLeft, CaretDown, CaretUp, CaretRight } from '@styled-icons/boxicons-regular'
import { IconProps } from '../interfaces/IconsProps';

export const TriangleDownIcon : React.FC<IconProps> = ({size}) => {
    return <CaretDown size={size} />
}

export const TriangleUpIcon : React.FC<IconProps> = ({size}) => {
    return <CaretUp size={size} />
}

export const TriangleLeftIcon : React.FC<IconProps> = ({size}) => {
    return <CaretLeft size={size} />
}

export const TriangleRightIcon : React.FC<IconProps> = ({size}) => {
    return <CaretRight size={size} />
}