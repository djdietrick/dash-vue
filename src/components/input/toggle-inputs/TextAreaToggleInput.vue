<template>
    <div class="dash-textarea-toggle-input">
        <div class="dash-textarea-toggle-input__display" :class="{ show: !focused}"
            @click="setFocus">
            <div>{{value}}</div>
        </div>
        <div class="dash-textarea-toggle-input__input" :class="{ show: focused}">
            <form class="form" @submit.prevent="submit">
                <textarea type="textarea" class="form__textarea" v-model="newValue" 
                    :placeholder="placeholder" @blur="submit" ref="input"
                    :cols="columns" :rows="rows"/>
                <input type="submit" style="display:none" />
            </form>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'dash-text-area-toggle-input',
    props: {
        placeholder: {
            type: String,
            required: true
        },
        value: {
            type: String | Number,
            default: ""
        },
        rows: {
            type: Number,
            default: 5
        },
        columns: {
            type: Number,
            default: 40
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
            if(this.newValue !== '')
                this.focused = false;
        },
        setFocus() {
            this.focused = true;
            setTimeout(() => {this.$refs.input.focus()},0);
        }
    },
    computed: {
        showInput: function() {
            return this.focused || this.newValue === ''
        },
        showDisplay: function() {
            return !this.showInput && !this.focused
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
.dash-textarea-toggle-input {
    &__display {
        display: none;
        cursor: pointer;
    }
    &__input {
        display: none;
        min-height: 5rem;
    }
}

.show {
    display: block;
}
    
</style>