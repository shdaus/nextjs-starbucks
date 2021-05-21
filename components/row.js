import classnames from 'classnames/bind'

import styles from './row.module.scss'

let cx = classnames.bind(styles)

export default function Row({children, justifyContentCenter, rowReverse , justifyContentSpaceBetween , m1}) {

    const rowClasses = cx({
        row : true,
        ['justify-content-center'] : justifyContentCenter , 
        ['flex-direction-row-reverse'] : rowReverse,
        [ 'justify-content-space-between'] : justifyContentSpaceBetween,
        ['m1'] : m1
    })

    return (
        <div className={rowClasses}>
            {children}
        </div>
    )
}