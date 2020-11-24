<template>
    <form class="signup form" @submit.prevent="validateAndSubmit">
        <transition name="fade">
            <div v-if="error" class="form__error">{{error}}</div>
        </transition>
        <input class="form__input" label="Name" v-model="name" placeholder="Name" />
        <input class="form__input" label="Email" v-model="email" placeholder="Email" />
        <input class="form__input" label="Password" v-model="password" type="password" placeholder="Password" />
        <input class="form__input" label="Confirm Password" v-model="confirmPassword" type="password" placeholder="Confirm Password" />
        <input type="submit" style="display:none" />
        <div class="btn signup__button" @click.prevent="validateAndSubmit">
            <div class="btn__text">Signup</div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'dash-signup',
    props:{
        submitFunction: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            error: "",
            attemptedSignIn: false
        }
    },
    methods: {
        async validateAndSubmit() {
            this.attemptedSignIn = true;

            let errors = false;
            if(!this.name.length) {
                this.error = "Please input a name.";
                return;
            }
            if(!this.validEmail(this.email)) {
                this.error = "Please enter a valid email address.";
                return;
            }
            if(this.password.length < 8) {
                this.error = "Please enter a password with at least 8 characters.";
                return;
            }
            if(this.confirmPassword !== this.password) {
                this.error = "Password and confirm password do not match.";
                return;
            }

            this.submitFunction({
                name: this.name,
                email: this.email,
                password: this.password
            })
            .catch(e => this.error = e.message);
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    },
    watch: {
        confirmPassword: function(val) {
            if(val === 0)
                return;
            else if(val !== this.password && this.attemptedSignIn) {
                this.error = "Passwords must match!";
            }
            else if(this.error.length !== 0) {
                this.error = "";
                this.$forceUpdate();
            }
        }
    }
}
</script>

<style lang="scss">

.signup {
    display: flex;
    flex-direction: column;
    width: 40rem;
    //border: 2px solid $color-primary;
    border-radius: 1rem;
    padding: 2rem;
    //background-color: $color-background;
}

</style>