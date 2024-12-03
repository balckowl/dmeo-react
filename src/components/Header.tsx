export default function Header() {
  return (
    <header className="h-[80px]">
        <div className="container mx-auto px-2 flex justify-between items-center h-full">
            <h1 className="font-bold text-3xl">hello</h1>
            <ul className="flex items-center gap-2">
                <li>about</li>
                <li>blog</li>
                <li>contact</li>
            </ul>
        </div>
    </header>
  )
}
