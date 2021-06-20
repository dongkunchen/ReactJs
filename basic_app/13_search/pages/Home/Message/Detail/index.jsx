import React, { Component } from 'react'
import qs from 'querystring'

const DetailData = [
    {id:'01',content:"你好"},
    {id:'02',content:"早安"},
    {id:'03',content:"你好,未來的你"},
]
export default class Detail extends Component {
    render() {
        // const {id,title} = this.props.match.params
        const {search} = this.props.location
        const{id,title} = qs.parse(search.slice(1))
        const findResult = DetailData.find((detailObj)=>{
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
