import { Close } from '@styled-icons/material/Close';
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Close size={size} />
}

export default Icon;