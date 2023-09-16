import './globals.css'


export const metadata = {
  title: 'todo-list',
  description: 'Create your list',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
