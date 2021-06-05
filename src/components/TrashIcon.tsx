import { TrashAlt } from '@styled-icons/boxicons-solid/TrashAlt';
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <TrashAlt size={size} />
}

export default Icon;