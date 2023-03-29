import { Route, Routes } from "react-router-dom";
import PublicLayout from "./layaouts/PublicLayout";
import AuthLayout from "./layaouts/AuthLayout";

import LetteringCanvasComponent from "./pages/canvas/LetteringCanvasComponent";
import FormComponent from "./pages/form/FormPage";

import './styles/app.css';

const App = () => (
    <Routes>
        <Route path="/" element={<PublicLayout title={"3D Demo"}/>}>
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