import React from 'react'
import BookingForm from './bookingForm'
// import CabDetails from './CabDetails'
import Card from './Card'
import Hero from './Hero'
import QuickSelection from './QuickSelection'

const Index = () => {
    return (
        <div className='mb-20' style={{ fontFamily: 'Nunito Sans' }} >
            <h1>
                <Hero/>
              <BookingForm/>  
              <QuickSelection/>
              <Card/>
            </h1>
        </div>
    )
}

export default Index