import React from 'react'
import Profile from './Profile'
import OrderHistory from './OrderHistory'
import TermsandCondition from './TermsandCondition'

const IndexUser = () => {
  return (
<>
<div className=" md:flex-row md:space-x-4 w-full mx-auto ">
  <div className="w-full md:w-5/6 mb-4 md:mb-0 mx-auto">
    <Profile />
  </div>
  <div className="w-full mx-auto">
    <OrderHistory />
  </div>
</div>

</>





  )
}

export default IndexUser
