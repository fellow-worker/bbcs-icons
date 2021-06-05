import { Strikethrough } from '@styled-icons/boxicons-regular/Strikethrough';
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Strikethrough size={size} />
}

export default Icon;