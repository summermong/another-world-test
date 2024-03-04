import React from 'react';
import Button, { ButtonProps } from './Button';

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

export const StartButton = (args: ButtonProps) => <Button size="start" {...args} />;

export const ChoiceButton = (args: ButtonProps) => <Button size="choice" {...args} />;

export const LinkButton = (args: ButtonProps) => <Button size="share" {...args} />;

export const KatalkButton = (args: ButtonProps) => <Button size="share" {...args} />;
