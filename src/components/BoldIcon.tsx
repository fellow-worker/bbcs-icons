import { Bold } from '@styled-icons/boxicons-regular/Bold'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Bold size={size} />
}

export default Icon;