import React from 'react'
import ProjectItem from '@/components/landing/ui/project-item'
import passport from '@/public/images/passport.png'
import whitepaper from '@/public/images/whitepaper.png'
import environment from '@/public/images/environment.png'

const Projects = () => {
  return (
    <div className='px-4 lg:px-12 md:py-4 flex flex-col mb-2 md:mb-8'>
      <ProjectItem
        title='Hydrogen Production and Carbon Tracking (HyPACT)'
        description='In this project MCG focuses on the maritime shipping digitisation and decarbonisation, by leveraging cutting-edge technologies in AI and blockchain.'
        imageSrc={passport}
        imageAlt='Product Passport Page'
        imageClassNames='border-2 border-slate-950'
        link='https://www.linkedin.com/pulse/mcg-launches-hypact-pioneering-13m-project-green-hydrogen-supply-fwgge/?trackingId=Doe3hnwsyOK6%2FEHW%2BLmfvQ%3D%3D'
      />
      <ProjectItem
        title='IoT and Blockchain integrated Platform for maritime shipping industry'
        description='MCG focuses on the maritime shipping digitisation and decarbonisation, by leveraging cutting-edge technologies in AI and blockchain.'
        imageSrc={whitepaper}
        imageAlt='MCG Whitepaper'
        imagePosition='left'
        link='https://www.cranfield.ac.uk/som/research-projects/iot-blockchain-integrated-platform-for-maritime-shipping-industry'
      />
      <ProjectItem
        title='Environmental Sustainability Commitment'
        description='MCG is committed to keep environmental sustainability.'
        imageSrc={environment}
        imageAlt='Environmental Sustainability Commitment'
        link=''
      />
    </div>
  )
}

export default Projects