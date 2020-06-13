import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
      {
        id: "u1",
        name: "Helmy Fikri",
        image: "https://i.stack.imgur.com/QypI3.png",
        places: 3
      },
      {
        id: "u2",
        name: "Helmy Fikri",
        image: "https://i.stack.imgur.com/QypI3.png",
        places: 2
      },
      {
        id: "u3",
        name: "Helmy Fikri",
        image: "https://i.stack.imgur.com/QypI3.png",
        places: 2
      },
    ];
    return <UsersList items={USERS} />;
};

export default Users;
