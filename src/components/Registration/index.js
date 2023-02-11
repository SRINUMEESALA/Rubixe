import { useState } from "react"
import "./index.css"


const Registration = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [isRegistered, setIsRegistered] = useState(false)

    const submitForm = (event) => {
        event.preventDefault()
        setIsRegistered(true)
        console.log(name, email, mobile)
    }

    const renderRegisterSuccessView = () => (
        <div className="text-center card d-flex flex-column">
            <img alt="" className="col-6 align-self-center" src="https://img.freepik.com/premium-vector/scalable-flat-illustration-payment-invoice_203633-6550.jpg?w=740" />
            <h1 className="h3 text-secondary">Registration Successful</h1>
        </div>
    )

    return (
        <div className="mt-5 d-flex justify-content-center mb-5">
            <div className="contentCon d-flex justify-content-center">
                {!isRegistered ? (<div className="regCon d-flex justify-content-center border col-8">
                    <div className="col-5 text-center align-self-center">
                        <h1 className="h3">GET IN TOUCH</h1>
                        <p>Please Complete the form and we will get back to you.</p>
                    </div>
                    <div className="col-1 d-flex flex-column justify-content-center"><hr className="horizontalLine bg-secondary" /></div>
                    <form className="formCon col-6 p-3" onSubmit={submitForm}>
                        <div className="m-3">
                            <label className="" required htmlFor="name">Name*</label>
                            <input className="form-control" type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Your Name" required />
                        </div>
                        <div className="m-3">
                            <label className="" required htmlFor="email">Email*</label>
                            <input className="form-control" type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter Your Email" required />
                        </div>
                        <div className="m-3">
                            <label className="" required htmlFor="mobile">Mobile Number*</label>
                            <input className="form-control" type="number" id="mobile" value={mobile} onChange={(event) => setMobile(event.target.value)} placeholder="Enter Your Mobile" required />
                        </div>
                        <div className="m-3">
                            <button type="submit" className="btn registerButton  w-100  text-white">Register Now</button>
                        </div>
                    </form>
                </div>) : (
                    renderRegisterSuccessView()
                )}
            </div>

        </div>
    )
}

export default Registration