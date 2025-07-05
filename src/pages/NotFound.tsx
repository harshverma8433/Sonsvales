import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center p-8 rounded-xl shadow-lg bg-card">
        <h1 className="text-5xl font-extrabold mb-4 text-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
        <a
          href="/"
          className="text-secondary hover:text-primary underline font-semibold transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
