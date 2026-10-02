function Header(){
    return(
        <header className="flex items-center justify-between px-6 py-5 max-w-6x1 mx-auto">
            <h1 className="text-x1 font-bold">JEFF KIMANI MAINA</h1>
            <nav className="flex gap-6 text-sm">
                <a href="#home" className="hover:text-blue-600">
                    Home
                </a>

                <a href="#about" className="hover:text-brown">About</a>

                <a href="#skills" className="hover:text-brown">Skills</a>

                <a href="#projects"></a>

            </nav>

        </header>
    )
}

export default Header