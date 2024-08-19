import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...arg) => fetch(...arg).then((res) => res.json());

const userPage = () => {
  const router = useRouter();

  // const {data, error } = useSWR("https://dummyjson.com/users/", fetcher);
  // console.log("data", data);

  const data = new Array(30).fill(0);
  console.log("data", data)

  // if(error) return <h1>Failed to load</h1>
  // if(!data) return <h1>Loading...</h1>

  return (
    <div>
      <h1>User Page</h1>
      {/* <ol>
        {data.users &&
          data.users &&
          data.users.map((user, index) => (
            <li key={user.id}>
              <Link  href={`/user/${user.id}`}>
                {user.firstName}
              </Link>
            </li>
          ))}
      </ol> */}
    </div>
  );
};

export default userPage;
