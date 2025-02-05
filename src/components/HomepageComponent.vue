<template>
    <div>

        <div class="container">
            <Topbar :menuOpen="menuOpen" @toggle-menu="toggleMenu" />
        </div>

        <div class="homescreen">
            <div class="center">
                <div class="top-center">
                    <img src="../assets/noxlogo.png" alt="Logo">
                    <p>Olá, sou o NoxDev 👋</p>
                </div>

                <div class="body-center">
                    <h1>
                        Transformamos ideias em websites <span>profissionais</span> para destacar e impulsionar o seu
                        <span>negócio</span> Garanta uma presença digital única com <span>quem entende do
                            assunto</span>.
                    </h1>
                </div>

                <div class="bottom-center">
                    <button class="btn2"><span class="other">Explorar Soluções</span></button>
                </div>
            </div>
        </div>

        <div class="line"></div>


        <div class="Cards">

            <div class="top">
                <h1>Nossos projetos têm como <span>essência</span> a <span>excelência</span>!</h1>
            </div>

            <div class="cards-list">

                <div class="card">
                    <div class="icon-card">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#8AC83A" stroke-linecap="round" stroke-linejoin="round" width="40" height="40" stroke-width="2">
                            <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        </svg>
                        <p>UX & UI Design</p>
                    </div>

                    <div class="text">
                        <p>Criamos experiências visuais únicas para destacar sua marca.</p>
                    </div>
                </div>

                <div class="card">
                    <div class="icon-card">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#8AC83A" stroke-linecap="round" stroke-linejoin="round" width="40" height="40" stroke-width="2">
                            <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z"></path>
                            <path d="M11 4h2"></path>
                            <path d="M12 17v.01"></path>
                        </svg>
                        <p>Web & Mobile</p>
                    </div>

                    <div class="text">
                        <p>Desenvolvemos sites e aplicativos personalizados que entregam funcionalidade e design.</p>
                    </div>
                </div>

                <div class="card">
                    <div class="icon-card">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#8AC83A" stroke-linecap="round" stroke-linejoin="round" width="40" height="40" stroke-width="2">
                            <path d="M3 19l18 0"></path>
                            <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"></path>
                        </svg>
                        <p>Designer Criativo</p>
                    </div>

                    <div class="text">
                        <p>Sua identidade visual trabalhada com exclusividade e criatividade.</p>
                    </div>
                </div>

                <div class="card">
                    <div class="icon-card">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#8AC83A" stroke-linecap="round" stroke-linejoin="round" width="40" height="40" stroke-width="2">
                            <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
                        </svg>
                        <p>Desenvolvimento</p>
                    </div>

                    <div class="text">
                        <p>Acompanhe cada etapa da criação até a entrega final.</p>
                    </div>
                </div>

            </div>

        </div>

        <div class="about">
            
            <div class="como">
                <h1>Como funciona nosso <span>processo</span>?</h1>
                <p>Conheça nossas etapas de trabalho, cuidadosamente planejadas:</p>
            </div>

            <div class="tags">
                
                <div class="tag">
                    <p>01</p>
                    <h1> •  Apresentação da ideia.</h1>
                </div>
                
                <div class="tag">
                    <p>02</p>
                    <h1> •  Negociação.</h1>
                </div>
                
                <div class="tag">
                    <p>03</p>
                    <h1> •  Prototipagem.</h1>
                </div>
                
                <div class="tag">
                    <p>04</p>
                    <h1> •  Aprovação e pagamento.</h1>
                </div>
                
                <div class="tag">
                    <p>05</p>
                    <h1> •  Entrega final.</h1>
                </div>
                
            </div>
            
        </div>

        <div class="projects-list">

            <div class="desc-projetct">
                    <h1>Explore <span>nossos</span> Templates e <span>Personalize Seu Site</span>!</h1>
            </div>


            <div class="mutiple">

                <div class="card-project">

                <div class="cards-project">
                        <button class="btn3"><span class="other2">Em breve...</span></button>
                    </div>

                    <div class="button">
                        <button class="btn4">Solicitar</button>
                    </div>
                </div>

                <div class="card-project">

                    <div class="cards-project">
                        <button class="btn3"><span class="other2">Em breve...</span></button>
                    </div>

                    <div class="button">
                        <button class="btn4">Solicitar</button>
                    </div>
                </div>
                
                <div class="card-project">

                    <div class="cards-project">
                        <button class="btn3"><span class="other2">Em breve...</span></button>
                    </div>

                    <div class="button">
                        <button class="btn4">Solicitar</button>
                    </div>
                </div>
                
                <div class="card-project">

                    <div class="cards-project">
                        <button class="btn3"><span class="other2">Em breve...</span></button>
                    </div>

                    <div class="button">
                        <button class="btn4">Solicitar</button>
                    </div>
                </div>
                
                <div class="card-project">

                    <div class="cards-project">
                        <button class="btn3"><span class="other2">Em breve...</span></button>
                    </div>

                    <div class="button">
                        <button class="btn4">Solicitar</button>
                    </div>
                </div>

            </div>
            
        </div>

        <div class="conecte">

            <div class="ladoa">
                <img src="../assets/img.png" alt="">
            </div>

            <div class="ladob">
                
                <div class="ladotitle">
                    <h1><span>Conecte-se</span> Conosco.</h1>
                </div>

                <div class="cards-lado">
                    <div class="card-lado">
                        <button class="btnlado"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#8AC83A" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75"></path>
                            <path d="M12 7v2"></path>
                            <path d="M12 15v2"></path>
                        </svg>Orçamento</button>
                    </div>

                    <div class="card-lado">
                        <button class="btnlado"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#8AC83A" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75"></path>
                            <path d="M12 7v2"></path>
                            <path d="M12 15v2"></path>
                        </svg>Sobre nós...</button>
                    </div>

                    <div class="card-lado">
                        <button class="btnlado"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#8AC83A" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75"></path>
                            <path d="M12 7v2"></path>
                            <path d="M12 15v2"></path>
                        </svg>Instagram</button>
                    </div>

                    <div class="card-lado">
                        <button class="btnlado"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#8AC83A" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75"></path>
                            <path d="M12 7v2"></path>
                            <path d="M12 15v2"></path>
                        </svg>Tiktok</button>
                    </div>
                </div>
                
            </div>
            
        </div>

        <div class="rodape"></div>

    </div>
</template>

<script>
import Topbar from './AppTopbar.vue';

export default {
    components: {
        Topbar,
    },
    data() {
        return {
            menuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
    },
};
</script>


<style scoped>

.conecte{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 95%;
    margin-top: 200px;
}

.ladoa{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ladoa img{
    width: 80%;
}

.ladob{
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}

.btnlado{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 28px;
    background-color: #1E1E1E;
    border: 2px solid #292929;
    color: white;
    margin-top: 20px;
    border-radius: 5px;
    width: 18em;
    text-align: start;
    font-size: 18px;
    transition: all 0.3s ease;
}

.btnlado svg{
    margin-right: 8px;
}

.btnlado:hover{
    border: 2px solid #8AC83A;
}

.cards-lado{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
}

.ladotitle{
    font-size: 20px;
    font-weight: 100;
    color: white;
}










.projects-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 50px;
    color: white;
    margin-top: 100px;
}

.mutiple {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
    width: 100%;
}

.card-project {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1E1E1E;
    border: 2px solid #292929;
    padding: 20px;
    border-radius: 5px;
}

.desc-projetct h1 {
    font-size: 28px;
    text-align: center;
    font-weight: 100;
    width: 90%; 
    margin-bottom: 20px;
}



.container {
    padding: 20px;
}

.homescreen {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88vh;
    color: white !important;
    margin: 0;
}

.homescreen img {
    max-width: 100%;
    height: auto;
}


.top-center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.top-center img {
    width: 150px;
}

.top-center p {
    margin-top: 5px;
    font-size: 13px;
}

.body-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.body-center h1 {
    width: 35%;
    text-align: center;
}

@media (max-width: 768px) {
    .body-center h1 {
        font-size: 1.5rem;
        line-height: 1.4;
    }
}

.top-center img, .body-center h1 {
    max-width: 100%; /* Permite que caiba na tela */
}


span {
    color: #8AC83A;
}

.bottom-center {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10px;
}

.btn4 {
    background-color: #1E1E1E;
    border: 1px solid #292929 !important;
    padding: 15px;
    color: white;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    animation: shine 3s infinite linear;
    width: 100%;
}

.button{
    width: 100%;
}

.btn2 {
    background-color: #1E1E1E;
    border: 1px solid #292929 !important;
    padding: 15px;
    color: white;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    animation: shine 3s infinite linear;
}

.btn2:hover {
    border: 2px solid #8AC83A;
}

.btn3 {
    background-color: transparent;
    border: transparent;
    padding: 15px;
    color: white;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    animation: shine 3s infinite linear;
}


.other2 {
    padding: 20px;
    color: #fff;
    background: linear-gradient(to right, #9f9f9f 0, #fff 10%, #868686 20%);
    background-position: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s infinite linear;
    animation-fill-mode: forwards;
    -webkit-text-size-adjust: none;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    white-space: nowrap;
    font-family: "Poppins", sans-serif;
}

.other {
    padding: 20px;
    color: #fff;
    background: linear-gradient(to right, #9f9f9f 0, #fff 10%, #868686 20%);
    background-position: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s infinite linear;
    animation-fill-mode: forwards;
    -webkit-text-size-adjust: none;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    white-space: nowrap;
    font-family: "Poppins", sans-serif;
}

@-moz-keyframes shine {
    0% {
        background-position: 0;
    }

    60% {
        background-position: 180px;
    }

    100% {
        background-position: 180px;
    }
}

@-webkit-keyframes shine {
    0% {
        background-position: 0;
    }

    60% {
        background-position: 180px;
    }

    100% {
        background-position: 180px;
    }
}

@-o-keyframes shine {
    0% {
        background-position: 0;
    }

    60% {
        background-position: 180px;
    }

    100% {
        background-position: 180px;
    }
}

@keyframes shine {
    0% {
        background-position: 0;
    }

    60% {
        background-position: 180px;
    }

    100% {
        background-position: 180px;
    }
}

@media (max-width: 768px) {
    .homescreen {
        flex-direction: column;
        align-items: center;
        padding: 20px;
        height: auto;
        text-align: center;
    }

    .top-center img {
        width: 100px;
    }

    .top-center p {
        font-size: 12px;
    }

    .body-center h1 {
        font-size: 18px;
        width: 100%;
        line-height: 1.5;
    }

    .bottom-center {
        margin-top: 20px;
    }

    .btn2 {
        padding: 10px;
        font-size: 14px;
    }
}

.line {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #1E1E1E;
    border-top: 2px solid #292929;
    border-bottom: 2px solid #292929;
    padding: 50px;
    color: white !important;
}

.rodape {
    margin-top: 400px;
}

@media (max-width: 1024px) {
    .cards-list {
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }

    .card {
        margin-bottom: 20px;
        width: calc(100% - 40px); 
        max-width: 300px;
    }

    .body-center h1 {
        font-size: 24px;
        width: 90%; 
    }

    .btn2 {
        padding: 12px 20px;
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .cards-list {
        flex-direction: column;
        align-items: center;
    }

    .card {
        width: 90%;
        max-width: 280px;
    }

    .about {
        flex-direction: column;
        align-items: flex-start;
    }

    .como h1, .como p {
        text-align: center;
        width: 100%;
    }

    .tag {
        width: 100%; 
    }
}

@media (max-width: 1024px) {
    .about {
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
    }

    .como h1 {
        font-size: 36px;
        width: 90%;
        margin-bottom: 15px;
    }

    .como p {
        font-size: 18px;
        width: 85%;
        margin-bottom: 20px;
    }

    .tags {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }

    .tag {
        width: calc(100% - 40px);
        max-width: 300px;
        text-align: left;
        padding: 20px;
        transition: all 0.3s ease;
    }

    .tag:hover {
        border-color: #8AC83A;
    }
}

@media (max-width: 480px) {
    .about {
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
    }

    .como h1 {
        font-size: 28px;
        margin-bottom: 10px;
    }

    .como p {
        font-size: 16px;
        margin-bottom: 15px;
    }

    .tags {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .tag {
        width: 90%;
    }
}

.about{
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-around;
    color: white;
    margin: auto;
    margin-top: 100px;
}

.como h1{
    font-size: 48px;
    width: 100%;
}

.como p{
    margin-top: 10px;
    width: 100%;
    font-size: 19px;
    color: #989898;
}

.tag{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #1E1E1E;
    padding: 15px;
    border: 2px solid #292929;
    border-radius: 5px;
    margin-top: 15px;
}

.tag p{
    font-size: 29px;
    font-weight: bold;
    color: #8AC83A;
}

.tag h1{
    margin-left: 15px;
    font-weight: 300;
}


.Cards{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 50px;
    color: white;
}

.top{
    display: flex;
    align-items: center;
    justify-content: center;
}

.top h1 {
    font-size: 32px;
    width: 77%;
    text-align: center;
    font-weight: 100;
}

.cards-list{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 40px;
}

.card{
    padding: 30px;
    background-color: #1E1E1E;
    border: 2px solid #292929;
    border-radius: 10px;
    width: 20em;
    height: 28em;
    transition: all 0.3s ease;
}

.card:hover{
    border: 2px solid #8AC83A;
}

.icon-card{
    margin-top: 198px;
}

.icon-card p {
    margin-top: 10px;
    font-size: 27px;
}

.text{
    margin-top: 20px;
    font-size: 19px;
}

@media (min-width: 1200px) and (max-width: 1600px) {
    .homescreen {
        flex-direction: column;
        height: auto;
        padding: 20px;
    }
    .body-center h1 {
        width: 50%;
        font-size: 24px;
        line-height: 1.5;
    }
    .cards-list {
        flex-wrap: wrap;
        gap: 20px;
    }
}

@media (max-width: 768px) {
    .desc-projetct h1 {
        font-size: 22px;
    }

    .mutiple {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
    }
}

@media (max-width: 480px) {
    .mutiple {
        grid-template-columns: 1fr; /* Uma coluna em dispositivos muito pequenos */
    }

    .desc-projetct h1 {
        font-size: 18px;
    }

    .card-project {
        padding: 15px;
    }
}

</style>