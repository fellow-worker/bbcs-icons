import { Moon } from '@styled-icons/boxicons-solid/Moon'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Moon size={size} />
}

export default Icon;