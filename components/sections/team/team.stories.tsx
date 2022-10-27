import { ComponentMeta, ComponentStory } from '@storybook/react';
import Team, { ITeamTemplate } from './team';
import { mockTeamTemplateProps } from './team.mocks';

export default {
    title: 'sections/Team',
    component: Team,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof Team>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Team> = (args) => (
    <Team {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockTeamTemplateProps.base,
} as ITeamTemplate;