import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Button } from '@mui/material';

const PermissionsPage = () => {
  const [permissions, setPermissions] = useState({
    Read: true,
    Write: false,
    Delete: false,
  });

  const handlePermissionChange = (permission) => {
    setPermissions({
      ...permissions,
      [permission]: !permissions[permission],
    });
  };

  return (
    <div>
      <h2>Permissions Management</h2>
      <FormControlLabel
        control={<Checkbox checked={permissions.Read} onChange={() => handlePermissionChange('Read')} />}
        label="Read"
      />
      <FormControlLabel
        control={<Checkbox checked={permissions.Write} onChange={() => handlePermissionChange('Write')} />}
        label="Write"
      />
      <FormControlLabel
        control={<Checkbox checked={permissions.Delete} onChange={() => handlePermissionChange('Delete')} />}
        label="Delete"
      />
      <Button>Save Changes</Button>
    </div>
  );
};

export default PermissionsPage;
