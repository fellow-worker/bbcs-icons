import { Menu } from '@styled-icons/heroicons-outline/Menu'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Menu size={size} />
}

export default Icon;