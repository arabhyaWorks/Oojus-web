const UsersPageInfo = (props) => {
  console.log("props", props.data);
  return (
    <div>
      <h1>Users profile page</h1>
      <div>
        {props.data && (
          <div>
            <h1>{props.data.firstName}</h1>
            <p>{props.data.email}</p>
            <p>{props.data.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = [];
  for (let i = 0; i < 30; i++) {
    data.push({ params: { id: i.toString() } });
  }

  return {
    paths: data,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  console.log("id", id);
  const data = await (await fetch("https://dummyjson.com/users/" + id)).json();
  return {
    props: {
      data,
    },
  };
};

export default UsersPageInfo;

