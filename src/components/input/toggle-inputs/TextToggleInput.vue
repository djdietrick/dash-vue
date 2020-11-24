<template>
    <div class="dash-text-toggle-input">
        <div class="dash-text-toggle-input__display" :class="{ show: !focused}"
            @click="setFocus">
            <div :class="textClass">{{value}}</div>
        </div>
        <div class="dash-text-toggle-input__input" :class="{ show: focused}">
            <form class="form" @submit.prevent="submit">
                <input type="text" class="form__input" v-model="newValue" 
                    :placeholder="placeholder" @blur="submit" ref="input"/>
                <input type="submit" style="display:none" />
            </form>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'dash-text-toggle-input',
    props: {
        placeholder: {
            type: String,
            required: true
        },
        value: {
            type: String | Number,
            default: ""
        },
        textClass: {
            type: String,
            default: "heading-primary"
        }
    },
    data() {
        return {
            focused: false,
            newValue: ''
        }
    },
    watch: {
        value: function(v) {
            this.newValue = v;
        }
    },
    methods: {
        submit() {
            this.$emit('update:value', this.newValue);
            this.focused = false;
        },
        setFocus() {
            this.focused = true;
            this.$refs.input.focus();
        }
    },
    computed: {
        showInput: function() {
            return this.focused || this.value === ''
        },
        showDisplay: function() {
            return !showInput() && !this.focused
        }
    },
    created() {
        this.newValue = this.value;
        if(this.value === '')
            this.focused = true;
    }
}
</script>

<style lang="scss" scoped>
.dash-text-toggle-input {
    &__display {
        display: none;
    }
    &__input {
        display: none;
    }
}

.show {
    display: block;
}
    
</style>