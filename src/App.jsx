import { Routes, Route } from "react-router-dom";
import { BooksList } from "./BooksList";
import { CreateBook } from "./CreateBook";
import { UpdateBook } from "./UpdateBook";
import {NavBar} from "./shared/NavBar";

function App() {
  return (
   <>
     <NavBar/>
     <Routes>
       <Route path="/" element={<BooksList />} />
       <Route path="create-book" element={<CreateBook />} />
       <Route path="update-book/:id" element={<UpdateBook />} />
     </Routes>
   </>
  );
}

export default App;
