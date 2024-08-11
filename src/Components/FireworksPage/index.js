import {Component} from "react"
import { Navigate } from "react-router-dom"
import"./index.css"

class FireworksPage extends Component {
    state={rendered:false}

    componentDidMount(){
        this.renderedToBirthdayPage()
    }
    renderedToBirthdayPage=()=>{
        setTimeout(()=>{
            this.setState({rendered:true})
        },10000)
    }

    render(){
        const {rendered}=this.state 
        if(rendered){
            return <Navigate to="/birthday" />
        }

        return(
            <div className="fireworks">
                <h1 style={{color:"black",fontSize:"100px"}}>This is FireworksPage</h1>
            </div>
        )
    }
}

export default FireworksPage;