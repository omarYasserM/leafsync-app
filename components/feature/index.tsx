import React from 'react'
import MaxedWidthContainer from '../common/MaxedWidthContainer'
import FeatureSidebar from './FeatureSidebar'
import Feature from './Feature'

type FeaturePageProps = {
    uuid: string
}
const FeaturePage = (props: FeaturePageProps) => {
    const { uuid } = props


    return (
        <div className='flex gap-5 w-full'>
            <FeatureSidebar />
            <MaxedWidthContainer>
            <Feature />
            </MaxedWidthContainer>
        </div>

    )
}

export default FeaturePage