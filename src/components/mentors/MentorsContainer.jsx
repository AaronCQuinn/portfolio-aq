import React from 'react'
import BgText from '../BgText'
import Divider from '../Divider'
import VisibilityWrapper from '../VisibilityWrapper'
import Esteban from './mentor_imgs/Esteban.jpg'
import Shiwei from './mentor_imgs/Shiwei.jpeg'
import Karthik from './mentor_imgs/Karthik.jpg'
import Mentor from './Mentor'

const MentorsContainer = () => {
    return (
    <section id="Mentors">
        <VisibilityWrapper>
                <BgText text={"MY MENTORS"} />

                <div className='mt-4'>
                    <Mentor 
                    imgsrc={Esteban} 
                    title={"Esteban Ricalde - Senior Software Developer, Radient360 Solutions"} 
                    quote={"Aaron and I only worked together for 6 sessions. He is a really hard working and smart developer. I was able to see a significant improvement during that time. The fact he was able to be proficient in React after 6 sessions shows how fast he learns and can adapt to new technologies. Aaron is also very proactive and self-directed. He learnt most of the basic React concepts before we started working together."} 
                    />
                </div>

                <Mentor 
                    imgsrc={Karthik} 
                    title={"Karthik Poomalraj - Software Developer, PointClickCare"} 
                    quote={"Aaron is a great addition to a team who brings great dedication and curiosity towards problem solving. He is a inquisitive individual who shows great excitement towards implementing new technologies."} 
                />

                <Mentor 
                    imgsrc={Shiwei} 
                    title={"Shiwei Han - Software Developer, Verafin"} 
                    quote={"Aaron is an independent learner and eager to put hands down to build things, and also knows when to ask for help when blocked. Aaron had already eastablished a good foundation of learning Java himself before meeting me, which really helped him understand some of the fundamentals of Javascript."} 
                />

        </VisibilityWrapper>
        <Divider />
    </section>
    )
}

export default MentorsContainer