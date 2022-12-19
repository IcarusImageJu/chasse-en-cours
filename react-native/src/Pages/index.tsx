import type { FC } from "react"
import { NativeRouter, Route, Routes } from "react-router-native"
import Home from "./Home"

const AppRouter:FC = () => {
    return <NativeRouter>
        <Routes>
            <Route path="/" element={<Home />}>

            </Route>
            </Routes>
    </NativeRouter>
}

export default AppRouter