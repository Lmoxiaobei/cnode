import React from 'react'
import './footer.css'
class Footer extends React.Component {
  render () {
      return(
        <div className='footer-0'>
          <div className='footer-1'>
            <div className='footer-2'>RSS</div>|
              <div className='footer-3'>源代码址</div>
            </div>
          <div className='footer-4'>
            <span>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</span>
          </div>
          <div className='footer-5'>
            <span>服务器赞助商为</span>
            <a href="http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo"><img className='footer-9' src="//dn-cnode.qbox.me/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" alt="1"/></a>
            <span>，存储赞助商为</span>
            <a href="$"><img className='footer-6' src="//dn-cnode.qbox.me/Fg0jtDIcTqVC049oVu5-sn6Om4NX" alt=""/></a>
            <span>，由</span>
            <a href="https://alinode.aliyun.com/?ref=cnode"><img className='footer-7' src="//dn-cnode.qbox.me/FpMZk31PDyxkC8yStmMQL4XroaGD" alt=""/></a>
            <span>提供应用性能服务。</span>
          </div>
          <div className='footer-8'>
            <span>新手搭建 Node.js 服务器，推荐使用无需备案的</span>
            <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a>
          </div>
        </div>
      )
  }
}

export default Footer;
