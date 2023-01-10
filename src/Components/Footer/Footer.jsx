const Footer = () => {
    return (
        <footer>
            <div>
<h5>KlimaTossen NPO</h5>
<p>Vesterbrogade 92</p>
<p>9000 Aalborg</p>
<p><a href="mailto:info@klima-tossen.dk">info@klima-tossen.dk</a></p>
<p><a href="tel:99223344">9922 3344 </a> (Åben man - fre: 08.00 - 16.00)</p>
<h5>SAMARBEJDSPARTNERE:</h5>
<a href="https://www.dn.dk/">https://www.dn.dk/</a>
<a href="http://www.miljoeportal.dk">http://www.miljoeportal.dk</a>
<img id="bottomImg1" src={require("../../Images/KT-Logo.png")} alt="" />
</div>
<form action="" method="post">
    <h2>Ja tak! Jeg vil gerne høre mere.</h2>
    <input type="text" name="" id="" placeholder="Fulde navn" />
    <input type="text" placeholder="Hjem by"/>
    <input type="email" name="" id="" placeholder="Email adresse" />
    <input type="tel" name="" id="" placeholder="Telefon nummer" />

    <label htmlFor="samtale">Få en samtale <input type="checkbox" name="samtale" id="" /></label>
    

    <label htmlFor="newsletter">Modtag Nyhedsbrev<input type="checkbox" className="checkbox" name="newsletter" id="" /></label>
    

    <button type="submit">Send</button>

    
</form>
<img id="bottomImg2" src={require("../../Images/KT-Logo.png")} alt="" />
        </footer>
    )
}

export default Footer