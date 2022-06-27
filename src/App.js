import { UserProvider } from "./context/UserContext";
import "./App.css";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser.jsx";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <AddUser />
        <UserList />
      </UserProvider>
    </div>
  );
}

export default App;
