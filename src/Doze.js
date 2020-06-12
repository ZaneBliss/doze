import React, { useState } from 'react'
import Bar from './components/navbar/Navbar'
import WelcomeViews from './components/welcome/WelcomeViews'
import ApplicationViews from './components/ApplicationViews'

const Doze = () => {
    const [hasUser, setHasUser] = useState(sessionStorage.getItem('user'))

    if (!hasUser) {
        return (
          <React.Fragment>
            <WelcomeViews hasUser={hasUser} setHasUser={setHasUser} />
          </React.Fragment>
        )
      } else if (hasUser) {
        return (
          <React.Fragment>
            <Bar hasUser={hasUser} setHasUser={setHasUser} />
            <ApplicationViews />
          </React.Fragment>
        );
      }
}

export default Doze