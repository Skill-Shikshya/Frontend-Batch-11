export default async function SingleComment({ params }) {
  const paramsObj = await params;
  const { BlogId, commentID } = paramsObj;
  //   console.log("params", paramsObj);
  return (
    <div className="">
      <h1>
        Single comment ko blog id {BlogId} ra comment id {commentID}{" "}
      </h1>
    </div>
  );
}
