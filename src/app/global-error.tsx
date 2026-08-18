"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error("[global-error]", error.digest ?? "", error.message);
  return (
    <html lang="en-AU">
      <body style={{ fontFamily: "system-ui, sans-serif", textAlign: "center", padding: "5rem 1rem" }}>
        <h1>Something went wrong</h1>
        <p>The site hit an unexpected error. Please try again.</p>
        <button onClick={reset} style={{ padding: "0.75rem 1.5rem", cursor: "pointer" }}>
          Try again
        </button>
      </body>
    </html>
  );
}
