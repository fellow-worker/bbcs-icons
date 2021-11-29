import { Message } from '@styled-icons/material-rounded/Message'
import { ThreeP } from '@styled-icons/material-rounded/ThreeP'


import { IconProps } from '../interfaces/IconsProps';

const Icon = ({size} : IconProps) => {
    return <Message size={size} />
}

export const MessageAdmin = ({size} : IconProps) => {
    return <ThreeP size={size} />
}


export default Icon;