export default function Header() {
    return (
        <header>
            <nav> 
                <div className="left-header">
                    <a href="">
                        <img src="./public/logo.png" alt="" />
                    </a>
                </div>
                <div className="right-header">
                    <a href="#about">
                        Про меня
                    </a>
                    <a href="#projects">
                        Проекты
                    </a>
                    <a href="#contacts">
                        Контакты
                    </a>
                </div>
            </nav>
        </header>
    )
}
