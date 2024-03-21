import { Inter } from 'next/font/google'
import './globals.scss'
import '@smastrom/react-rating/style.css'
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
            <body className={inter.className}>
                <QuestionProvider>
                    <Navbar />
                    {children}
                </QuestionProvider>
            </body>
        </html>
    )
}
