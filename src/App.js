import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import RolesPage from './components/RolesPage';
import PermissionsPage from './components/PermissionsPage';

const App = () => {
  return (
    <Router>
      <div>
        <h1>RBAC Dashboard</h1>
        <nav>
          <ul>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/roles">Roles</Link></li>
            <li><Link to="/permissions">Permissions</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/roles" element={<RolesPage />} />
          <Route path="/permissions" element={<PermissionsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
