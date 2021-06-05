import { Image } from '@styled-icons/fa-solid/Image'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Image size={size} />
}

export default Icon;