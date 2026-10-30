import './globals.scss'
import { Navbar } from '@/app/ui/Navbar'


export const metadata = {
    title: 'Quiz Launch Training',
    description: 'Create by Launch Training',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script defer data-domain="grobmeier.solutions" src="https://analytics.grobmeier.de/js/plausible.js"></script>
            </head>
            <body>
                
                    <Navbar />
                    {children}
                
            </body>
        </html>
    )
}
