import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Posts } from "./Posts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <h1>Blog &apos;em Ipsum</h1>
      <Posts />
    </div>
    <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
