export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>&copy; {currentYear} Dobar Health Consultants. All rights reserved.</p>
    </footer>
  );
}
