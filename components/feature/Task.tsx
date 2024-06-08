"use client";

import React from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Circle, X } from 'lucide-react'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { CheckedState } from '@radix-ui/react-checkbox'
import dayjs from 'dayjs';

type TaskProps = {
    task: Task
}
const Task = (props: TaskProps) => {
    const { title, due_date,status } = props?.task


    return (
        <li className='flex items-center border rounded-md gap-2 py-1 px-3'>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Circle className='text-primary w-5 h-5'/>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Status</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                        checked={status === 'todo'}
                        onCheckedChange={()=>{}}
                    >
                        Todo
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                        checked={status === 'in-progress'}
                        onCheckedChange={()=>{}}
                    >
                        In Progress
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                        checked={status === 'done'}
                        onCheckedChange={()=>{}}
                    >
                        Done
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <span className='flex-1'>{title}</span>
            <span className='text-sm text-muted-foreground'>{dayjs(due_date).format('MMM dd YYYY')}</span>
            <Avatar className='h-7 w-7'>
                <AvatarFallback className='h-7 w-7'>
                    OY
                </AvatarFallback>
            </Avatar>
            <button className='hover:bg-destructive rounded-full flex h-5 w-5 items-center justify-center transition-colors'>
                <X size={12} className='text-foreground hover:text-destructive-foreground' />
            </button>

        </li>
    )
}

export default Task