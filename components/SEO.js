import Head from 'next/head'
import React from 'react'

export default function SEO(props) {
  return (
    <Head>
        {props.title && <title>{props.title}</title>}
        {props.description && <meta name='content' description={props.description}></meta>}
    </Head>
  )
}
