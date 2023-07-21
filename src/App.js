import './App.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Newsapi from './components/Newsapi';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, 
      },
    },
  });
  return (
    <div className="App">
    <QueryClientProvider client={client}>
      <Newsapi />
      </QueryClientProvider>
    </div>
  );
}

export default App;
