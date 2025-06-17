import { BrowserRouter , Route , Routes } from "react-router-dom";

//Components
import EbikeDetails from "./pages/EbikeDetails";
import DefaultLayout from "./Layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import CompareList from "./pages/CompareList";

import { CompareProvider } from "./contexts/CompareContext";

export default function App(){
  return(

    <CompareProvider>
    <BrowserRouter>

        <Routes>

            <Route element={<DefaultLayout />}>

                <Route path="/" element ={<HomePage /> } />
                <Route path="/ebikes/:id" element={<EbikeDetails/>} />
                <Route path="/compare" element={<CompareList />} />

            </Route>
        </Routes>
    
    </BrowserRouter>
    </CompareProvider>
  )
}