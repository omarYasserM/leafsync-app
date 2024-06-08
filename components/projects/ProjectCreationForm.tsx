import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const ProjectCreationForm = () => {
    return (
        <Card className='mx-auto max-w-xl mt-10'>
            <CardHeader>
                <CardTitle className='text-lg'>Create New Project</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-3 p-1'>
                <div className='flex flex-col gap-3 p-1'>
                    <Input placeholder='Project Name' />
                    <Textarea placeholder='Project Description' />
                </div>
            </CardContent>
            <CardFooter>
                <Button className='btn btn-primary w-full'>Add Project</Button>
            </CardFooter>
        </Card>
      
    )
}

export default ProjectCreationForm