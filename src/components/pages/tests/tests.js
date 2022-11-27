import Search from "../search/search";

const TestsPage = () => {
  return (
    <>
      <main className="flex">
        <h1>Tests</h1>
        <Search qType={'tests'} />
      </main>
    </>
  );
}
export default TestsPage;