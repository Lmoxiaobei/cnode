import React from 'react'
import './showtopics.css'
import { Link } from 'react-router-dom'
class ShowTopicks extends React.Component {
  render () {
    const{data} = this.props
    const showTopics = data.length !== 0 ? data.map(item=>{
      return(
        <div key={item.id} className='showtopic'>
          <Link to={`/user/${item.author.loginname}`}><img src={item.author.avatar_url} alt="11"/></Link>
          <span className='topic-info'>{item.reply_count}/{item.visit_count}</span>
          <span className={`topic-tab ${(item.top || item.good)&&'active'}`}>{item.top?'置顶':item.good?'精华':item.tab==='share'?'分享':'问答'}</span>
          <span className='topic-title'><Link to={`/topic/${item.id}`}>{item.title}</Link></span>
        </div>
      )
    }):'请稍等'
    return(
      <div>{showTopics}</div>
    )
  }
}

export default ShowTopicks;
