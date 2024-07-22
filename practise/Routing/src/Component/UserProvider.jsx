import React, { createContext, useState } from 'react';

// Create a context
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Ritik' });

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
