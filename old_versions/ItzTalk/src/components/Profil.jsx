import { useState } from "react";
import HeaderProfil from "./components/profil/HeaderProfil";
import AsideProfil from "./components/profil/AsideProfil";
import BodyProfil from "./components/profil/BodyProfil";

function Profil(props) {
    const [onglet, setOnglet] = useState("Infos");

    return (
        <div className="profil">
            <div className="left_menu">
                <AsideProfil onglet={onglet} setOnglet={setOnglet} />
            </div>
            <div className="right_menu">
                <HeaderProfil />
                <BodyProfil onglet={onglet} />
                <div className="tabs">
                    <div className="single-tab Quantum">
                        <p>Informations</p>
                    </div>
                    <div className="single-tab Quantum">
                        <p>Favoris</p>
                    </div>
                    <div className="single-tab Quantum">
                        <p>Liste d'amis</p>
                    </div>
                    <div className="single-tab Quantum">
                        <p>Liste des messages envoyés</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profil;

<div>
    <div class="left-main">
    </div>
    <div class="right-main">
        <div class="top-nav">
            <div class="inside">
                <button type="button" class="left-menu-control desktop btn btn-link">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right-to-bracket" class="svg-inline--fa fa-arrow-right-to-bracket fa-rotate-180" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24">
                        <path fill="currentColor" d="M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"></path>
                    </svg>
                </button>
                <button type="button" class="left-menu-control mobile btn btn-link">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24">
                        <path fill="currentColor" d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"></path>
                    </svg>
                </button>
                <button type="button" class="game-switcher-control mobile btn btn-link">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rotate" class="svg-inline--fa fa-rotate " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24">
                        <path fill="currentColor" d="M449.9 39.96l-48.5 48.53C362.5 53.19 311.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.97 5.5 34.86-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c37.96 0 73 14.18 100.2 37.8L311.1 178C295.1 194.8 306.8 223.4 330.4 224h146.9C487.7 223.7 496 215.3 496 204.9V59.04C496 34.99 466.9 22.95 449.9 39.96zM441.8 289.6c-16.94-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-37.96 0-73-14.18-100.2-37.8L200 334C216.9 317.2 205.2 288.6 181.6 288H34.66C24.32 288.3 16 296.7 16 307.1v145.9c0 24.04 29.07 36.08 46.07 19.07l48.5-48.53C149.5 458.8 200.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"></path>
                    </svg>
                </button>
                <div class="left-links">
                    <a role="button" tabindex="0" href="https://discord.gg/prydwen" target="_blank" rel="noreferrer" class="discord-no-login btn btn-primary"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" class="svg-inline--fa fa-discord " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24"><path fill="currentColor" d="M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z"></path></svg> <span>Our Discord</span></a><a role="button" tabindex="0" href="https://ko-fi.com/antillar" target="_blank" rel="noreferrer" class="discord-no-login red ko-fi btn btn-primary"><div data-gatsby-image-wrapper="" class="gatsby-image-wrapper gatsby-image-wrapper-constrained"><div style="max-width:353px;display:block"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='228' width='353' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E" style="max-width:100%;display:block;position:static"></div><div aria-hidden="true" data-placeholder-image="" style="opacity:0;transition:opacity 500ms linear;background-color:#f8f8f8;position:absolute;top:0;left:0;bottom:0;right:0;object-fit:cover"></div><img width="353" height="228" data-main-image="" style="object-fit:cover;opacity:1" sizes="(min-width: 353px) 353px, 100vw" decoding="async" loading="lazy" src="/static/07bb577348aa409cc3fe65078e8bd970/73c52/kofi.webp" srcset="/static/07bb577348aa409cc3fe65078e8bd970/017c4/kofi.webp 88w,
    /static/07bb577348aa409cc3fe65078e8bd970/9f090/kofi.webp 177w,
    /static/07bb577348aa409cc3fe65078e8bd970/73c52/kofi.webp 353w" alt="Ko-Fi"><noscript><img width="353" height="228" data-main-image="" style="object-fit:cover;opacity:1" sizes="(min-width: 353px) 353px, 100vw" decoding="async" loading="lazy" src="/static/07bb577348aa409cc3fe65078e8bd970/73c52/kofi.webp" srcSet="/static/07bb577348aa409cc3fe65078e8bd970/017c4/kofi.webp 88w,
    /static/07bb577348aa409cc3fe65078e8bd970/9f090/kofi.webp 177w,
    /static/07bb577348aa409cc3fe65078e8bd970/73c52/kofi.webp 353w" alt="Ko-Fi"/></noscript></div><span>Buy us a Ko-Fi</span></a>
                </div>
            </div>
        </div>
        <div class="content hsr">
            <div class="tabs">
                <div class="single-tab Quantum active">
                    <div class="top-icon">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" class="svg-inline--fa fa-circle-info " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18">
                            <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"></path>
                        </svg>
                    </div>
                    <p>Profile</p>
                </div>
                <div class="single-tab Quantum ">
                    <div class="top-icon">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book" class="svg-inline--fa fa-book " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18">
                            <path fill="currentColor" d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"></path>
                        </svg>
                    </div>
                    <p>Review</p>
                </div>
                <div class="single-tab Quantum ">
                    <div class="top-icon">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="diagram-project" class="svg-inline--fa fa-diagram-project " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18">
                            <path fill="currentColor" d="M0 80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V96H384V80C384 53.49 405.5 32 432 32H528C554.5 32 576 53.49 576 80V176C576 202.5 554.5 224 528 224H432C405.5 224 384 202.5 384 176V160H192V176C192 177.7 191.9 179.4 191.7 180.1L272 288H368C394.5 288 416 309.5 416 336V432C416 458.5 394.5 480 368 480H272C245.5 480 224 458.5 224 432V336C224 334.3 224.1 332.6 224.3 331L144 224H48C21.49 224 0 202.5 0 176V80z"></path>
                        </svg>
                    </div>
                    <p>Build and teams</p>
                </div>
                <div class="single-tab Quantum ">
                    <div class="top-icon">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dungeon" class="svg-inline--fa fa-dungeon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18">
                            <path fill="currentColor" d="M336.6 156.5C327.3 148.1 322.6 136.5 327.1 125.3L357.6 49.18C362.7 36.27 377.8 30.36 389.7 37.63C410.9 50.63 430 66.62 446.5 85.02C455.7 95.21 452.9 110.9 441.5 118.5L373.9 163.5C363.6 170.4 349.8 168.1 340.5 159.9C339.2 158.7 337.9 157.6 336.6 156.5H336.6zM297.7 112.6C293.2 123.1 280.9 129.8 268.7 128.6C264.6 128.2 260.3 128 256 128C251.7 128 247.4 128.2 243.3 128.6C231.1 129.8 218.8 123.1 214.3 112.6L183.1 36.82C178.8 24.02 185.5 9.433 198.1 6.374C217.3 2.203 236.4 0 256 0C275.6 0 294.7 2.203 313 6.374C326.5 9.433 333.2 24.02 328 36.82L297.7 112.6zM122.3 37.63C134.2 30.36 149.3 36.27 154.4 49.18L184.9 125.3C189.4 136.5 184.7 148.1 175.4 156.5C174.1 157.6 172.8 158.7 171.5 159.9C162.2 168.1 148.4 170.4 138.1 163.5L70.52 118.5C59.13 110.9 56.32 95.21 65.46 85.02C81.99 66.62 101.1 50.63 122.3 37.63H122.3zM379.5 222.1C376.3 210.7 379.7 198.1 389.5 191.6L458.1 145.8C469.7 138.1 485.6 141.9 491.2 154.7C501.6 178.8 508.4 204.8 510.9 232C512.1 245.2 501.3 255.1 488 255.1H408C394.7 255.1 384.2 245.2 381.8 232.1C381.1 228.7 380.4 225.4 379.5 222.1V222.1zM122.5 191.6C132.3 198.1 135.7 210.7 132.5 222.1C131.6 225.4 130.9 228.7 130.2 232.1C127.8 245.2 117.3 256 104 256H24C10.75 256-.1184 245.2 1.107 232C3.636 204.8 10.43 178.8 20.82 154.7C26.36 141.9 42.26 138.1 53.91 145.8L122.5 191.6zM104 288C117.3 288 128 298.7 128 312V360C128 373.3 117.3 384 104 384H24C10.75 384 0 373.3 0 360V312C0 298.7 10.75 288 24 288H104zM488 288C501.3 288 512 298.7 512 312V360C512 373.3 501.3 384 488 384H408C394.7 384 384 373.3 384 360V312C384 298.7 394.7 288 408 288H488zM104 416C117.3 416 128 426.7 128 440V488C128 501.3 117.3 512 104 512H24C10.75 512 0 501.3 0 488V440C0 426.7 10.75 416 24 416H104zM488 416C501.3 416 512 426.7 512 440V488C512 501.3 501.3 512 488 512H408C394.7 512 384 501.3 384 488V440C384 426.7 394.7 416 408 416H488zM272 464C272 472.8 264.8 480 256 480C247.2 480 240 472.8 240 464V192C240 183.2 247.2 176 256 176C264.8 176 272 183.2 272 192V464zM208 464C208 472.8 200.8 480 192 480C183.2 480 176 472.8 176 464V224C176 215.2 183.2 208 192 208C200.8 208 208 215.2 208 224V464zM336 464C336 472.8 328.8 480 320 480C311.2 480 304 472.8 304 464V224C304 215.2 311.2 208 320 208C328.8 208 336 215.2 336 224V464z"></path>
                        </svg>
                    </div>
                    <p>MoC/PF/AS Statistics</p>
                </div>
                <div class="single-tab Quantum ">
                    <div class="top-icon">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" class="svg-inline--fa fa-chart-line " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18">
                            <path fill="currentColor" d="M64 400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64V400zM342.6 278.6C330.1 291.1 309.9 291.1 297.4 278.6L240 221.3L150.6 310.6C138.1 323.1 117.9 323.1 105.4 310.6C92.88 298.1 92.88 277.9 105.4 265.4L217.4 153.4C229.9 140.9 250.1 140.9 262.6 153.4L320 210.7L425.4 105.4C437.9 92.88 458.1 92.88 470.6 105.4C483.1 117.9 483.1 138.1 470.6 150.6L342.6 278.6z"></path>
                        </svg>
                    </div>
                    <p>Calculations</p>
                </div>
            </div>
            <div class="tab-inside active">
                <div class="mobile-header Quantum">
                    <p>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" class="svg-inline--fa fa-circle-info " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18">
                            <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"></path>
                        </svg>
                        Profile
                    </p>
                </div>
                <div class="content-header Quantum">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" class="svg-inline--fa fa-square " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18">
                        <path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path>
                    </svg> 
                    Skills
                </div>
            </div>
        </div>
    </div>
</div>