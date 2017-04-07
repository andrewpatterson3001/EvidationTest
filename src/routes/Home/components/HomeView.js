import React from 'react'
import { Link } from 'react-router'

export const HomeView = () => (
  <div>
    <h2>Voluntary Participation</h2>
    <p>Participation in this study is voluntary. If you do not wish to participate, there will be no penalty of any kind.</p>
    <div/>
    <p>To confirm your intent to enroll in this study, please complete the form below.</p>
    <div/>

    <form>
      First Name<br/>
      <input type="text" placeholder="John" name="firstName"/><br/>
      Last Name<br/>
      <input type="text" placeholder="Doe" name="lastName"/><br/>
      What city were you born in?<br/>
      <input type="text" placeholder="City Name" name="cityName"/><br/>
      <input type="checkbox" name="consented"/> I consent to participate in the study<br/>
      <button><Link to='/search' activeClassName='route--active'>Complete the form to continue enrollment</Link></button>
    </form>
  </div>
)

HomeView.propTypes = {
  firstName   : React.PropTypes.string,
  lastName    : React.PropTypes.string,
  cityName    : React.PropTypes.string,
  consented   : React.PropTypes.bool
}

export default HomeView
