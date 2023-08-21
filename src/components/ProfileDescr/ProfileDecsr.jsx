import { Wrapper, Avatar, Name, Info } from './ProfileDescr.styled';
import PropTypes from 'prop-types';

export const ProfileDescr = ({ username, tag, location, avatar }) => {
  return (
    <Wrapper>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Info>@{tag}</Info>
      <Info>{location}</Info>
    </Wrapper>
  );
};

ProfileDescr.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
