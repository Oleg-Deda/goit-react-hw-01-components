import PropTypes from 'prop-types';
import { StatsItem } from '../StatsItem/StatsItem';
import { StatsData } from './Statslist.styled';


export const StatsList = ({ stats }) => {
  return (
    <StatsData className="stat-list">
      {stats.map(stat => (
        <StatsItem key={stat.id} stat={stat} />
      ))}
    </StatsData>
  );
};

StatsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};
