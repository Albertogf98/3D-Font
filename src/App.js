import { Route, Routes } from "react-router-dom";
import PublicLayout from "./layaouts/PublicLayout";
import AuthLayout from "./layaouts/AuthLayout";

import LetteringCanvasComponent from "./pages/canvas/LetteringCanvasComponent";
import FormComponent from "./pages/form/FormPage";

import './styles/app.css';
import CorporateLetters from "./pages/dash/CorporateLetters";

const App = () => (
    <Routes>
        <Route path="/" element={<PublicLayout title={"Título"}/>}>
        <Route
          path={'/select-corportate-letters-type'}
          element={<CorporateLetters />}
        />
        <Route
          path={'/'}
          element={<FormComponent />}
        />
        </Route>
        <Route element={<AuthLayout />}>
        <Route 
          path={"/letters-corporate"}
          element={<LetteringCanvasComponent />} 
        />
        </Route>
    </Routes>
);

export default App;