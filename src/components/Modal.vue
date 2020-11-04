<template>
    <div>
        <div class="trigger">
            <slot name="trigger"></slot>
        </div>
        <div class="dash-modal" ref="modal">
            <div class="dash-modal__content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "DashModal",
    mounted() {
        const trigger = document.getElementsByClassName("trigger")[0];
        const modal = document.getElementsByClassName("dash-modal")[0];

        trigger.onclick = function() {
            modal.style.display = "block";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.dash-modal {
    // Background greyed out
    display: none;
    position: fixed; 
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    overflow: auto;
    background-color: rgba(0,0,0,0.4);

    &__content {
        width: 50%;
        margin: auto;
        max-height: 75%;
        overflow: auto;
    }
}

.trigger {
    cursor: pointer;
}

</style>

