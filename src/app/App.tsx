import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@layouts/MainLayout';
import { HomePage } from '@pages/index';

/**
 * App Component - Main application router
 */
function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes here as the app grows */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
