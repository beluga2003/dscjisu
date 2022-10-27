import { ComponentMeta, ComponentStory } from '@storybook/react';
import CommunityPartner, { ICommunity } from './community';
import { mockCommunityProps } from './community.mocks';

export default {
    title: 'sections/CommunityPartner',
    component: CommunityPartner,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof CommunityPartner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CommunityPartner> = (args) => (
    <CommunityPartner {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockCommunityProps.base,
} as ICommunity;