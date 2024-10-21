
import TripCard from '@/components/TripCard'
import TripDetail from '@/components/TripDetail'
import trips from '@/data/trips'
import React from 'react'
import { redirect } from 'next/navigation'


function page({ params }) {
  const trip = trips.find((trip) => trip.slug === params.slug)

  if (!trip) redirect("/trips")
  return (
    <div>
      <TripDetail trip={trip}></TripDetail>
    </div>
  )
}

export default page
