<template>
    <div class="dash-popover">
        <div class="dash-popover__trigger" ref="trigger" @click="buttonClick">
            <slot name="trigger"></slot>
        </div>
        <div class="dash-popover__container" ref="container">
            <div class="dash-popover__overlay" ref="overlay"
                @click.stop="closePopover"></div>
            <div class="dash-popover__content" ref="content">
                <slot name="content"></slot>
                <div id="arrow" data-popper-arrow></div>
            </div>
        </div>
    </div>
</template>

<script>
import {createPopper} from '@popperjs/core';

export default {
    name: "dash-popover",
    props: {
        options: {
            type: Object,
            default(){
                return {
                    placement: 'bottom',
                    offset: [0,8]
                }
            } 
        }
    },
    data() {
        return {
            popperInstance: null,
            visible: false
        }
    },
    methods: {
        initPopover() {
            let modifiers = {};
            const {offset, placement} = this.options;

            if (offset) modifiers.offset = {offset};
            if (placement) modifiers.placement = placement;

            this.popperInstance = createPopper(this.$refs.trigger,
                this.$refs.content, {
                    placement,
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset
                            }
                        }
                    ]
                })

        },
        destroyPopover() {
            if(this.popperInstance) {
                this.popperInstance.destroy();
                this.popperInstance = null;
                this.$emit('closePopover');
            }
        },
        buttonClick() {
            if(this.visible) this.closePopover();
            else this.openPopover();
        },
        openPopover() {
            this.visible = true;
            this.$refs.container.setAttribute('data-show', '');
            this.initPopover();
        },
        closePopover() {
            this.visible = false;
            this.$refs.container.removeAttribute('data-show');
            this.destroyPopover();
        },
        updateOverlayPosition() {
            const overlayElement = this.$refs.overlay;
            const overlayPosition = overlayElement.getBoundingClientRect();
        
            overlayElement.style.transform = `<code>translate(-${overlayPosition.x}px, -${
                overlayPosition.y
            }px)</code>`;
        }
    },
    mounted() {
        this.updateOverlayPosition();
    }
}
</script>

<style lang="scss">

.dash-popover {
    &__content {
        z-index: 9;
    }
    &__overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    &__container {
        display: none;

        &[data-show] {
            display: block;
        }
    }

    &__trigger {
        cursor: pointer;
    }
}

#arrow,
#arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: -1
}
#arrow::before {
    content: '';
    transform: rotate(45deg);
    background: rgb(48, 48, 48);
}

.dash-popover__content[data-popper-placement^='top'] > #arrow {
  bottom: -4px;
}

.dash-popover__content[data-popper-placement^='bottom'] > #arrow {
  top: -4px;
}

.dash-popover__content[data-popper-placement^='left'] > #arrow {
  right: -4px;
}

.dash-popover__content[data-popper-placement^='right'] > #arrow {
  left: -4px;
}

</style>

