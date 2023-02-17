import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, TypeButton } from './Button'

export default {
    title: 'Shared/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
    children: 'hello'
}

export const TypeWarning = Template.bind({})
TypeWarning.args = {
    type: TypeButton.WARNING,
    children: 'LEAVE LOBBY'
}

export const TypeOverlay = Template.bind({})
TypeOverlay.args = {
    type: TypeButton.OVERLAY,
    children: 'Цена'
}
