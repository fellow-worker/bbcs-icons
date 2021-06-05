import { Cog } from '@styled-icons/boxicons-solid/Cog';
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Cog size={size} />
}

export default Icon;