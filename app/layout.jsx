// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Zina Tech Global',
  description: 'Business and mobile phone repair, motherboard engineering, social media agency, affiliate marketing, digital marketing',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
