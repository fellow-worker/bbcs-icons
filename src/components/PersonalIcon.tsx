import { User } from '@styled-icons/boxicons-solid/User'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <User size={size} />
}

export default Icon;