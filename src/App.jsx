import { BrowserRouter , Route , Routes } from "react-router-dom";

//Components
import EbikesList from "./pages/EbikesLists";
import EbikeDetails from "./pages/EbikeDetails";
import DefaultLayout from "./Layouts/DefaultLayout";

export default function App(){
  return(
    <BrowserRouter>

        <Routes>

            <Route element={<DefaultLayout />}>

                <Route path="/" element ={<EbikesList/>} />
       
                <Route path="/:id" element={<EbikeDetails/>} />

            </Route>
        </Routes>
    
    </BrowserRouter>
  )
}