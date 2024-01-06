import Button from './Button';

export default {
  title: 'another-world-test/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export const StartButton = args => <Button size="large" backgroundColor="white" {...args} />;

export const TestButton = () => <Button size="large" backgroundColor="white" label="안녕" />;

export const ChoiceButton = args => <Button size="medium" backgroundColor="white" {...args} />;
