const { createContext, useState } = require("react");

export const UserContext = createContext({
  user: {
    name: "",
    email: "",
  },
  setUser: () => {},
});

export default UserContextProvider = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
