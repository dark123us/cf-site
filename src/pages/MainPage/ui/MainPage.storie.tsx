import {ComponentStory, ComponentMeta} from '@storybook/react';
import {MainPage} from './MainPage';

export default {
    title: 'TEMPLATE/MainPage',
    component: MainPage,
    args: {},
    argTypes: {},
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => (
    <MainPage {...args}/>
);

export const Main = Template.bind({});
Main.args = {};

