import React from 'react'
import ExpenseCard from '../components/ExpenseCard'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='bg-[#141326] min-h-screen '>
      <Navbar/>
      <div className='p-8'>

      <ExpenseCard/>
      </div>
      </div>
  )
}

export default Home