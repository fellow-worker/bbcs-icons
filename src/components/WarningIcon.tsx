import { Warning } from '@styled-icons/ionicons-solid/Warning';
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Warning size={size} />
}

export default Icon;