import { ComponentMeta, ComponentStory } from '@storybook/react';
import EventCard, { IEventCard } from './EventCard';
import { mockEventCardProps } from './EventCard.mocks';

export default {
  title: 'cards/event/EventCard',
  component: EventCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof EventCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EventCard> = (args) => (
  <EventCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockEventCardProps.base,
} as IEventCard;
