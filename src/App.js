import "./App.css";
import { useLocation } from "react-router-dom";
import Navbar from "./Components/Login/Navbar";

import { AuthProvider } from "./Components/Contexts/AuthContext";
import CMSRoutes from "./routes/cms-routes";


function App() {
  const show = useLocation();
  return (
    <>
      <AuthProvider>
      <div>{show.pathname !== "/login" && <Navbar />}</div>
        <div className="App">
          <CMSRoutes />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
