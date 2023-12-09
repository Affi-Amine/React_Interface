import { useState, useCallback, useEffect } from "react";
import { BiCalendar, BiTrash } from "react-icons/bi"
import Search from "./components/Search"
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";

function App() {
  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");
  
  const filteredAppointments = appointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase()) 
      )
    }
  )

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then(response => response.json())
      .then(data => {
        setAppointmentList(data);
      })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <BiCalendar className="mr-2 inline-block text-red-400 align-top" />Your Appointments</h1>
        <Search query = {query}
          onQueryChange={myQuery => setQuery(myQuery)}
        />
        <AddAppointment />
        <ul className="divide-y divide-gray-200">
        { filteredAppointments
          .map(appointment => (
            <AppointmentInfo 
              key = { appointment.key }
              appointment = {appointment}
              onDeleteAppointment={
                appointmentId => 
                  setAppointmentList(appointmentList.filter(appointment => appointment.id !== appointmentId)) 
              }
            />
          ))
        }
      </ul>
    </div>
  );
}

export default App;