
import Search from "../search/search";

const UsersPage = () => {
  return (
    <>
      <main className="flex">
        <h1>Users</h1>
        <Search qType={'users'} />
      </main>
    </>
  );
}

export default UsersPage;