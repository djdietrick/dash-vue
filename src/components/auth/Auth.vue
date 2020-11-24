<template>
    <div class="auth">
        <div class="auth__btn-group">
            <div class="btn auth__btn" @click="setComponent('login')">
                <div class="btn__text">Login</div>
            </div>
            <div class="btn auth__btn" @click="setComponent('signup')">
                <div class="btn__text">Signup</div>
            </div>
        </div>
        <component :is="selectedComponent" :submitFunction="selectedFunction"/>
    </div>
</template>

<script>
import Login from './Login.vue';
import Signup from './Signup.vue';

export default {
    name: 'dash-auth',
    props: {
      signupFunction: {
          type: Function,
          required: true
      },
      loginFunction: {
          type: Function,
          required: true
      }  
    },
    data() {
        return {
            selectedComponent: "login"
        }
    },
    components: {
        login: Login,
        signup: Signup
    },
    methods: {
        setComponent(comp) {
            this.selectedComponent = comp;
        },
        async test(data) {
            console.log(data);
        }
    },
    computed: {
        selectedFunction() {
            if(this.selectedComponent === 'login')
                return this.loginFunction;
            else
                return this.signupFunction;
        }
    }    
}
</script>

<style lang="scss">
.auth {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__btn {
        &-group {
            display: flex;
        }
        &:not(:last-child) {
            margin-right: 2rem;
        }
    }
}
</style>