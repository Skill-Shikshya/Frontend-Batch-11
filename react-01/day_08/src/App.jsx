import "./App.css";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submitted");
  };

  const changeName = () => setName("Raju");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <div className="bg-blue-300 text-white h-[200px] flex  items-center justify-center">
        <p className="text-3xl">Your Name is : {name}</p>
        <p>Your email is : {email}</p>
      </div>
      <button onClick={changeName} className="m-6">
        Change Name
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          className="bg-slate-500 h-[48px] w-[500px] text-white"
          placeholder="Enter your name"
          type="text"
          onChange={handleNameChange}
        />
        <label htmlFor="">Email</label>

        <input
          type="email"
          className="bg-slate-500 h-[48px] w-[500px] text-white"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
