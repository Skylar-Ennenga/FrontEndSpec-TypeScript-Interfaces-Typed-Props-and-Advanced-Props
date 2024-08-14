import { useState } from "react";
import { UserInfoProps } from "./interfaces/UserInfoProps";
import UserInfo from "./components/UserInfo";
import Card from "./components/Card";

function App() {
  const person1: UserInfoProps = {
    name: "John",
    age: 25,
    email: "john@test.com",
  };

  return (
    <>
      <h1>App Component</h1>
      <Card><UserInfo {...person1} /></Card>
    </>
  );
}

export default App;
