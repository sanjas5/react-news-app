import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NewsList from "./components/news/lists/NewsList";
import GuardianList from "./components/news/lists/GuardianList";
import NYtimesList from "./components/news/lists/NYtimesList";
import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/landingPage/navbar/Navbar";
import Background from "./components/landingPage/background/Background";
import Favorites from "./components/favorites/Favorites";
import ErrorBoundary from "./utils/helperFunctions/errorHandlers";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Navbar />
        <Background playStatus={false} heroCount={0} />
        <Routes>
          <Route path="*" element={<LandingPage />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/guardian-news" element={<GuardianList />} />
          <Route path="/new-york-times-news" element={<NYtimesList />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
