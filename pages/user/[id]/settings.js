import { useRouter } from "next/router";

const userIndex = () => {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div>
      <h1>this is settings page for </h1>
      <button
        onClick={(e) => {
          router.push(`/user/${username}/`);
        }}
      >
        Click me{" "}
      </button>
    </div>
  );
};

export default userIndex;
