import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Portfolio from '../components/portfolio'
import SEO from '../components/SEO'

export default function currentportfolio() {
    return (
        <>
            <SEO title='Current Portfolio | KDR Groups'/>
            <Portfolio/>
        </>
    )
}
