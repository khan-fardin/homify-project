import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import LoadingPage from "../Pages/LoadingPage";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import FindYourRoom from "../Pages/FindYourRoom";
import BrowseList from "../Pages/BrowseList";
import MyListing from "../Pages/MyListing";
import PostDetail from "../Pages/PostDetail";
import PrivateRoutes from "../provider/PrivateRoutes";
import UpdateFindRoom from "../Pages/UpdateFindRoom";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: HomeLayout,
            errorElement: <ErrorPage />,
            HydrateFallback: LoadingPage,
            children: [
                {
                    index: true,
                    path: '/',
                    loader: () => fetch('https://ph-assignment10.vercel.app/featured-posts'),
                    Component: Home,
                },
                {
                    path: '/add-to-find',
                    element: <PrivateRoutes>
                        <FindYourRoom />
                    </PrivateRoutes>,
                },
                {
                    path: '/update-find-room/:id',
                    loader: ({ params }) => fetch(`https://ph-assignment10.vercel.app/posts/${params.id}`),
                    element: <PrivateRoutes>
                        <UpdateFindRoom />
                    </PrivateRoutes>,
                },
                {
                    path: '/browse-listing',
                    loader: () => fetch('https://ph-assignment10.vercel.app/posts'),
                    Component: BrowseList,
                },
                {
                    path: '/my-listing',
                    loader: () => fetch('https://ph-assignment10.vercel.app/posts'),
                    element: <PrivateRoutes>
                        <MyListing />
                    </PrivateRoutes>,
                },
                {
                    path: '/post-detail/:id',
                    loader: ({ params }) => fetch(`https://ph-assignment10.vercel.app/posts/${params.id}`),
                    element: <PrivateRoutes>
                        <PostDetail />
                    </PrivateRoutes>,
                },
                {
                    path: '/login',
                    Component: Login,
                },
                {
                    path: '/signup',
                    Component: SignUp,
                },
            ],
        },
    ]
);
