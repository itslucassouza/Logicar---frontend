import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type User = {
  name: string;
  loggedIn: boolean;
};

type UserContextType = {
  user: User;
  login: (name: string) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
  const storedUser = localStorage.getItem('user');
  const initialUser: User = storedUser ? JSON.parse(storedUser) : { name: '', loggedIn: false };
  const [user, setUser] = useState<User>(initialUser);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const logout = () => {
    setUser({ name: '', loggedIn: false });
  };

  const login = (name: string) => {
    setUser({ name, loggedIn: true });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
