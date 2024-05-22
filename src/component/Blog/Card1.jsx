import "./style/Card.css";
function Card({ title2, description2, imgurl2 }) {
    return (
        <>
            <div className="container">
                <div className="description">
                    <h3>{title2}</h3>
                    <p>{description2}</p>
                </div>
                <div className="imgWrappeer">
                    <img src={imgurl2} alt="" />
                </div>
            </div>
        </>
    );
};
export default Card;