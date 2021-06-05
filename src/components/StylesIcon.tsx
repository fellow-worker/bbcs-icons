import { Style } from '@styled-icons/material/Style';
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Style size={size} />
}

export default Icon;