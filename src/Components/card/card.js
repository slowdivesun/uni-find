import './card.css'

const Card = (props) => {
    const {uni} = props
    if (uni===undefined){
        console.log('it is undefined')
    }
    return (
        <div className='card'>
            <div className='center'>
                <h1 className='uniTitle'>{uni.name}</h1>
                <p>Country: {uni.country}</p>
                <p>State/Province: {uni["state-province"] ? uni["state-province"] : "Unavailable"}</p>
                <div className='collapseWrap'>
                    <input id="copllapsible" className="toggle" type="checkbox"/>
                    <label htmlFor="copllapsible" className="lbl-toggle">Visit</label>
                    <div className="collapsible-content">
                        <ul className="content-inner">
                            {uni.web_pages.map(each => {
                                return<li><a href={each} key={each.id}>{each}</a></li> 
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card