import PropTypes from 'prop-types';
import { Item } from './StatsItem.styled';

export const StatsItem = ({ stat: { label, percentage } }) => {
  return (
    <Item>
      <span>{label}</span>
      <span>{percentage}%</span>
    </Item>
  );
};
StatsItem.propTypes = {
  stat: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
