import PropTypes from 'prop-types';
import {StatsList} from '../Statslist/Statslist'
import {StatsSection, StatsTitle} from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      <StatsTitle>{title}</StatsTitle>
      <StatsList stats={stats} />
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
