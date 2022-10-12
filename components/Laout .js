import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head'

const Laout  = ({children,title}) => {
    return (
        <div>
         <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>
      </Head>


            <Header/>
            {
              children  
            }
            <Footer/>
        </div>
    );
};

export default Laout ;