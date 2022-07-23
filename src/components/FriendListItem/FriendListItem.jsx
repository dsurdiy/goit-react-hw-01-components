import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './FriendListItem.module.css';

const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <Status isOnline={isOnline} />
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
