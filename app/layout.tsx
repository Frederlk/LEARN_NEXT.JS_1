import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <title>Next 13</title>
            </head>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
