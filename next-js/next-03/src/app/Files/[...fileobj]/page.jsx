export default async function AllFile({ params }) {
  const paramsObj = await params;
  const { fileobj } = paramsObj;
  console.log("params", fileobj);
  return (
    <div className="">
      <h1>catch all routes of file/{fileobj.join(" / ")} </h1>
    </div>
  );
}
