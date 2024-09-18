import { Inter } from 'next/font/google'
import './globals.scss'
import { Navbar } from '@/app/ui/Navbar'
import { QuestionProvider } from '@/app/lib/QuestionProvider.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Quiz Launch Training',
    description: 'Create by Launch Training',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script defer data-domain="launch.training" src="https://analytics.grobmeier.de/js/plausible.js"></script>
            </head>
            <body className={inter.className}>
                <QuestionProvider>
                    <Navbar />
                    {children}
                </QuestionProvider>
            </body>
        </html>
    )
}
