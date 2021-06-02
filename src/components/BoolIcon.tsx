import { withTheme } from 'styled-components'
import TrueIcon from './TrueIcon';
import FalseIcon from './FalseIcon';
import { DefaultTheme } from '../interfaces/DefaultTheme';

export interface BoolIconProps {
    value : boolean,
    colored : boolean,
    theme : DefaultTheme
}

const BoolIcon : React.FC<BoolIconProps> = ({value, colored = false, theme}) => {

    let color = 'inherit';
    if(colored === true && value === true) color = theme.colors.success;
    if(colored === true && value === false) color = theme.colors.error;

    return (
        <span style={{ color : color}}>
            {(value === true) ? <TrueIcon /> : <FalseIcon />}
        </span>
    );
}

export default withTheme(BoolIcon);