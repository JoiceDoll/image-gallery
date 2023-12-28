import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../shared/css/globals.css";
import "../shared/css/globalStyled.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image Gallery",
  description: "A image upload gallery project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
