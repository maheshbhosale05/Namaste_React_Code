import React, { useContext } from "react";
import { UserContext } from "../utils/userContext";

const Footer = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="flex gap-4 p-8">
      <div className="font-bold">Footer: </div>
      <input
        type="text"
        className="block w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-visible:border-none focus:ring-2 focus:ring-inset focus:ring-[#ff0d0d] sm:text-sm sm:leading-6"
        placeholder="Enter Name"
        value={user.name}
        onChange={(e) =>
          setUser({ name: e.target.value, email: "dummy@gmail.com" })
        }
      ></input>
    </div>
  );
};

export default Footer;
