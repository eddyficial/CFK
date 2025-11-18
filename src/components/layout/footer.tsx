export default function Footer() {
  return (
    <footer className="py-6 w-full">
      <div className="container text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Chauffeurs Kenya Freight. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
