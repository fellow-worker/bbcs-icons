import { ExclamationCircle } from '@styled-icons/heroicons-solid/ExclamationCircle';
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <ExclamationCircle size={size} />
}

export default Icon;