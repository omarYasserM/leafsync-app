import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import dayjs from 'dayjs'
import Task from './Task'
import useFeature from '@/data/useFeature'

const Feature = () => {
    const feature = useFeature()


    return (
        <main className='flex flex-col gap-4 w-full'>
            <h1 className='text-2xl'>Feature</h1>
            <Card>
                <CardContent className='py-4 space-y-4'>
                    {
                        feature?.statuses.map((status) => (
                            <div key={status} className='border-b border-b-primary/35 pb-2 last:border-b-0'>
                                <h2>{status}</h2>
                                <ul className='flex flex-col gap-3 py-4'>
                                    {
                                        feature?.tasks
                                            .filter((task) => task.status === status)
                                            .map((task) => (
                                                <Task key={task.id} task={task} />
                                            ))
                                    }
                                </ul>
                            </div>
                        ))

                    }

                </CardContent>
            </Card>
        </main>
    )
}

export default Feature