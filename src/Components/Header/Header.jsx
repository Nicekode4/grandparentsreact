import Navigation from "../Navigation/Navigation"

const Header = () => {
    return (
        <header>
            <img src={require("../../Images/KT-Logo.png")} alt="" />
            <article>
                <div></div>
                <div>
                    <p>"Der er rigtigt at vi hver især kun kan bidrage lidt til den samlede løsning"</p>
                    <p>"Lige så rigtigt er det at vi hver især bidrager en smule til det"</p>
                </div>
                <Navigation />
            </article>
        </header>
    )
}

export default Header