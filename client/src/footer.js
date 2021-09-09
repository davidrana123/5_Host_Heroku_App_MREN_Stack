import React, {useState} from "react";
import axios from "axios";
 
function Footer() {
    const [input, setInput] = useState({
        title: '',
        content: '',
        phone: '',
        address: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(preInput => {
            return {
                ...preInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newNote = {
            title: input.title,
            content: input.content,
            phone: input.phone,
            address: input.address
        }
        
        axios.post('http://localhost:3001/create', newNote)
    }



    return <div className="container">
        <h1>IF You are intrested Plese Fill Some info...</h1>
        <form>
            <div className="form-group">
                <input onChange={handleChange} name="title" value={input.title} autoComplete="off" placeholder="Enter your Name" className="form-control"></input>
            </div>

            <div className="form-group">
                <input onChange={handleChange} name="phone" value={input.phone} autoComplete="off" placeholder="Enter your Phone number" className="form-control"></input>
            </div>

            <div className="form-group">
                <input onChange={handleChange} name="address" value={input.address} autoComplete="off" placeholder="Enter your full Address" className="form-control"></input>
            </div>

            <div className="form-group">
                <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" placeholder="Enter your Thought" className="form-control"></textarea>
            </div>

            <button onClick={handleClick} className="btn btn-lg btn-info">Add Note</button>
        </form>
    </div>
}
export default Footer;
