export default function ColorSchemeToggle({ mode }: { mode: string }) {
  return (
    <>
      <h2 className="inline-flex cursor-pointer p-3 font-bold capitalize">
        {mode} Mode Colors
      </h2>
      <span id={mode} className="hidden text-sm opacity-50">
        Active
      </span>
    </>
  );
}
