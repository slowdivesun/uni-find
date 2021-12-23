import { Link } from 'react-router-dom'
import './unilist.css'

const Unilist = (props) => {
    const { uni } = props
    return (
        <div className="uniList">
            {uni.map(each =>
                <Link key={each.id} className='link' to={{
                    pathname: "/details",
                    state: { uni: each }
                }}>
                    <div className="box" key={each.id}>
                        {each.name}
                        <span className='uniIconContainer'>
                            <i className="uniRightIcon fas fa-chevron-right"></i>
                        </span>
                    </div>
                </Link>)}
        </div>
    )
}

export default Unilist