import { SignOutAlt } from '@styled-icons/fa-solid/SignOutAlt'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <SignOutAlt size={size} />
}

export default Icon;