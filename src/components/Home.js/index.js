import Header from "../Header"
import TechCard from "../TechCard"
import "./index.css"
import { v4 as uuidv4 } from "uuid"
import Registration from "../Registration"
import Footer from "../Footer"
import { useEffect } from "react"
import { useState } from "react"



const techCardListSample = [
    {
        borderColor: "#1976d2", imageUrl: "https://img.freepik.com/premium-vector/cloud-services-isometric-composition-with-icons-server-racks-inside-big-cloud-with-human-characters-vector-illustration_1284-65969.jpg?w=740", content: "Introducing Al to children in an ageAI appropriate manner", id: uuidv4()
    },
    {
        borderColor: "#ad1457", imageUrl: "https://img.freepik.com/premium-vector/ai-technology-development-vector-illustration_393343-224.jpg?w=740", content: "Gain awareness on Al and build an interactive story around it", id: uuidv4()
    },
    { borderColor: "#f44336", imageUrl: "https://img.freepik.com/premium-vector/cloud-services-isometric-composition-with-icons-server-racks-inside-big-cloud-with-human-characters-vector-illustration_1284-65969.jpg?w=740", content: "Acquire programming skills in a user-friendly ", id: uuidv4() },
    {
        borderColor: "#00695c", imageUrl: "https://img.freepik.com/premium-vector/ai-technology-development-vector-illustration_393343-224.jpg?w=740", content: "Exposure to mini projects on diverse topics ", id: uuidv4()
    },
    { borderColor: "#78909c", imageUrl: "https://img.freepik.com/premium-vector/cloud-services-isometric-composition-with-icons-server-racks-inside-big-cloud-with-human-characters-vector-illustration_1284-65969.jpg?w=740", content: "Train the teachers programme ", id: uuidv4() },


]
const Home = () => {

    const [techCardList, setTechCardList] = useState(techCardListSample)

    useEffect(() => {
        // we can get the tech cards from database by making API call here and we can maintain state Hook
    }, [])


    const renderWhoWeAre = () => (
        <div className="whoWeAreCon mt-5 d-flex justify-content-center">
            <div className="d-flex contentCon">
                <div className="col-7">
                    <h1 className="h4 mb-3">WHO WE ARE</h1>
                    <p className="text-secondary">RubixeTM is a global technology company specializing in disruptive technologies Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain, and Internet of Things (IoT).<br></br><br></br>
                        RubixeTM mission is to enable businesses to leverage the full potential of disruptive technologies and stay competitive in the market, turning complex challenges into solutions, providing a strategic competitive advantage that are more efficient, effective and predictable high-quality staffing solutions that offer you the ability to build your staff strength without absorbing them full time, assist overloaded employees during critical times, and keep projects moving.
                    </p>
                </div>
                <div className="col-5">
                    <img alt="" className="w-100 rounded" src="https://rubixe.com/assets/img/aboutus/about-us.jpg" />
                </div>
            </div>
        </div>
    )

    const renderWhereWeStarted = () => (
        <div className="whereWeStartedCon">
            <div className="parentIntro d-flex justify-content-center">
                <div className="contentCon pt-4 pb-4">
                    <div className="introCon d-flex justify-content-center flex-column">
                        <div className="">
                            <h1 className="h4 text-white">WHERE WE STARTED</h1>
                            <p className="text-light mb-0">We started in 2015, With a passionate team who want to bring game-changing solutions through disrupting technologies. We expertise in delivering enterprise-level solutions in the field of Artificial Intelligence (AI), Cyber Security, Robotic Process Automation (RPA), Internet of Things (IoT), and BlockChain technology. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cardsParentCon pt-5 pb-5 d-flex justify-content-center">
                <div className="cardsCon contentCon">
                    <h1 className="h4">TECH FOR TEENS - A RUBIXE INITIATIVE </h1>
                    <ul className="techForTeensCon list-unstyled d-flex flex-wrap mt-5">
                        {techCardList.map((obj, index) => <TechCard key={uuidv4()} eachCard={{ ...obj, index }} />)}
                    </ul>
                </div>
            </div>
        </div>
    )

    return (
        <div className="homeParentCon">
            <Header />
            <div className="banner text-white d-flex justify-content-center align-items-center">
                <div className="contentCon">
                    <h1 className="h1 m-3">TECH <br></br>FOR TEANS</h1>
                    <h1 className="h5 m-3 text-secondary">CARVING FUTURE<br></br>
                        TECHNOLOGY PROFESSIONALS<br></br>
                        OUT OF YOUNG MINDS </h1>
                </div>
            </div>
            {renderWhoWeAre()}
            {renderWhereWeStarted()}
            <Registration />
            <Footer />
        </div>
    )
}

export default Home