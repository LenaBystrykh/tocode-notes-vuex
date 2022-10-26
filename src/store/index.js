import { createStore } from 'vuex'

export const store = createStore({
    state: {
        notes: [
            {
                note: 'Here you can manage your notes',
                tags: ['study'],
                type: 'text'
            },
            {
                note: 'You can add one or several tags to your note or left it without tags',
                tags: ['travel', 'sport'],
                type: 'text'
            },
            {
                note: 'You can change either text and tags or delete note',
                tags: [],
                type: 'text'
            }
        ],
        tags: ['home', 'work', 'travel', 'study', 'pets', 'sport'],
        chosenTags: []
    },
    mutations: {
        showNote(state, note) {
            state.notes.push(note)
            state.chosenTags = []
        },
        changeTag(state, tag) {
            if (state.chosenTags.includes(tag)) {
                state.chosenTags.splice(state.chosenTags.indexOf(tag), 1)
            }
            else {
                state.chosenTags.push(tag)
            }
        },
        deleteNote(state, index) {
            state.notes.splice(index, 1)
        },
        changeNoteText(state, { index, value }) {
            state.notes[index].note = value
        },
        changeNoteTag(state, { index, value }) {
            if (state.notes[index].tags.includes(value)) {
                state.notes[index].tags.splice(state.notes[index].tags.indexOf(value), 1)
            }
            else {
                state.notes[index].tags.push(value)
            }
        },
        getLocalNotes(state) {
            const localNotes = localStorage.getItem('notes')
            if (localNotes) {
                state.notes = JSON.parse(localNotes)
            }
        },
        updateLocalNotes(state) {
            localStorage.setItem('notes', JSON.stringify(state.notes))
        },
    },
    actions: {
        setNote({ commit }, note) {
            commit('showNote', note)
            commit('updateLocalNotes')
        },
        changeTag({ commit }, chosenTag) {
            commit('changeTag', chosenTag)
            commit('updateLocalNotes')
        },
        deleteNote({ commit }, note) {
            commit('deleteNote', note)
            commit('updateLocalNotes')
        },
        changeNoteText({ commit }, { index, value }) {
            commit('changeNoteText', { index, value })
            commit('updateLocalNotes')
        },
        changeNoteTag({ commit }, { index, value }) {
            commit('changeNoteTag', { index, value })
            commit('updateLocalNotes')
        },
        getLocalNotes({ commit }) {
            commit('getLocalNotes')
        }
    },
    getters: {
        getNotes(state) {
            return state.notes
        },
        getTags(state) {
            return state.tags
        },
        getChosenTags(state) {
            return state.chosenTags
        },
        getNoteByIndex: state => index => state.notes[index]
    }
})
