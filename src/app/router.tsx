import { ErrorPage } from "@/pages/ErrorPage/ui/ErrorPage";
import { Landing } from "@/pages/Landing/ui/Landing";
import { SingleGamePage } from "@/pages/SingleGamePage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/single-game",
        element: <SingleGamePage />,
        errorElement: <ErrorPage />,
    }
])