import { Like } from '@styled-icons/boxicons-solid/Like'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Like size={size} />
}

export default Icon;