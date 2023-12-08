import { BiCalendar, BiTrash } from "react-icons/bi"
import Search from "./components/Search"
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import appointmentList from "./data.json"

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <BiCalendar className="mr-2 inline-block text-red-400 align-top" />Your Appointments</h1>
        <Search />
        <AddAppointment />
        <ul className="divide-y divide-gray-200">
        { appointmentList
          .map(appointment => (
            <AppointmentInfo 
              key = { appointment.key }
              appointment = {appointment}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default App;