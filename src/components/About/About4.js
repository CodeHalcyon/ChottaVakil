import React from 'react'
import AboutCards from './AboutCards'

function About4() {
  return (
    <>
    <div>
        <div className="abt4-container">
            <h1 className=''>What sets us apart?</h1>
            <div className="abt4-cards">
                <AboutCards desc="Through engaging games, interactive challenges, and rewarding experiences, we transform what might otherwise be a mundane educational journey into something exciting and immersive. This not only captures children's attention but also keeps them motivated to explore and learn about their rights. Our gamified approach ensures that children not only acquire essential legal knowledge but also retain it, as they actively participate in the learning process." address="images/gamification.png" heading="Gamification"/>
                <AboutCards desc="Our platform is designed with inclusivity in mind, making it accessible to children from all walks of life. We have worked tirelessly to create a user-friendly and easily navigable platform that accommodates a wide range of devices and internet connectivity levels. Whether a child resides in a bustling city or a remote village, we aim to provide them with the same opportunities to learn about their rights. Our commitment to accessibility is at the core of our mission to bridge the gap in legal education and ensure that no child is left behind." address="images/accesibility.png" heading="Accessibility"/>
                <AboutCards desc="Our mission extends beyond mere education; it centers on empowerment. We firmly believe that knowledge is only the first step towards meaningful change. We aspire to equip children with the confidence, skills, and awareness they need to stand up for their rights and advocate for themselves and their peers." address="images/empowerment.png" heading="Empowerment"/>
            </div>
        </div>
        </div>
    </>
  )
}

export default About4
