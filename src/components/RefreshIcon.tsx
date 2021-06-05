import { Refresh } from '@styled-icons/boxicons-regular/Refresh';
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Refresh size={size} />
}

export default Icon;