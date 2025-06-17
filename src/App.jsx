import { BrowserRouter , Route , Routes } from "react-router-dom";

//Components
import EbikeDetails from "./pages/EbikeDetails";
import DefaultLayout from "./Layouts/DefaultLayout";
import HomePage from "./pages/HomePage";

export default function App(){
  return(
    <BrowserRouter>

        <Routes>

            <Route element={<DefaultLayout />}>

                <Route path="/" element ={<HomePage /> } />
                <Route path="/ebikes/:id" element={<EbikeDetails/>} />

            </Route>
        </Routes>
    
    </BrowserRouter>
  )
}