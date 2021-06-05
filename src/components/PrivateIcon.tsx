import { Hide } from '@styled-icons/boxicons-solid/Hide'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Hide size={size} />
}

export default Icon;