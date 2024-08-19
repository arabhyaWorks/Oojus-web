import Link from "next/link";

const UserPageInfo = (props) => {
  console.log("props", props);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {props.data.users.map((user, index) => (
          <li key={user.id}>
            <Link href={`/user/${user.id}`}>{user.firstName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const data = await (await fetch("https://dummyjson.com/users/")).json();
  return {
    props: {
      data,
    },
  };
};

export default UserPageInfo;
