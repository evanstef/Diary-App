import React from 'react'


type WrapperProps = {
    title? : string,
    children? : React.ReactNode
}

const Wrapper = ({title, children} : WrapperProps ) => {
  return (
    <section className='container mx-auto px-4'>
        <h1 className='text-center text-3xl font-bold mb-8'>{title}</h1>
        {children}
    </section>
  )
}

export default Wrapper