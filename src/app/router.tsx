import { ErrorPage } from "@/pages/ErrorPage/ui/ErrorPage";
import { Landing } from "@/pages/Landing/ui/Landing";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/game",
        element: <div>Game</div>,
        errorElement: <ErrorPage />,
    }
])