<template>
    <div>
        <div class="trigger">
            <!-- @slot Trigger for the Modal -->
            <slot name="trigger"></slot>
        </div>
        <transition name="fade">
            <div class="dash-modal" ref="modal">
                <div class="dash-modal__content">
                    <!-- @slot Content of the Modal -->
                    <slot name="content"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>


export default {
    name: "DashModal",
    mounted() {
        const trigger = document.getElementsByClassName("trigger")[0];
        const modal = document.getElementsByClassName("dash-modal")[0];

        trigger.onclick = () => {
            modal.style.visibility = "visible";
            modal.style.opacity = 1;
        }

        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.opacity = 0;
                modal.style.visibility = "hidden";
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.dash-modal {
    // Background greyed out
    visibility: hidden;
    opacity: 0;
    position: fixed; 
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
    transition: visibility 0s, opacity 0.2s ease-in-out;

    &__content {
        position: absolute;
        width: 50%;
        margin: 0;
        max-height: 75%;
        overflow: auto;
        top: 50%;
        left: 50%;
        z-index: 2;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%)
    }
}

.trigger {
    cursor: pointer;
}

</style>

