import { Button, Checkbox } from '@shopify/polaris';
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

  const {
    mutateAsync: deleteUser,
    isLoading: deleteUserLoading,
    error: deleteUserError
  } = useAppMutation({
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

  if (deleteUserError) {
    return (
      <div>
        <p>Something went wrong</p>
        {deleteUserError && <p>{deleteUserError?.message}</p>}
      </div>
    );
  }

  return users.map((user) => (
    <div
      key={user.id}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        background: '#fff',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
        borderBottom: '1px solid #ccc'
      }}
    >
      <Checkbox
        helpText="User status"
        label="Approved"
        style={{
          width: '50px',
          flexGrow: 1
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

      <div
          style={{
            flexGrow: 2,
            marginLeft: '10px'
          }}
      >
        <p>
          <strong>Hub Name:</strong>
          {user.shop}
        </p>
        <p>
          <strong>Name:</strong>
          {user.name}
        </p>
        <p>
          <strong>User Id:</strong>
          {user.userId}
        </p>
      </div>

      <Button
          primary
          loading={deleteUserLoading}
          disabled={deleteUserLoading}
        onClick={async () => {
          await deleteUser({
            url: `/api/hub-users/${user.userId}`,
            fetchInit: {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              }
            }
          });
        }}
      >
        Delete User
      </Button>
    </div>
  ));
}
