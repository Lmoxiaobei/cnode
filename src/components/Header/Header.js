import React from 'react'
import { Link,withRouter } from 'react-router-dom'
import axios from 'axios'
import './header.css'
class Header extends React.Component {
  state = {
    login:false,
    token:'',
    userInfo:null
  }
  componentDidMount() {
    if(sessionStorage.token === 'd12252e5-503c-488b-839f-4e7441c6dafc'){
      axios.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:sessionStorage.token}
    )
    .then(res=>{
      this.setState({
        login:true,
        userInfo:res.data
      })
    })
    .catch(err=>{
      alert(err)
      })
    }
  }
  handleChange = e => {
    this.setState({
      token:e.target.value
    })
  }
  handleLogin = () => {
    const { token } = this.state
    axios.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:token}
  )
  .then(res=>{
    sessionStorage.token = token
    this.setState({
      login:true,
      userInfo:res.data
    })
  })
  .catch(err=>{
    alert(err)
  })
}


  handleLogout = () => {
    sessionStorage.clear('token')
    this.setState({
      login:false,
      userInfo:null,
      token:''
    })
    this.props.history.push('/')
  }
  render () {
    const { token, login, userInfo } = this.state
      return(
        <header>
          <Link to='/'><img style={{width:'140px'}}
            src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="11"/></Link>
          {
            login ? (
              <div className='logout'>
                <Link to='/topic/create'>文章</Link>
                <Link to={`/user/${userInfo.loginname}`}>
                  <img className='author-pic' src={userInfo.avatar_url} alt="1"/>
                </Link>
                <button onClick={this.handleLogout}>退出</button>
              </div>) : (<div>
                <input className='header-1' type="text" value={token} onChange={this.handleChange}/>
                <button onClick={this.handleLogin}>登录</button>
              </div>)
          }
        </header>
      )
  }
}

export default withRouter(Header)
// 在客户端存储数据
// HTML5 提供了两种在客户端存储数据的新方法：
// localStorage - 没有时间限制的数据存储
// sessionStorage - 针对一个 session 的数据存储
// 之前，这些都是由 cookie 完成的。但是 cookie 不适合大量数据的存储，因为它们由每个对服务器的请求来传递，这使得 cookie 速度很慢而且效率也不高。
// 在 HTML5 中，数据不是由每个服务器请求传递的，而是只有在请求时使用数据。它使在不影响网站性能的情况下存储大量数据成为可能。
// 对于不同的网站，数据存储于不同的区域，并且一个网站只能访问其自身的数据。
// HTML5 使用 JavaScript 来存储和访问数据。
