import React from 'react'
import styles from "./pagenotfound.module.css"

export const PageNotFound = () => {
    return (
        <div className={`${styles.pagenotfound}`}>
            <div class="alert warning-ol">
                <i class="material-icons">warning</i>
                <b>PAGE NOT FOUND</b>
            </div>
        </div>
    )
}
