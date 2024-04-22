import { SignUp } from "@clerk/nextjs";

import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center items-center pt-24">
        <SignUp />
    </div>
  )
}

export default page