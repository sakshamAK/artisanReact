import React, { Fragment } from 'react'
import { CardsList, GridDisplay, SlideShow } from '../Components/'

export const Home = () => {
    return (
        <Fragment>
            <SlideShow />
            <CardsList />
            <GridDisplay />
        </Fragment>
    )
}