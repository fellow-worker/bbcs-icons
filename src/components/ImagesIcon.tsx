import { Images } from '@styled-icons/fa-solid/Images'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Images size={size} />
}

export default Icon;