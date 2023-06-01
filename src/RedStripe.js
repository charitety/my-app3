import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { userNameAtom } from "./atoms";
import "./RedStripe.scss";

export const RedStripe = () => {
  let [email, setUserEmail] = useState("");
  let [userName, setUserName] = useRecoilState(userNameAtom);
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const usersQuery = useQuery(`users/1`, async () => await axios.get(url), {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  useEffect(() => {
    if (usersQuery.isFetched && userName === "") {
      setUserName(usersQuery.data.data.name);
      setUserEmail(usersQuery.data.data.email);
    }
  }, [
    userName,
    setUserEmail,
    setUserName,
    usersQuery.isFetched,
    usersQuery.data?.data.name,
    usersQuery.data?.data.email,
  ]);

  const onHandlePush = () => {
    usersQuery.refetch();
  };

  return (
    <div className="RedStripe">
      <button onClick={() => onHandlePush()}>Get User</button>
      Username: {userName} {email}
    </div>
  );
};
