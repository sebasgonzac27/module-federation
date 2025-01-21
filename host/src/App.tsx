import React from "react";
import "./App.css";

const Header = React.lazy(() => import("remote/Header"));

function App() {
  return (
    <div>
      <h1>Host</h1>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Header />
      </React.Suspense>
    </div>
  );
}

export default App;
