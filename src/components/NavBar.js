export default function NavBar() {
    return (
        <div class="navbar">
    <div class="navbar__container">
        <div class="navbar__container__left">
            <a href=""> <ion-icon name="logo-instagram" /> </a>
            <div class="navbar__container__left__rect"></div>
            <img src="img/logotype_instagram.svg" alt="" />
        </div>

        <div class="navbar__container__searchbox">
            <div class="navbar__container__searchbox__rect">
                <div>Pesquisar</div>
            </div>
            
        </div>
        <div class="navbar__container_right">
            <a href=""> <ion-icon name="paper-plane-outline"></ion-icon> </a>
            <a href=""> <ion-icon name="heart-outline"></ion-icon> </a>
            <a href=""> <ion-icon name="compass-outline"></ion-icon> </a>
            <a href=""> <ion-icon name="person-outline"></ion-icon> </a>
        </div>
    </div>
  </div>
    );

}
