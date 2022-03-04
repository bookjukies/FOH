class HeaderComponent extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
    <div class="header">
        <div class="logo"><img src="./images/see.png" alt="FOH RSA"></div>
        <nav>
            <ul>
                <li><a href="./music.html"">Music</a></li>
                            <li><a href=" http://www.geniusmuzik.com/search/label/FOH">Bookings</a></li>
                <li><a href="http://www.geniusmuzik.com/search/label/FOH">Merch</a></li>
            </ul>
        </nav>
    </div>
        `
    }
}

customElements.define(`header-component`,HeaderComponent)