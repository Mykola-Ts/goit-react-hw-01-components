import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List, ListItem } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <ListItem key={id}>
          <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
        </ListItem>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
