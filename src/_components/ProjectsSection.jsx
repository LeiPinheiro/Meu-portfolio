'use client'
import edit from "./ProjectsSection.module.css"
import ProjectCards from "./ProjectCards"
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import AberturaSec from "./AberturaSec";



function ProjectsSection() {
    return ( 
        <div className={edit.cardsContainer} id="projetos">
            <ScrollAnimation animateIn="animate__animated animate__slideInUp" className="teste" offset={0} delay={0} animateOnce="true"> 
            <AberturaSec p1="Meu melhores" p2="Projetos"/>
                <div className={edit.teste}>
                    <ProjectCards imageURL="https://placehold.co/300x200" p1="Texto" p2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"/>
                    <ProjectCards imageURL="https://placehold.co/300x200" p1="Texto" p2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"/>
                    <ProjectCards imageURL="https://placehold.co/300x200" p1="Texto" p2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"/>
                    <ProjectCards imageURL="https://placehold.co/300x200" p1="Texto" p2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"/>
                </div>
            </ScrollAnimation>        
        </div>   
    )
}

export default ProjectsSection