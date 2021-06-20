import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const {users,isFirst,isLoading,err,keyWord} = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2>歡迎使用,輸入關鍵字後點擊搜索</h2> :
                    isLoading ? <h2>{keyWord}正在搜索中......請稍後......</h2> :
                    err ? <h2 style={{color:'red'}}>{err}</h2> :
                    users.map((userObj) => {
                        return (
                            <div key={userObj.id} className="card">
                                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                    <img alt="head_portrait" src={userObj.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
