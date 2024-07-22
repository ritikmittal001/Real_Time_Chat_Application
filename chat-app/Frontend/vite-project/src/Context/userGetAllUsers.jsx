import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import axios from "axios";
const userGetAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const token = Cookie.get("jwt");
        const response = await axios.get(
          "/api/user/allusers",
          {
            credentials: "include",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAllUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error is useGetAllUsers: " + error);
      }
    };
    getUsers();
  }, []);

  return [allUsers, loading];
};

export default userGetAllUsers;
