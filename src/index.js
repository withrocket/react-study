import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const App = () => {
  return <div>Hello React World.</div>;
};

root.render(<App />);
