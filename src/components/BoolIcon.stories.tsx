import { Story, Meta } from '@storybook/react';

import BoolIcon, { BoolIconProps } from './BoolIcon';

export default {
  title: 'Icons/BoolIcon',
  component: BoolIcon,
} as Meta;

const theme = { colors : { success : '#3fab49', error : '#e51c23'  }}
const ValueTemplate: Story<BoolIconProps> = (args) => <BoolIcon {...args} />;
const ColorTemplate: Story<BoolIconProps> = (args) => <BoolIcon {...args} colored={true} theme={theme} />;

export const Value = ValueTemplate.bind({});
Value.args = { value : true };

export const Colored = ColorTemplate.bind({});
Colored.args = { value : true };