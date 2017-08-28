import React, { Component } from 'react'
import Editor from './Editor'
import Presentation from './Presentation'

const content = `# How to use

---

Edit your slides here.

---

Press the play button to present.`

const makeSlides = md => md.split('---\n\n').filter(n => n.length)

class App extends Component {
  constructor() {
    super()
    this.state = {
      editing: true,
      content
    }
    this.onChange = this.onChange.bind(this)
    this.onToggle = this.onToggle.bind(this)
  }

  onChange(content) {
    this.setState({ content })
  }

  onToggle(e) {
    console.log('toggling')
    this.setState({ editing: !this.state.editing })
  }

  render() {
    const { editing, content } = this.state
    if (editing) {
      return (
        <Editor
          text={content}
          onChange={this.onChange}
          onToggle={this.onToggle}
        />
      )
    } else {
      return (
        <Presentation slides={makeSlides(content)} onToggle={this.onToggle} />
      )
    }
  }
}

export default App
