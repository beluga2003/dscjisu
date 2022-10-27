import { ComponentMeta, ComponentStory } from '@storybook/react';
import BlogCard, { IBlogCard } from './BlogCard';
import { mockCatCardProps } from './BlogCard.mocks';

export default {
  title: 'cards/blog/BlogCard',
  component: BlogCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BlogCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BlogCard> = (args) => (
  <BlogCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCatCardProps.base,
} as IBlogCard;
