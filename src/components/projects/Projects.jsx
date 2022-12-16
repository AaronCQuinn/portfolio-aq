import React from 'react'
import CardContainer from './CardContainer'
import RightBgText from '../BgText'
import Divider from '../Divider'
import VisibilityWrapper from '../VisibilityWrapper'

const Projects = () => {
    return (
        <section id="Projects">
            <VisibilityWrapper>
                <RightBgText text={"MY PROJECTS"} />
                <CardContainer />
                <Divider />
            </VisibilityWrapper>
        </section>
    )
}

export default Projects