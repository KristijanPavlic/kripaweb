export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="text-center bg-[var(--color-primary)] py-4">
        <span className="text-md text-[var(--color-background)]">
          &copy; {currentYear} KriPa Web. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
