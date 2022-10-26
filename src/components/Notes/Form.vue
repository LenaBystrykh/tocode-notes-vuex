<template>
    <div class="notes-wrapper">
        <form class="note-form" @submit.prevent="sendNote">
            <textarea 
                required 
                v-model="inputValue" 
                placeholder="Type your note" />
            <TagsList :chosen="chosen" @changeTag="(tag) => $emit('changeTag', tag)" />
            <button class="btn btnPrimary" type="submit">Add note</button>
        </form>
    </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList'
export default {
    components: {TagsList},
    data() {
        return {
            inputValue: ''
        }
    },
    props: {
        chosen: {
            type: Array,
            default() {
                return []
            }
        }
    },
    computed: {
        getChosenTags() {
            return this.$store.getters.getChosenTags
        }
    },
    methods: {
        sendNote() {
            const tags = Array.from(this.getChosenTags) 
            const note = this.inputValue
            const newNote = {
                note,
                tags,
                type: 'text'
            }
            this.$store.dispatch('setNote', newNote)
            this.inputValue = ''
        }

    }
}
</script>

<style lang="scss">
.notes-wrapper{
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: auto;
    min-width: 300px;
}
.note-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    textarea {
        margin-bottom: 0;
    }
}
</style>
