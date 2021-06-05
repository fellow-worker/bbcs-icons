import { Link } from '@styled-icons/boxicons-regular/Link';
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Link size={size} />
}

export default Icon;