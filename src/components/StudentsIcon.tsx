import { Chalkboard } from '@styled-icons/boxicons-solid/Chalkboard';
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Chalkboard size={size} />
}

export default Icon;