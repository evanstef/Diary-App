"use client"

import { formatDistanceToNow } from 'date-fns'
import { id } from 'date-fns/locale'

type ParamsProps ={
    past_time : any
}

import React from 'react'

const GetPastTime = ({past_time} : ParamsProps) => {
  const pastTime = formatDistanceToNow(past_time, {
    addSuffix : true,
    locale : id
  })

  return (
    <div>{pastTime}</div>
  )
}

export default GetPastTime