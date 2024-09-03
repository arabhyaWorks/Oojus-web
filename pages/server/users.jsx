import { useState } from "react";
import Link from "next/link";
import database from "../../firebase/config";
import { onValue, ref } from "firebase/database";

const UserPageInfo = (props) => {
  console.log("props", props?.data);
  return (
    <div>
      <h1 style={{ color: "black" }}>
        {props?.data ? "fetching data from database " : "no data"}
      </h1>
      {/* <ul>
        {props.data.users.map((user, index) => (
          <li style={{ color: "black" }} key={user.id}>
            <Link href={`/user/${user.id}`}>{user.firstName}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  let data = null;

  const dbRef = ref(database, "oojus-web");
  onValue(dbRef, (snapshot) => {
    data = snapshot.val();
    console.log("data", data);
  });

  return {
    props: {
      data,
    },
  };
};

export default UserPageInfo;
