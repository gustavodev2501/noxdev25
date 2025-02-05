<template>
    <div class="topbar">
        <div class="logo">
            <img src="../assets/noxlogo.png" alt="Logo">
        </div>

        <div class="hamburger" @click="$emit('toggle-menu')">
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div class="atalhos" :class="{ 'menu-active': menuOpen }">
            <li><a href="">Áreas</a></li>
            <li><a href="">Como funciona</a></li>
            <li><a href="">Templates</a></li>
            <li><a href="">Atalhos</a></li>
            <li><a href="">Contato</a></li>
        </div>

        <div class="container-btn">
            <button class="btn">Entrar em contato</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        menuOpen: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped>

.topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    background-color: #0F0F0F;
    border-radius: 10px;
    color: white !important;
}

.logo img {
    width: 49px;
}

.atalhos {
    display: flex;
}

li {
    margin-right: 20px;
}

a {
    color: white;
}

.btn {
    background-color: #8AC83A;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
}

.hamburger {
    display: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;
    margin: 5px 10px;
}

.hamburger div {
    width: 25px;
    height: 3px;
    background-color: white;
    transition: 0.3s;
}

@media (max-width: 768px) {
    .container {
        padding: 20px;
    }

    .atalhos {
        display: none;
        flex-direction: column;
        background-color: #0F0F0F;
        position: absolute;
        top: 100px;
        left: 20px;
        right: 20px;
        border-radius: 10px;
        padding: 10px 20px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    .menu-active {
        display: flex;
    }

    .hamburger {
        display: flex;
    }

    .container-btn {
        display: none;
    }
}

</style>