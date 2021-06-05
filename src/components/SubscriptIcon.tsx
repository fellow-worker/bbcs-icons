import { Subscript } from '@styled-icons/material-outlined'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Subscript size={size} />
}

export default Icon;