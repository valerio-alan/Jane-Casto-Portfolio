import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "./pages/HomePage"
import NoPage from "./pages/NoPage"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='*' element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}