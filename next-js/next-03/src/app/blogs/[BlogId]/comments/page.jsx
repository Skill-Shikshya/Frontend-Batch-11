export default async function Comments({ params }) {
  const paramsObj = await params;
  const { BlogId } = paramsObj;
  console.log("BlogId", BlogId);
  return (
    <div className="">
      <h1>Comments page {BlogId}</h1>
    </div>
  );
}
