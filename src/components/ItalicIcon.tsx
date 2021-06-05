import { Italic } from '@styled-icons/boxicons-regular/Italic'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Italic size={size} />
}

export default Icon;