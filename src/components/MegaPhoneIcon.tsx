import { Megaphone } from '@styled-icons/boxicons-solid/Megaphone'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Megaphone size={size} />
}

export default Icon;