import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...arg) => fetch(...arg).then((res) => res.json());

const UserInfoPage = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    "https://dummyjson.com/user/" + router.query.id,
    fetcher
  );
  console.log("data", data);

  if (error) return <h1>Failed to load</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <div>
      This is user infor page.
      <div>
        {data && (
          <div>
            <h1>{data.firstName}</h1>
            <p>{data.email}</p>
            <p>{data.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfoPage;
