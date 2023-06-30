import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import EventLayout from "./components/Layout/EventLayout";
import EventList, {EventLoder} from "./pages/Event/EventList";
import EventDetails, {LoadEvent} from "./pages/Event/EventDetails";
import EventAddEdit from "./pages/Event/EventAddEdit";


/* ROUTER START */

const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout />,
    errorElement:<ErrorPage />,
    children:[
      {
        index: true,
        element:<HomePage />
      },
      {
        path:"event",
        element:<EventLayout/>,
        children:[
          {
            index:true,
            element:<EventList />,
            loader: EventLoder // 0. Before loading page, React see is any data to load(doesn't know if it take time or not)
          },
          {
            path:":eventId",
            id:"event-details",
            loader: LoadEvent,
            children:[
              {
                index:true,
                element:<EventDetails />
              },
              {
                path:"edit",
                element: <EventAddEdit />
              },

            ]
          },
          {
            path:"new",
            element:<EventAddEdit />
          }
        ]
      }
    ]

  }
])

/* ROUTER END */

function App() {
  return <RouterProvider router={router} />
}

export default App;
