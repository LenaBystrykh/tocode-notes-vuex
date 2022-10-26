<template>
    <div class="tags-list">
        <div 
            class="tag-item" 
            v-for="tag in getTags" 
            :key="tag" 
            @click="$emit('changeTag', tag)">
            <div v-if="!chosen.includes(tag)" class="usualTag">
                {{ tag }}
            </div>
            <div v-else class="chosenTag">
                {{ tag }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        chosen: {
            type: Array,
            default() { 
                return [] 
            }
        }
    },
    computed: {
        getTags() {
            return this.$store.getters.getTags
        },
        getChosenTags() {
            return this.$store.getters.getChosenTags
        }
    },
}
</script>

<style lang="scss">
.tags-list {
    padding: 10px 0;
    display: flex;
    justify-content: center;
}
.tag-item {
    .chosenTag {
        padding: 8px 22px;
        margin-right: 10px;
        background-color: #fff;
        border-radius: 22px;
        user-select: none;
        cursor: pointer;
        background-color: #444ce0;
        color:#fff;
    }
    .usualTag {
        padding: 8px 22px;
        margin-right: 10px;
        background-color: #fff;
        border-radius: 22px;
        user-select: none;
        cursor: pointer;
        background-color: #fff;
        color: #000;
    }
}
</style>
