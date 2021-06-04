import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import Icon, { BoolIconProps } from './BoolIcon';

const theme = { colors : { success : '#3fab49', error : '#e51c23'  }}

const BoolIcon : React.FC<BoolIconProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Icon {...props}  />
    </ThemeProvider>
  );
}

export default {
  title: 'Icons/BoolIcon',
  component: BoolIcon,
} as Meta;

const DefaultTemplate: Story<BoolIconProps> = (args) => <BoolIcon {...args} />

export const Default = DefaultTemplate.bind({});
Default.args = { value : true, colored : true, size : 40 };