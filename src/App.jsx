import { BrowserRouter , Route , Routes } from "react-router-dom";

//Components
import EbikeDetails from "./pages/EbikeDetails";
import DefaultLayout from "./Layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import CompareList from "./pages/CompareList";

import { GlobalContextProvider } from "./contexts/GlobalContext";

export default function App(){
  return(

    <GlobalContextProvider>
    <BrowserRouter>

        <Routes>

            <Route element={<DefaultLayout />}>

                <Route path="/" element ={<HomePage /> } />
                <Route path="/ebikes/:id" element={<EbikeDetails/>} />
                <Route path="/compare" element={<CompareList />} />

            </Route>
        </Routes>
    
    </BrowserRouter>
    </GlobalContextProvider>
  )
}