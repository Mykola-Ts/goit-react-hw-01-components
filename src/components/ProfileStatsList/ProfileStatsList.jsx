import { ProfileStatsItem } from 'components/ProfileStatsItem/ProfileStatsItem';
import { List } from './ProfileStatsList.styled';
import PropTypes from 'prop-types';

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
