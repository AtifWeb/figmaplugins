import "./globals.css";

export const metadata = {
  title: "Figma Plugins",
  description: "Figma Plugins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/img/favicon.svg" />

      <link
        href="
https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css
"
        rel="stylesheet"
      />

      <body>
        {children}

        <script
          src="
https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js
"
        ></script>
      </body>
    </html>
  );
}
