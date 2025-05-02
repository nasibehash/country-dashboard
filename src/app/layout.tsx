import ReactQueryProvider from '@/providers/ReactQueryProvider';

import './globals.css';
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
       <main className="flex flex-row">
           <Sidebar />
           <ReactQueryProvider>{children}</ReactQueryProvider>
       </main>
        </body>
        </html>
    );
}
