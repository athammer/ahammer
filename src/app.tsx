// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { MetaProvider } from "@solidjs/meta";

import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";

export default function App() {
  return (
    <Router
      base={import.meta.env.SERVER_BASE_URL}
      root={(props) => (
        <>
          {/* <Nav /> */}
          <Suspense>
            <MetaProvider>
              <div class="max-w-5xl m-auto my-8 sm:mt-16 text-lg p-4 text-left">
                <Nav />
                {props.children}
              </div>
            </MetaProvider>
          </Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
