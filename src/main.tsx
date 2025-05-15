import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "../output.css";

// Check for dark mode preference
const savedDarkMode = localStorage.getItem("darkMode") === "true";
if (savedDarkMode) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

createRoot(document.getElementById("root")!).render(<App />);
