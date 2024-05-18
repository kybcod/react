import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([{
    path: "/add",
    element: <div>글 작성 페이지</div>,
}, {
    path: "/edit",
    element: <div>글 수정 페이지</div>,
},{
    path: "list",
    element: <div>글 목록 페이지</div>
},{
    path:"/about",
    element:<div>해당 게시글 관련 페이지</div>
},{
    path:"/search",
    element:<div>검색 페이지</div>},{
},{
    path:"/home",
    element:<div>메인 페이지</div>
}]);


function App(props) {
    return <RouterProvider router={router} />
}

export default App;
