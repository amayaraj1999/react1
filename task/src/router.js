import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./about";
import App from "./App";
import Greetings from "./Greetings";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'aboutus', element: <Aboutus/> },
    { path: 'greeting/:name', element: <Greetings/>}
]);

export default router;