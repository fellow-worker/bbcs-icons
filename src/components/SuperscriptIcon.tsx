import { Superscript } from '@styled-icons/material-outlined'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Superscript size={size} />
}

export default Icon;