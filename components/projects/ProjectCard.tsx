import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { EllipsisVertical } from 'lucide-react'
import { getNameInitials } from '@/lib/extractNameInitials'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

type ProjectCardProps = {
    project: Project
}

const ProjectCard = (props: ProjectCardProps) => {
    const { project } = props
    const { name, description, owner, date } = project

    return (
        <Card className='h-52 flex flex-col justify-between relative'>
            <Dialog>
                <CardHeader>
                    <CardTitle className='flex justify-between'><span>{name}</span>
                        <DropdownMenu>
                            <DropdownMenuTrigger><EllipsisVertical /></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DialogTrigger className='w-full'> <DropdownMenuItem>Info</DropdownMenuItem> </DialogTrigger>
                                <DropdownMenuItem disabled>Edit</DropdownMenuItem>
                                <DropdownMenuItem disabled>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu></CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                {/* <CardContent>
                                    <p>Card Content</p>
                                </CardContent> */}

                <CardFooter className='flex justify-between items-center mt-auto'>
                    <span className='inline-flex items-center text-sm'>
                        owner: <Avatar className='h-5 w-5 mx-2'>
                            <AvatarImage src={owner.avatar} />
                            <AvatarFallback>{getNameInitials(owner.name)}</AvatarFallback>
                        </Avatar>
                    </span>
                    <span className='flex-inline items-center'>
                        {date}
                    </span>
                </CardFooter>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{name}</DialogTitle>
                        <DialogDescription>
                            {description}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </Card>
    )
}

export default ProjectCard