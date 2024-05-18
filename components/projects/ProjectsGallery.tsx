import React from 'react'
import ProjectCard from './ProjectCard'

type ProjectsGalleryProps = {
    projects: Project[]
}
const ProjectsGallery = (props: ProjectsGalleryProps) => {
    const { projects } = props
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </div>
    )
}

export default ProjectsGallery