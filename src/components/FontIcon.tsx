import { Font } from '@styled-icons/boxicons-regular/Font'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Font size={size} />
}

export default Icon;