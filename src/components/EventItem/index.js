// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItemDetails, setActive, isActive} = props
  //   console.log(eventItemDetails)
  const {id, location, name, imageUrl} = eventItemDetails
  const isActiveImg = isActive ? 'border' : null

  const onClickBtnImg = () => {
    setActive(id)
  }

  return (
    <li className="event-item-container">
      <button type="button" className="btn" onClick={onClickBtnImg}>
        <img
          src={imageUrl}
          alt="event"
          className={`event-img ${isActiveImg}`}
        />
      </button>

      <p className="event-name">{name}</p>
      <p className="loc">{location}</p>
    </li>
  )
}
export default EventItem
