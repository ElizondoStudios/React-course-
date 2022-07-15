import ping from "./images/ping.png";

function Card(props){
    return(
        <div className="travel-card">
            <img 
                src={props.item.imageUrl} 
                alt="Place I travelled to"
                className="travel-card--img"
            />
            <div className="travel-card--info">
                <div className="travel-card--location">
                    <img
                        src={ping}
                        alt="ping"
                        className="travel-card--ping"
                    />
                    <p className="travel-card--location--country">{props.item.location}</p>
                    <a 
                        href={props.item.googleMapsUrl}
                        className="travel-card--location--maps"
                    >View on Google Maps</a>  
                </div>
                <h2 className="travel-card--info--title">{props.item.title}</h2>
                <p className="travel-card--info--dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="travel-card--info--description">{props.item.description}</p>
            </div>
        </div>
    )
}

export default Card;