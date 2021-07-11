import React, { useState } from 'react';
import { Button} from 'react-bootstrap'
import { useHistory, useParams} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux'
import { add } from "../Actions/BookingActions"
import DatePicker from 'react-datepicker';
import '../Styles/ticketbooking.css'
import { addDays} from 'date-fns';

/***** Ticket booking page *****/


const TicketBookingDetail = ({add}) => {
    const [time, setTime] = useState("");
    const [tickets, setNum] = useState("");
    const [date, setDate] = useState(new Date());
    let history = useHistory();
    let { name } = useParams();

    const onFormSubmit = (e) =>
    {
        e.preventDefault();
        history.push('/finalconfirmation') 
    }
    
  const handleTimeChange = (e) => {
    setTime(e.target.value);
    }

  const handleDropdownChange = (e) => {
    setNum(e.target.value);
    }

  const handleDateChange = date => {
    console.log('date:', date)
    setDate(Date.parse(date));
    console.log('date1:', date)

  }
  

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log('in submit')
        const date1 = date
        console.log('date1',typeof(date1))
        const movie = name

        const input = {
          movie,
          date,
          time,
          tickets,
        }
  
        add(input);
        setTime("");
        setNum("");  
        setDate("");
        history.push('/finalconfirmation',{ input })   
       }

    return(
      <div>
        <h2>Select Date, Time and Number of seats to book your tickets</h2>
      <form onSubmit={ onFormSubmit } >
            <div className="formtext">
                <label className="labeltext" style={{fontSize:'15px'}}> Movie </label>
                <p style={{fontSize:'15px'}}>{name}</p>
            </div>
            <br/>
            <div className="formtext">
            <label className="labeltext" style={{fontSize:'15px'}}>Select movie date</label>
                  <DatePicker
                    selected={ date }
                    onChange={ handleDateChange }
                    name="startDate"
                    dateFormat="MM/dd/yyyy"
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 13)}
                  />               
            </div>
            <br/>
            <div className="formtext">
                 <div>
                      <label className="labeltext"  style={{fontSize:'15px'}}>Select movie timing</label>
                        <select id="dropdown" required onChange={handleTimeChange}>
                          <option value="">Select</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                          <option value="7:00 PM">7:00 PM</option>
                          <option value="10:00 PM">10:00 PM</option>
                        </select>
                </div>   
            </div>
            <br/>
            <div className="formtext">
                <div>
                      <label className="labeltext"  style={{fontSize:'15px'}}>Chose number of seats</label>
                        <select id="dropdown" required onChange={handleDropdownChange}>
                          <option value="">Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                </div>
                <Button style={{marginTop:10, marginBottom:10,padding: 5, width: 150, fontSize: 20}} outline-color="primary" size="lg" 
                onClick={handleSubmit}>Book</Button>
            </div>
      </form>
      </div>
    )
}


const mapStateToProps = (state) => ({ })

const mapDispatchToProps = (dispatch) => ({
    add : (input) => {
        dispatch(add(input));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketBookingDetail);