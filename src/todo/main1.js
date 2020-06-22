import React from 'react'
import Head from './self/heading'
import Name from './self/title'
import Details from './self/address'
import Academic from './self/footer'
import Clock from './self/clock'
import Tab from './self/button'

const main1 = () => {
    const data = {
        name: 'karan',
        locality: {
            soc: 'Bk-Park',
            area: 'Althan',
            city: 'Surat'
        },
        study: {
            degree: 'BE',
            college: 'SCET'
        },

        movie : {
            name: 'Piku',
            releaseData: '2015',
            rating: '5 star',
            cast: [
                {name:'Amitabh'},
                {name: 'Deepika'},
                {name: 'Irrfan'}
        ]
    }
    }
    return <div>
        <Head h='My Self' /> 
        <Tab button1={1} button2={2} button3={3}/>
        <Clock />
        <Name t={data.name} movie={data.movie} actors={data.movie.cast}/>
        <Details locality={data.locality} />
        <Tab button1={4} button2={5} button3={6}/>
        <Academic std={data.study} />
        <Tab button1={7} button2={8} button3={9}/>
    </div>
}

export default main1


