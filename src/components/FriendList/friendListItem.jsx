import PropTypes from 'prop-types';
import { StatsEl, Avatar, Name, Status } from './friendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <StatsEl>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="30" />
      <Name>{name}</Name>
    </StatsEl>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
