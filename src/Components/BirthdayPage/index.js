import {Component} from "react"
import {Navigate} from "react-router-dom"
import "./index.css"

class BirthdayPage extends Component {
    state={rendered:false}

    componentDidMount(){
        this.renderedMessagePage()
    }

    renderedMessagePage(){
        setTimeout(()=>{
            this.setState({rendered:true})
        }, 10000)
    }
    render(){
        const {rendered}=this.state
        if (rendered){
            return <Navigate to="/message" />
        }
        return(
            <div className="birthday">
                <h1 style={{fontSize:"100px",color:"white"}}>This is BirthdayPage</h1>
            </div>
        )
    }
}

export default BirthdayPage;