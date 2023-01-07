const Footer = () => {
    return (
        <footer>
<h5>KlimaTossen NPO</h5>
<p>Adresse</p>
<h5>SAMARBEJDSPARTNERE:</h5>
<a href="title">#</a>
<a href="title">#</a>
<h2>Ja tak! Jeg vil gerne høre mere.</h2>
<form action="" method="post">
    <input type="text" name="" id="" />
    <input type="text" />
    <input type="email" name="" id="" />
    <input type="tel" name="" id="" />

    <label htmlFor="samtale">Få en samtale</label>
    <input type="checkbox" name="samtale" id="" />

    <label htmlFor="newsletter">Modtaqg Nyhedsbrev</label>
    <input type="checkbox" name="newsletter" id="" />

    <button type="submit">Send</button>

    <img src={require("../../Images/KT-Logo.png")} alt="" />
</form>
        </footer>
    )
}

export default Footer