import { Underline } from '@styled-icons/boxicons-regular/Underline';
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Underline size={size} />
}

export default Icon;