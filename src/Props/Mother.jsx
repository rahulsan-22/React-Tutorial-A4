import Son from './Son'

const Mother = () => {
  let approval = () => {
    return "Ready for Marriage"
  }
  return <>
    <Son name="Swathi" age={24} isEmployee={true} salary={undefined} hasAttitude={null} hobbies={["Cooking", "Dancing", "Travelling"]} address={{ place: "Mysore", state: "Karnataka" }} fun={approval} />
    <Son name="Monica" age={26} isEmployee={false} salary={undefined} hasAttitude={null} hobbies={["Cooking", "Dancing", "Travelling"]} address={{ place: "Hyderabad", state: "Telangana" }} fun={approval} />
  </>
}

export default Mother