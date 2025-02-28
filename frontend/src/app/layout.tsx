// src/app/layout.tsx
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main> {/* This will render the content of each page */}
      </body>
    </html>
  )
}
