import { Dislike } from '@styled-icons/boxicons-solid/Dislike'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Dislike size={size} />
}

export default Icon;