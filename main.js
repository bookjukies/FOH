class HeaderComponent extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
    <div class="header">
        <div class="logo"><img src="./images/see.png" alt="FOH RSA"></div>
        <nav>
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./music.html"">Music</a></li>
                <li><a href=" http://www.geniusmuzik.com/search/label/FOH">Bookings</a></li>
            </ul>
        </nav>
    </div>
        `
    }
}

customElements.define(`header-component`,HeaderComponent)

class FooterComponent extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <div class="footer"><p>Powered by Drip Mall</p></div>
        `
    }
}
customElements.define(`footer_component`,FooterComponent)
