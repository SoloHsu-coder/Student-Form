import { useState} from "react";
import './StdInputForm.css';
const StdInputForm =()=>{
    const[input,setInput] = useState({
        name:'',
        nrc:'',
        gender:'Male',
        address:'',
        major:'ICT',
        academicYear:'',
        attendanceYear:'',
    })
    const onHandleSubmit =(e)=>{
        e.preventDefault();
        console.log(input);
        
    }
    const onInputChange =(event)=>{
        const{name,value} = event.target;
        setInput((prevState)=>({
            ...prevState,[name]:value
        }));

    }
    return(

        <form onSubmit ={onHandleSubmit}>
            <div className="row">
               <div className="col-25">
                    <label>Name: </label>
                       
                </div>
                <div className="col-75">
                    <input type="text" 
                        name = "name"
                        value = {input.name}
                        onChange ={onInputChange}/>
                </div>
            </div>
           
            <div className ="row">
                <div className="col-25">
                    <label>Your NRC Number:</label>
                </div>
                <div className="col-75">
                    <input type ="text" name ="nrc"  value={input.nrc} onChange={onInputChange}/><br/>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label>Gender:</label>
                </div>
                <div className="col-75">
                    <input type="radio" name="gender" value ="Male" checked ={input.gender ==="Male"} onChange={onInputChange}/>Male<br/>
                    <input type="radio" name="gender" value="Female" onChange={onInputChange}/>Female<br/>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label>Address:</label>
                </div>
                <div className="col-75">
                    <textarea value={input.address} name ="address" onChange={onInputChange}/>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label>Select Your Major:</label>
                </div>
                <div className="col-75">
                    <input type = "radio" id = "ICT" name ="major" value="ICT" checked ={input.major ==="ICT"} onChange={onInputChange}/>
                        <label>ICT</label><br/>
                    <input type = "radio" id = "IST" name ="major" value="IST" onChange={onInputChange}/>
                        <label>IST</label><br/>
                    <input type = "radio" id = "CE" name ="major" value="CE" onChange={onInputChange}/>
                        <label>CE</label><br/>
                    <input type = "radio" id = "AME" name ="major" value="AME" onChange={onInputChange}/>
                        <label>AME</label><br/>
                    <input type = "radio" id = "ECE" name ="major" value="ECE" onChange={onInputChange}/>
                        <label>ECE</label><br/>
                    <input type = "radio" id = "PrE" name ="major" value="PrE" onChange={onInputChange}/>
                        <label>PrE</label><br/>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label>Select Your Academic Year:</label>
                </div>
                <div className="col-75">
                    <select name ="academicYear" onChange={onInputChange}>
                    
                        <option value= "2010-2015">2010-2015</option>
                        <option value="2015-2021">2015-2021</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label>Select Your Attendance Year:</label>
                </div>
                <div className="col-75">
                    <select name ="attendanceYear" onChange={onInputChange}>
                        <option value="First Year">First Year</option>
                        <option value="Second Year">Second Year</option>
                        <option value="Third Year">Third Year</option>
                        <option value="Fourth Year">Fourth Year</option>
                        <option value="Fifth Year">Fifth Year</option>
                        <option value="Final Year">Final Year</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <button type = "submit">Submit</button>
            </div>
        
        </form>
    )
}
export default StdInputForm;