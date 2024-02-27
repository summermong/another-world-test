import ReactGA from 'react-ga4';

export const EventTrigger = ({ action, category, label, value }) => {
  ReactGA.event({
    action: action,
    category: category,
    label: label,
    value: value,
  });
};
