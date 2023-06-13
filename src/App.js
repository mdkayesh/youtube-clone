import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/Layouts/RootLayout";
import { Feed, VideoDetails } from "./components";
import SearchResult from "./components/Search/SearchResult";
import Channel from "./components/Channel/Channel";
import { About, Home } from "./components/Channel/pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Feed />} />
        <Route path="watch/:videoId" element={<VideoDetails />} />
        <Route path="search/:searchQuery" element={<SearchResult />} />
        <Route path="channel/:channelId" element={<Channel />}>
          <Route index element={<Home />} />
          <Route path="" element={<Home />} />
          <Route path="About" element={<About />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
