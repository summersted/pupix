import Search from "../search/search";

const QuestionsPage = () => {
    return (
        <>
          <main className="flex">
            <h1>Questions</h1>
            <Search qType={'questions'}/>
          </main>
        </>
      );
}
export default QuestionsPage;