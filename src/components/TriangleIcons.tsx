import {  CaretLeftFill, CaretDownFill, CaretUpFill, CaretRightFill } from '@styled-icons/bootstrap'
import { IconProps } from '../interfaces/IconsProps';

export const TriangleDownIcon = ({size} : IconProps) => {
    return <CaretDownFill  size={size} />
}

export const TriangleUpIcon = ({size} : IconProps) => {
    return <CaretUpFill size={size} />
}

export const TriangleLeftIcon = ({size} : IconProps) => {
    return <CaretLeftFill size={size} />
}

export const TriangleRightIcon = ({size} : IconProps) => {
    return <CaretRightFill size={size} />
}