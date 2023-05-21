export default async function WebSearchPage({ searchParams }) {
  const response =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_JSON_API_KEY}&cx=${process.env.GOOGLE_JSON_CONTEXT_KEY}&q=${searchParams.term}
`);

  const data = await response.json();
  const results = data.items;
  return (
    <>
      {results &&
        results.map((result) => <h1 key={result.title}>{result.title}</h1>)}
    </>
  );
}
