export const metadata = {
  title: "Sorry Kazama",
  description: "A sorry project",
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