// import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Item from "./components/ItemList";
function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Body />
      <Item itemName="LỒNG CU GÁY" />
      <Item itemName="LỒNG GÁY CU" />
      <Footer />
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [users, setUsers] = useState([]);

//   const fetchUserData = () => {
//     fetch("https://d2e3-115-79-219-34.ngrok-free.app", {
//       method: "GET", // Use the appropriate HTTP method
//       headers: new Headers({
//         "ngrok-skip-browser-warning": "69420",
//         // You can add other headers if needed
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Update the state with the fetched data
//         setUsers(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map((user) => (
//             <li key={user.Id}>
//               {user.Name} {user.Email}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default App;
