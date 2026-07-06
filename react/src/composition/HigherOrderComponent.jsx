import React, { useState, useEffect } from "react";

// A Higher-Order Component (HOC) is a FUNCTION that takes a component
// and returns a NEW component with extra behavior/props added —
// the same idea as a decorator. Common before hooks existed;
// still used for cross-cutting concerns like this "loading" behavior.
const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...rest }) {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    // Pass all other props straight through to the real component.
    return <WrappedComponent {...rest} />;
  };
};

const UserList = ({ users }) => (
  <ul>
    {users.map((u) => (
      <li key={u}>{u}</li>
    ))}
  </ul>
);

// UserListWithLoading is UserList "enhanced" with loading behavior,
// without modifying UserList itself.
const UserListWithLoading = withLoading(UserList);

const HigherOrderComponentExample = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(["Alice", "Bob", "Charlie"]);
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return <UserListWithLoading isLoading={isLoading} users={users} />;
};

export default HigherOrderComponentExample;
