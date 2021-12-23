import { useLocation } from "react-router-dom"
import Card from "../../Components/card/card"
import Empty from "../../Components/empty/empty"

const Details = () => {
    const location = useLocation()
    // let uni
    // else{
    //     uni = location.state.uni
    // }
    return (location.state===undefined)?<Empty msg="error, go to homepage"/>:(
        <div>
            <Card uni={location.state.uni}/>
        </div>
    )
}

export default Details