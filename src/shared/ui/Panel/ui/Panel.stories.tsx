import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Panel } from './Panel';

export default {
    title: 'Shared/Panel',
    component: Panel
} as ComponentMeta<typeof Panel>;

const style = {
    width: 400,
    height: 350
}

const Template: ComponentStory<typeof Panel> = (args) => (
    <div style={style} >
        <Panel {...args} />
    </div>
)

export const Primary = Template.bind({})
Primary.args = {
    header: 'header',
    children: 'clildren',
    body: 'body'
}

export const CommingSoonPanel = Template.bind({})
CommingSoonPanel.args = {
    header: 'HEADER COMMING SOON'
}
