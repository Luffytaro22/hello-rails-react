import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from "./greeting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App