import { Pencil } from '@styled-icons/boxicons-solid/Pencil'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Pencil size={size} />
}

export default Icon;