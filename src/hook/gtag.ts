import ReactGA from 'react-ga4';

interface EventTriggerProps {
  action: string;
  category: string;
  label: string;
  value: number;
}

export const EventTrigger = ({ action, category, label, value }: EventTriggerProps) => {
  ReactGA.event({
    action: action,
    category: category,
    label: label,
    value: value,
  });
};
