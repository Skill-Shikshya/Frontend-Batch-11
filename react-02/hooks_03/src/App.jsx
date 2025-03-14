import { useEffect, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);
  const [search, setSearch] = useState("");

  // console.log("users", search);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const userId = 1;
        let response = await fetch(`${API_BASE_URL}?postId=${userId}`);
        let result = await response.json();
        // console.log(result);
        setUsers(result);
        setFilteredUser(result); // initially all data are pushed to the filtered state variable
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setFilteredUser(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [users, search]);

  return (
    <>
      <div className="">
        <h1>Fetch user</h1>

        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-slate-900 border-2 rounded bg-gray-300"
        />
        <ul className=" sm:grid sm:grid-cols-2 md:grid-cols-3">
          {filteredUser?.map((user) => (
            <li
              key={user.id}
              className="h-24 sm:h-48 p-4 m-4 border-1 rounded-2xl  border-blue-400"
            >
              <h2 className="font-bold text-slate-600">{user.name}</h2>
              <p className="font-extralight text-xs ">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
