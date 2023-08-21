import { ProfileStatsItem } from 'components/ProfileStatsItem/ProfileStatsItem';
import PropTypes from 'prop-types';
import { List } from './ProfileStatsList.styled';

export const ProfileStatsList = ({ stats: { followers, likes, views } }) => {
  return (
    <List>
      <ProfileStatsItem title="followers:" quantity={followers} />
      <ProfileStatsItem title="likes:" quantity={likes} />
      <ProfileStatsItem title="views:" quantity={views} />
    </List>
  );
};

ProfileStatsList.propTypes = {
  stats: PropTypes.object.isRequired,
};
