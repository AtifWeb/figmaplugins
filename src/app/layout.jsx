import "./globals.css";

export const metadata = {
  title: "Figma Plugins",
  description: "Figma Plugins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/img/favicon.svg" />
      <body>{children}</body>
    </html>
  );
}
