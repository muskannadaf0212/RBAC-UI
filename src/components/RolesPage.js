import React, { useState } from 'react';
import { Button, List, ListItem, ListItemText } from '@mui/material';

const RolesPage = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'User', permissions: ['Read'] }
  ]);

  const handleDeleteRole = (id) => {
    setRoles(roles.filter(role => role.id !== id));
  };

  return (
    <div>
      <h2>Role Management</h2>
      <List>
        {roles.map((role) => (
          <ListItem key={role.id}>
            <ListItemText
              primary={role.name}
              secondary={role.permissions.join(', ')}
            />
            <Button onClick={() => handleDeleteRole(role.id)}>Delete</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RolesPage;
