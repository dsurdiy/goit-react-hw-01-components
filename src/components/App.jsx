import { Profile } from 'components/profile/Profile';
import user from 'user.json';

export function App() {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}
