import './App.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Newsapi from './components/Newsapi';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';

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
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' Component={Newsapi}></Route>
        <Route path='/sports' Component={Newsapi}></Route>
        <Route path='/business' Component={Newsapi}></Route>
        <Route path='/entertainment' Component={Newsapi}></Route>
      </Routes>
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
