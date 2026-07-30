function SectionHeading({ id, title }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px flex-1 bg-primary/15" aria-hidden="true" />
      <h2
        id={id}
        className="max-w-[70%] text-center text-xs font-semibold uppercase tracking-[0.24em] text-tertiary/75"
      >
        {title}
      </h2>
      <span className="h-px flex-1 bg-primary/15" aria-hidden="true" />
    </div>
  );
}

export default SectionHeading;
