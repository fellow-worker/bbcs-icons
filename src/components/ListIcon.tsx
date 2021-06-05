import { ListUl } from '@styled-icons/boxicons-regular/ListUl'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <ListUl size={size} />
}

export default Icon;