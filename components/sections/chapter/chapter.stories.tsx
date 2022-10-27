import { ComponentMeta, ComponentStory } from '@storybook/react';
import Chapter, { IChapter } from './chapter';
import { mockBaseTemplateProps } from './chapter.mocks';

export default {
  title: 'sections/Chapter',
  component: Chapter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Chapter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chapter> = () => (
  <Chapter />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplateProps.base,
} as IChapter;
