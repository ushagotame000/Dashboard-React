import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Data from "@pages/Data";
import AppLayout from "./layout/AppLayout";
import NotFound from "@pages/NotFound";
const App = () => {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1">
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<Data />} />
             <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
