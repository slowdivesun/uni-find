import './find.css'
import {Component} from 'react'
import Unilist from '../unilist/unilist'
import Empty from '../empty/empty'

class Find extends Component{
    state = {
        query:'anywhere',
        uni: [],
        found: false,
        searching: false
    }

    findfunc = () => {
        this.setState({searching: true})
        fetch('http://universities.hipolabs.com/search?country='+this.state.query)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            for (let i=0; i<data.length; i++){
                data[i]["id"] = i+1;
            }
          this.setState({ uni: data, found: true, searching: false })
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
            searching: false
        }
        )
    }

    render(){
        const {uni, query, found} = this.state;
        return (
            <div className='findWrapper'>
                <div className="find">
                <input placeholder='Enter country, click find' type="search" onChange={this.enter} />
                <button onClick={this.findfunc}>FIND</button>
                </div>{uni.length>0 ? <Unilist uni={uni}/> : found ? <Empty msg="sorry :( no valid matches" />:null}
            {uni.length===0 && <Empty msg="empty..."/>}</div>
            
        )
    }
}

export default Find