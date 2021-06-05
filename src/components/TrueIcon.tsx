import { Check } from '@styled-icons/heroicons-solid/Check';
import { StyledIconProps } from '@styled-icons/styled-icon'

const Icon : React.FC<StyledIconProps> = ({size}) => {
    return <Check size={size} />
}

export default Icon;