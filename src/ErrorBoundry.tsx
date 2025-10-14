import { isRouteErrorResponse, Link, useRouteError } from "react-router";

const ErrorBoundary = () => {
  const error = useRouteError();

  let status: string | undefined;
  let message = "Oops!";
  let details = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    status = error.status.toString();
    message = error.status === 404 ? "Page not found" : "Error";
    details =
      error.status === 404
        ? "Sorry, we couldn't find the page you're looking for."
        : error.statusText || details;
  }

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-2xl sm:text-4xl font-semibold text-accent-color">{status}</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-balance text-heading-color font-heading sm:text-7xl ">
          {message}
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty sm:text-xl/8 text-muted-color">
          {details}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 bg-accent hover:bg-accent-2"
          >
            Take me out of here!
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorBoundary;
