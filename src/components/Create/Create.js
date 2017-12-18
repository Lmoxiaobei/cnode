import React from 'react'
import axios from 'axios'
import './create.css'
class Create extends React.Component {
  state = {
    title:'',
    content:''
  }
  handleTitle = e => {
    this.setState({
      title: e.target.value
    })
  }
  handleContent = e => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = () => {
    const data = {
      accesstoken:sessionStorage.token,
      title:this.state.title,
      content:this.state.content,
      tab:'dev'
    }
    console.log(this.state)
    axios.post('https://cnodejs.org/api/v1/topics',data)
    .then( res => {
      console.log(res)
      this.setState({
        title:'',
        content:''
      })
      this.props.history.push(`/topic/${res.data.topic_id}`)
    })
    .catch( err => {
      alert (err)
    })
  }

  render () {
    return(
      <div className='create-0'>
        请发布主题:<input className='create-1' type="text" value={this.state.title} onChange={this.handleTitle} /><br/>
      <textarea className='create-2' cols="100" rows="22"  value={this.state.content} onChange={this.handleContent}></textarea><br/>
        <button className='create-3' onClick={this.handleSubmit}>提交</button>
      </div>
    )
  }
}

export default Create
