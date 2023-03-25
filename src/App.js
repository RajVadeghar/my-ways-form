import { useState } from "react";

function App() {
  const [email, setEmail] = useState(String());
  const [username, setUsername] = useState(String());
  const [phNumber, setPhNumber] = useState(String());

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await fetch(
          `https://test-api-v3.myways.ai/user?email=${email}`
        );

        if (res.status === 200 && res.ok) {
          alert("User Found");
          return;
        }

        fetch(`https://test-api-v3.myways.ai/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: username,
            email,
            phone: phNumber,
          }),
        })
          .then((res) => {
            if (res.status === 200 && res.ok) {
              return res.json();
            }
          })
          .then((res) => {
            console.log("res >>> ", res);
            alert("User Created Successfully");
          })
          .catch(() => {
            alert("Someting went wrong");
          });
      }}
      className="App"
    >
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your email"
      />
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Enter your name"
      />
      <input
        value={phNumber}
        onChange={(e) => setPhNumber(e.target.value)}
        type="number"
        maxLength={10}
        placeholder="xxxxxxxxxx"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
