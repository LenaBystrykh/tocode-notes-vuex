<template>
    <Form @sendNote="displayNote" :chosen="getChosenTags" @changeTag="(value) => changeTag(value)"/>
    <div class="notes-list">
        <NoteItem 
            class="note-item"
            v-for="(note, index) in getNotes" 
            :key="index"
            :text="note.note"
            :chosenTags="note.tags"
            :allTags="getTags"
            @delete="deleteNote(index)"
            @updateValue="(value) => changeNoteText(index, value)"
            @changeTag="(value) => changeNoteTag(index, value)" />
    </div>
</template>

<script>
import Form from '@/components/Notes/Form'
import NoteItem from '@/components/Notes/NoteItem'
export default {
    components: { Form, NoteItem },
    mounted() {
        this.$store.dispatch('getLocalNotes')
    },
    computed: {
        getNotes() {
            return this.$store.getters.getNotes
        },
        getTags() {
            return this.$store.getters.getTags
        },
        getChosenTags() {
            return this.$store.getters.getChosenTags
        }
    },
    methods: {
        changeNoteText(index, value) {
            this.$store.dispatch('changeNoteText', {index, value})
        },
        deleteNote(index) {
            this.$store.dispatch('deleteNote', index)
        },
        changeNoteTag(index, value) {
            this.$store.dispatch('changeNoteTag', {index, value})
        },
        changeTag(value) {
            this.$store.dispatch('changeTag', value)
        }
    }
}
</script>

<style lang="scss">
.notes-list {
    padding: 40px 0;
}
</style>
