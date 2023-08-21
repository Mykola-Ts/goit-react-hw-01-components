import PropTypes from 'prop-types';
import { Wrapper } from './ProfileDescr.styled';
import { Avatar } from './ProfileDescr.styled';
import { Name } from './ProfileDescr.styled';
import { Info } from './ProfileDescr.styled';

export const ProfileDescr = ({ username, tag, location, avatar }) => {
  return (
    <Wrapper>
      <Avatar src={avatar} alt="User avatar"/>
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
