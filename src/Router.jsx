import { Routes, Route } from "react-router-dom";
import { Detail, EditBook, IndexList, ListTasks, Signup } from "./template";

const Router = () => {
    return (
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/home" element={<IndexList />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/edit" element={<EditBook />} />
                <Route path="/tasks" element={<ListTasks />} />
            </Routes>
    )
}

export default Router