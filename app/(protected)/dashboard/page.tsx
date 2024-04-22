import CreateDiaryForm from '@/app/_components/auth/CreateDiaryForm'
import Wrapper from '@/app/_components/Wrapper'
import React from 'react'

const Dashboard = () => {
  return (
    <Wrapper title="Dashboard">
      <CreateDiaryForm />
    </Wrapper>
  )
}

export default Dashboard