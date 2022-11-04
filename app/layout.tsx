import { ReactNode } from 'react';
import '@/styles/globals.css';

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My projects</title>
            </head>
            <body>{children}</body>
        </html>
    );
}
