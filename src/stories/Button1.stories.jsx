import { Button1 } from "./Button1";
import './button.css';

export default {
    title: 'another-world-test/Button1',
    component: Button1,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
      label: {control: 'label'}
    },
  };

  export const BigPurple = () => (
    <Button1 label="Button" 
    size="large" backgroundColor="#de96ff" />
  );

  export const BigNavy = () => (
    <Button1 label="Button" 
    size="large" backgroundColor="#000b5e" />
  );