function Card(props) {
    const imgUrl = "https://images.pexels.com/photos/19414563/pexels-photo-19414563/free-photo-of-a-woman-in-a-leather-jacket-sitting-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
    return (
        <>
            <div className="card" style={{width: `${props.cardWidth} rem`}}>
                <img src={imgUrl} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.userData.userName}</h5>
                    <p className="card-text">{props.userData.desc}</p>
                    <a href="#" className="btn btn-primary">{props.btnText}</a>
                </div>
            </div>
        </>
    );
};

export default Card;