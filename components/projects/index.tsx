import React from 'react'
import MaxedWidthContainer from '@/components/common/MaxedWidthContainer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus } from 'lucide-react'
import ProjectsGallery from './ProjectsGallery'
import ProjectCreationForm from './ProjectCreationForm'
import useProjects from '@/data/useProjects'

const Projects = () => {
    // const projects = useProjects()
    const tabs = ['work', 'personal']
    

    const personalProjects = projects.filter(project => project.owner.name === 'Omar Yasser')
    const workProjects = projects.filter(project => project.owner.name !== 'Omar Yasser')

    return (
        <MaxedWidthContainer className='flex flex-col'>
            <Tabs defaultValue={tabs[0]} className="w-full">
                <TabsList>
                    {tabs.map((tab) => (
                        <TabsTrigger value={tab} key={tab}>
                            {tab}
                        </TabsTrigger>
                    ))}
                    <TabsTrigger value='addWorkSpace' className='px-2 '>
                        <Plus />
                    </TabsTrigger>
                </TabsList>

                {tabs.map((tab) => (
                    <TabsContent value={tab} key={tab} >
                        {(tab === 'work') && <ProjectsGallery projects={workProjects} />} 
                        {(tab === 'personal') && <ProjectsGallery projects={personalProjects} />}
                    </TabsContent>
                ))}
                <TabsContent value='addWorkSpace'>
                    <ProjectCreationForm />
                </TabsContent>
            </Tabs>
        </MaxedWidthContainer>
    )
}

export default Projects