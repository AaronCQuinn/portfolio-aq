import React from 'react'
import Card from '../Card'

const CardContainer = () => {
    return (
        <div className='xs:px-3 sm:px-0 flex flex-col items-center justify-around md:flex-row my-16 xs:gap-5 md:gap-3'>
            <Card 
              title={'Housing Classifieds'} 
              tech={["React", "Firebase", "Google Cloud", "React-router-dom"]} 
              links={{ghLink: 'https://github.com/AaronCQuinn/housing-classifieds', liveLink: 'https://effervescent-basbousa-77ae4b.netlify.app/'}}
              desc={`A React application developed with a mobile-first view, alongside of Firebase V9. Users may authenticate via their Google account and then proceed to post, view, and contact others about their housing offers.`}
            />
            <Card 
              title={'Twitter Clone'} 
              tech={["React", "Socket.IO", "Node.js", "MongoDB"]} 
              links={{ghLink: 'https://github.com/AaronCQuinn/twitter-clone', liveLink: ''}}
              desc={`My own spin on the social platform Twitter. Includes all the functionality you've come to know from Twitter.`}
            />
            <Card 
              title={'Aarons Adoptions'} 
              tech={["NodeJS", "Bootstrap", "ExpressJS", "MongoDB"]} 
              links={{ghLink: 'https://github.com/AaronCQuinn/Adoption-Website', liveLink: 'https://www.aaronsadoptions.ca'}}
              desc={`A mock adoption services website where the administrators to the website can easily control the flow of incoming and out going foster animals. My largest project to date, heavily focused on the backend.`}
            />
        </div>
    )
}

export default CardContainer