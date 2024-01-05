import Button from './Button';

export default {
  title: 'another-world-test/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = () => <Button primary label="Button" />;

export const Secondary = () => <Button label="Button" />;

export const StartButton = () => <Button size="large" backgroundColor="white" label="시작하기" />;

export const Small = () => <Button size="small" label="Button" />;
