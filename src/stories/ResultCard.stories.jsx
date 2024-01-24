import PersonalityCard from './ResultCard';

export default {
  title: 'another-world-test/Card',
  component: PersonalityCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const ResultCard = args => <PersonalityCard {...args} />;
