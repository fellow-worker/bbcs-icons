import { Home } from '@styled-icons/boxicons-solid/Home'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Home size={size} />
}

export default Icon;