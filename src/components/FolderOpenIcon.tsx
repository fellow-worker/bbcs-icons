import { FolderOpen } from '@styled-icons/boxicons-solid/FolderOpen';
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <FolderOpen size={size} />
}

export default Icon;