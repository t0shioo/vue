<template>
    <div class="main-container">
        <MyBanner />
        <h1>Monte o seu burger:</h1>
        <BurgerForm />
    </div>
</template>

<script>

import BurgerForm from '@/components/BurgerForm.vue';
import MyBanner from '@/components/MyBanner.vue';

export default {
    name: "MyHome",
    components: {
        MyBanner,
        BurgerForm
    }
}
</script>
