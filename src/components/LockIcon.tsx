import { LockAlt } from '@styled-icons/boxicons-solid/LockAlt'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <LockAlt size={size} />
}

export default Icon;