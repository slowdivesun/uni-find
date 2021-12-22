import { useLocation } from "react-router-dom"
import Card from "../../Components/card/card"

const Details = () => {
    const location = useLocation()
    console.log(location.uni)
    const uni = location.state.uni
    
    if (location.uni===undefined){
        console.log('it is undef')
    }
    return (
        <div>
            <Card uni={uni}/>
        </div>
    )
}

export default Details