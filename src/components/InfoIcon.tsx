import { InfoCircle } from '@styled-icons/boxicons-solid/InfoCircle';
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <InfoCircle size={size} />
}

export default Icon;