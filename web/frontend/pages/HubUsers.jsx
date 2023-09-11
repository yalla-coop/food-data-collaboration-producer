import { Checkbox } from '@shopify/polaris';
import { useQueryClient } from 'react-query';
import { useAppQuery, useAppMutation } from '../hooks';

export default function HubUsers() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useAppQuery({
    url: '/api/hub-users'
  });

  const { mutateAsync, isLoading: updateUserStatusLoading } = useAppMutation({
    reactQueryOptions: {
      onSuccess: () => {
        queryClient.invalidateQueries('/api/hub-users');
      }
    }
  });

  if (isLoading) {
    return 'loading...';
  }

  const users = data?.users;

  if (!users || users.length === 0) {
    return (
      <div>
        <p>No users found</p>
      </div>
    );
  }

  return users.map((user) => (
    <div
      key={user.id}
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Checkbox
        style={{
          width: '50px'
        }}
        disabled={updateUserStatusLoading}
        checked={user.status}
        onChange={async () => {
          await mutateAsync({
            url: `/api/hub-users/${user.userId}`,
            fetchInit: {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              }
            }
          });
        }}
      />
      <p
        style={{
          margin: '0 10px'
        }}
      >
        {user.name}
      </p>
      <p>{user.userId}</p>
    </div>
  ));
}
