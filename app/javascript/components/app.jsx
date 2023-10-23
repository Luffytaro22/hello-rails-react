import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/greetings" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App