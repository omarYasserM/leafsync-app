import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const ProjectCreationForm = () => {
    return (
        <div className=' flex flex-col gap-3 p-1'>
            <Input placeholder='Workspace Name' />
            <Textarea placeholder='Workspace Description' />
            <Button>Add Workspace</Button>
        </div>
    )
}

export default ProjectCreationForm