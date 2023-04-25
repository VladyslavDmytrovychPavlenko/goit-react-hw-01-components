import PropTypes from 'prop-types';
import { List, StatsEl, Avatar, Name, Status } from './friendList.utils';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <StatsEl key={id}>
          <Status isOnline={isOnline}>{isOnline}</Status>
          <Avatar src={avatar} alt="User avatar" width="30" />
          <Name>{name}</Name>
        </StatsEl>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
