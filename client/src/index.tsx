import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from "./pages/LandingPage";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<LandingPage />);
