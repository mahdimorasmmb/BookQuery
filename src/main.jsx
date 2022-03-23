import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { preset } from "@rebass/preset";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={preset}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
