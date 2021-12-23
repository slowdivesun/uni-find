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
                <div class='collapseWrap'>
                    <input id="copllapsible" className="toggle" type="checkbox"/>
                    <label for="copllapsible" className="lbl-toggle">Visit</label>
                    <div className="collapsible-content">
                        <div className="content-inner">
                            {uni.web_pages.map(each => {
                                return <a href={each}>{each}</a>
                            })}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Card