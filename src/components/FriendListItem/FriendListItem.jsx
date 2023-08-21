import PropTypes from 'prop-types';
import { Status } from './FriendListItem.styled';
import { Avatar } from './FriendListItem.styled';
import { Name } from './FriendListItem.styled';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <>
      {isOnline ? (
        <Status status="online"></Status>
      ) : (
        <Status status="offline"></Status>
      )}

      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
