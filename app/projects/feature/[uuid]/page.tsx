import FeaturePage from '@/components/feature'
import React from 'react'

type Props = {
    params: {
        uuid: string
    }
}

const Page = ({ params: { uuid } }: Props) => {

    return (
        <FeaturePage uuid={uuid} />
    )
}

export default Page