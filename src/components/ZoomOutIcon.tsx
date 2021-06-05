import { ZoomOut } from '@styled-icons/boxicons-solid/ZoomOut';
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <ZoomOut size={size} />
}

export default Icon;