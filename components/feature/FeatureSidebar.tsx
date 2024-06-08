import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const FeatureSidebar = () => {
    const features = ['Feature 1', 'Feature 2', 'Feature 3']
    return (
        <aside className='flex-1 w-full max-w-60 min-h-96 fixed'>

            <Card className='h-full flex flex-col'>
                <CardHeader>
                    <CardTitle>Feature</CardTitle>
                </CardHeader>

                <CardContent>
                    <ul>
                        {
                            features.map((feature) => (
                                <li className='hover:bg-muted p-2 rounded-md cursor-pointer' key={feature}>{feature}</li>
                            ))
                        }
                    </ul>
                </CardContent>

                <CardFooter className='mt-auto'>
                    <Button className='btn btn-primary w-full'>Add Feature</Button>
                </CardFooter>
            </Card>
        </aside>
    )
}

export default FeatureSidebar