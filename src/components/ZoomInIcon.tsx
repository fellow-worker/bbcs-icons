import { ZoomIn } from '@styled-icons/boxicons-solid/ZoomIn';
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <ZoomIn size={size} />
}

export default Icon;