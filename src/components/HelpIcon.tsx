import { HelpCircle } from '@styled-icons/boxicons-solid/HelpCircle'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <HelpCircle size={size} />
}

export default Icon;