import "./globals.css";

export const metadata = {
  title: "Sorry Kazama",
  description: "A heartfelt apology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}