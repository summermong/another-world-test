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

export const StartButton = args => <Button size="start" backgroundColor="white" {...args} />;

export const ChoiceButton = args => <Button size="choice" backgroundColor="white" {...args} />;

export const LinkButton = args => <Button size="result" backgroundColor="white" {...args} />;

export const KatalkButton = args => <Button size="result" backgroundColor="white" {...args} />;
