// components/Spinner.tsx
export default function Spinner() {
  return (
    <div
      className={`${className} animate-spin rounded-full border-2 border-current border-t-transparent text-white`}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
