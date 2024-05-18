import { cn } from '@/lib/utils'
import React from 'react'

type MaxedWidthContainerProps = React.HTMLAttributes<HTMLDivElement>

const MaxedWidthContainer = (props: MaxedWidthContainerProps) => {
    const { children, className, ...restProps } = props

    const classes = cn('max-w-5xl w-full mx-auto px-4 lg:px-0', className)
    
    return (
        <div className={classes} {...restProps}>
            {children}
        </div>
    )
}

export default MaxedWidthContainer