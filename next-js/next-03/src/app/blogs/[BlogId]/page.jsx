export default async function SingleBlog({ params }) {
  const paramsObj = await params;
  const { BlogId } = paramsObj;
  console.log("BlogId", BlogId);
  return (
    <div className="">
      <h1>Single Blog page {BlogId}</h1>
    </div>
  );
}
