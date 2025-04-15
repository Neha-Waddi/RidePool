import './Footer.css'
import Helpcenter from './Helpcenter';


const listItems = [
  {
    carpool_que: "How do I ride a carpool ride?",
    carpool_ans:
      "The app will match you with a driver heading in the same direction, often showing other passengers and pricing details. Choose a ride that fits your schedule and confirm the booking.",
  },
  {
    carpool_que: "How do I publish a carpool ride?",
    carpool_ans:
      "Enter your starting location and destination, along with the date and time of departure. If needed, you can also add intermediate stops for pickups. Specify the number of seats available and the price per seat if applicable. Provide any additional details, such as luggage space or ride preferences (e.g., music or conversation level).",
  },
  {
    carpool_que: "How do I cancel my carpool ride?",
    carpool_ans:
      "To cancel a carpool ride in this app, log in and go to the My Rides section. Find the ride you want to cancel and tap on it to view the details. Look for the Cancel Ride option and select it. A confirmation message may appear to ensure you want to proceed.",
  },
  {
    carpool_que: "What are the benefits of traveling by carpool?",
    carpool_ans:
      "Traveling by carpool offers several benefits. It is an eco-friendly option, as fewer cars on the road mean reduced carbon emissions. Passengers can enjoy a stress-free journey by sharing driving responsibilities or relaxing during the ride. Carpooling also promotes social interaction, allowing people to network or make new friends.",
  },
  {
    carpool_que: "How much does a carpool ride cost?",
    carpool_ans:
      "The cost of a carpool ride typically depends on several key factors, including fuel prices and distance. Fuel prices directly impact the overall cost, as higher fuel costs can lead to increased ride prices. Distance also plays a significant role; longer trips generally cost more due to the greater amount of fuel consumed.",
  },
  {
    carpool_que: "How do I start carpooling?",
    carpool_ans:
      "To start carpooling, first, find a reliable carpool service or app, such as BlaBlaCar or Quick Ride, that suits your needs. Create an account by providing your name, contact information, and payment method if required.",
  },
];
function Footer() {

  return (
    <>
      <div>
      <Helpcenter listItems={listItems} />;
      </div>
    </>
  )
}

export default Footer