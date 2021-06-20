//創建外殼組件App
import React,{Component} from 'react'
import Hello from './commponents/Hello/Hello'
import Welcome from './commponents/Welcome/Welcome'

//創建並暴露App組件
export default class App extends Component{
    render() {
        return(
            <div>
                <Hello/>
                <Welcome/>
            </div>
            )
    }
}

