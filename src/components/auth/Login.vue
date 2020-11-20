<template>
    <form class="login form" @submit.prevent="formatAndSubmit">
        <transition name="fade">
            <div v-if="error" class="form__error">{{error}}</div>
        </transition>
        <input class="form__input" label="Email" v-model="email" type="email" placeholder="Email"/>
        <input class="form__input" label="Password" v-model="password" type="password" placeholder="Password" />
        <input type="submit" style="display:none" />
        <div class="btn login__button" @click.prevent="formatAndSubmit">
            <div class="btn__text">Login</div>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        submitFunction: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            email: "",
            password: "",
            error: null
        }
    },
    methods: {
        async formatAndSubmit() {
            this.error = null;
            this.submitFunction({
                email: this.email,
                password: this.password
            })
            .catch(e => this.error = e.message);
        }
    }
}
</script>

<style lang="scss">

.login {
    display: flex;
    flex-direction: column;
    width: 40rem;
    //border: 2px solid $color-primary;
    border-radius: 1rem;
    padding: 2rem;
    //background-color: $color-background;
}

</style>