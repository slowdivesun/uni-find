import './find.css'
import {Component} from 'react'
import Unilist from '../unilist/unilist'
import Empty from '../empty/empty'

class Find extends Component{
    state = {
        query:'anywhere',
        uni: [],
        found: false,
    }

    findfunc = () => {
        fetch('http://universities.hipolabs.com/search?country='+this.state.query)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            for (let i=0; i<data.length; i++){
                data[i]["id"] = i+1;
                if (data[i]["web_pages"].length > 1){
                    console.log(data[i])
                }
            }
          this.setState({ uni: data, found: true })
        }).catch(console.log)
    }

    // componentDidMount() {
    //     fetch('http://universities.hipolabs.com/search?country=India')
    //     .then(res => res.json())
    //     .then((data) => {
    //         console.log(data)
    //       this.setState({ uni: data })
    //     }).catch(console.log)
    // }

    enter = (event) => {
        this.setState(
            {query: event.target.value,
            uni: [],
            found: false,
        }
        )
    }

    render(){
        const {uni, found} = this.state;
        return (
            <div className='findWrapper'>
                    <div className="find">
                    <span className='logo'>UNI FIND</span>
                    <div className='uniInput'><input placeholder='Enter country, click find' type="search" onChange={this.enter} />
                    <button onClick={this.findfunc}>FIND</button>
                    </div></div>
                
                {uni.length>0 ? <Unilist uni={uni}/> : found ? <Empty msg="sorry :( no valid matches" />:null}
                {uni.length===0 && found===false && <Empty msg="enter a query..."/>}
            </div>
            
        )
    }
}

export default Find