import { Message } from '@styled-icons/boxicons-solid/Message'
import { IconProps } from '../interfaces/IconsProps';

const Icon : React.FC<IconProps> = ({size}) => {
    return <Message size={size} />
}

export default Icon;