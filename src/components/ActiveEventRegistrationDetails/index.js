// Write your code here
import './index.css'

const consonants = {
  case1: 'YET_TO_REGISTER',
  case2: 'REGISTERED',
  case3: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const noActive = () => (
    <p className="paragraph">
      Click on an event, to view its registration details
    </p>
  )

  const yetToRegistered = () => (
    <div className="a-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="image"
      />
      <p className="para">
        A live performance brings so much to your relationship with dance
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )

  const Registered = () => (
    <div className="a-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="Registered"
        className="image"
      />
      <h1 className="heading">You have already registered for the event</h1>
    </div>
  )

  const registrationClosed = () => (
    <div className="a-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="image"
      />
      <h1 className="heading">Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  //   console.log(props)
  const {activeEvent} = props
  const renderActiveEvent = () => {
    switch (activeEvent) {
      case consonants.case1:
        return yetToRegistered()
      case consonants.case2:
        return Registered()
      case consonants.case3:
        return registrationClosed()

      default:
        return noActive()
    }
  }
  return <div className="active-container">{renderActiveEvent()}</div>
}

export default ActiveEventRegistrationDetails
