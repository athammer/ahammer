// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          {/* <Nav /> */}
          <Suspense>
            <div class="max-w-5xl m-auto mt-4 sm:mt-16 text-lg text-left">
              <Nav />
              {props.children}
            </div>
          </Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
