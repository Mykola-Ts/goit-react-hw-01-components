import { ProfileDescr } from 'components/ProfileDescr/ProfileDecsr';
import { ProfileStatsList } from 'components/ProfileStatsList/ProfileStatsList';
import PropTypes from 'prop-types';
import { Wrapper } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <ProfileDescr
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />

      <ProfileStatsList stats={stats} />
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
