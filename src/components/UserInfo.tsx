import React from "react";
import { UserInfoProps } from "../interfaces/UserInfoProps";

const UserInfo: React.FC<UserInfoProps> = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default UserInfo;
