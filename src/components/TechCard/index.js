
import { TechCardContainer, CardNumberContainer } from "./styledComponent"

const TechCard = (props) => {
    const { imageUrl, borderColor, content, index } = props.eachCard
    return (
        <TechCardContainer borderColor={borderColor} direction={index % 2 === 0 ? "to bottom" : "to top"} className="card d-flex flex-column justify-content-around align-items-center mb-5">
            <img alt="" className={`cardImage w-75 order-${index % 2 === 0 ? "1" : "3"}`} src={imageUrl} />
            <p className="w-75 text-center order-2">{content}</p>
            <CardNumberContainer index={index} className="rounded-circle cardNoCon text-white h5 d-flex justify-content-center align-items-center">0{index + 1}</CardNumberContainer>
        </TechCardContainer>
    )
}


export default TechCard