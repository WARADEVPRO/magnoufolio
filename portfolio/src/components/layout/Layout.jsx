import { ThemeProvider } from '../context/ThemeContext';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
