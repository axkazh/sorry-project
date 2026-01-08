import "./globals.css";

export const metadata = {
  title: "Sorry Kazama",
  description: "A cute apology project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}