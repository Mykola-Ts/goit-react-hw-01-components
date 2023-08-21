import { Status, Avatar, Name } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <>
      <Status status={isOnline ? 'online' : 'offline'}></Status>
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
