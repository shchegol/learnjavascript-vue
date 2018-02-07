<template>
  <textarea ref="editor" :placeholder="placeholder" class="editable medium-editor-textarea">{{value}}</textarea>
</template>

<script>
  import MediumEditor from 'medium-editor'
  import 'medium-editor/dist/css/medium-editor.css'

  export default {
    name: 'TextEditor',
    props: {
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: 'Set text'
      }
    },
    data: () => ({
      editor: null
    }),
    watch: {
      value: 'updateEditor'
    },
    methods: {
      initEditor () {
        let self = this
        this.editor = new MediumEditor(this.$refs.editor)
        this.editor.subscribe('editableInput', (event) => {
          self.$emit('input', self.editor.getContent())
        })
      },
      updateEditor () {
        if (this.editor) {
          this.editor.setContent(this.value)
        }
      }
    },
    mounted () {
      this.initEditor()
    }
  }
</script>
