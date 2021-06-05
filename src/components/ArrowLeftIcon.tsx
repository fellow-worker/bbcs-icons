import { LeftArrowAlt } from '@styled-icons/boxicons-regular'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <LeftArrowAlt size={size} />
}

export default Icon;