import { useEffect, useState } from "react";
import UserProfile from "./components/UserProfile";

function App() {
  // const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   console.log(`Count is ${count}`);

  //   return () => {
  //     console.log("I am cleaning up");
  //   };
  // }, [count]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let finalData = await res.json();
      setUsers(finalData);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data))
  //     .catch((error) => console.log(error));
  // }, []);
  console.log(users);
  return (
    <>
      <div className="">
        {/* <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Update Count</button> */}
        {/* <UserProfile /> */}

        {users &&
          users.map((data) => (
            <p
              key={data.id}
              className="text-blue-500 border-1  rounded p-4 m-3"
            >
              {data.id} User's name is : {data.title}
            </p>
          ))}
      </div>
    </>
  );
}

export default App;
