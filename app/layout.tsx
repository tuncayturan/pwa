// app/layout.tsx
import "./globals.css";
import SwRegister from "./sw-register";


export const metadata = {
  title: "My PWA",
  description: "Next.js Progressive Web App",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#317EFB" />
        <link rel="icon" href="/icons/icon-192.png" />
      </head>
      <body>
        <SwRegister />
        {children}
      </body>
    </html>
  );
}
