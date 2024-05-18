import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {BoardAdd} from "./BoardAdd.jsx";
import {BoardEdit} from "./BoardEdit.jsx";
import {BoardList} from "./BoardList.jsx";

// 경로 / 생략 가능
const router = createBrowserRouter([{
        path: "/add",
        element: <BoardAdd/>,
    }, {
        path: "/edit",
        element: <BoardEdit/>,
    },{
        path: "list",
        element: <BoardList/>
    },{
        path:"/about",
        element:<div>해당 게시글 관련 페이지</div>
    },{
        path:"/search",
        element:<div>검색 페이지</div>},{
    },{
        path:"/home",
        element:<div>메인 페이지</div>
    }, {
        path:"/board",
        children:[
            {
                path: "write",
                element: <div>게시글 작성하기</div>
            },
            {
                path: "edit",
                element: <div>게시글 수정하기</div>
            }
            ]
    }
]);


function App(props) {
    return <RouterProvider router={router} />
}

export default App;
