import { useTheme } from 'styled-components'
import TrueIcon from './TrueIcon';
import FalseIcon from './FalseIcon';
import { DefaultTheme  } from '../interfaces/DefaultTheme';

export interface BoolIconProps {
    value : boolean,
    colored? : boolean,
    size? : number
}

const BoolIcon : React.FC<BoolIconProps> = ({value, colored = false, size = 40}) => {

    const theme = useTheme() as DefaultTheme;

    let color = 'inherit';
    if(colored && value) color = theme.colors?.success;
    if(colored && !value) color = theme.colors?.error;

    return (
        <span style={{ color : color}}>
            {value ? <TrueIcon size={size} /> : <FalseIcon size={size} />}
        </span>
    );
}

export default BoolIcon;