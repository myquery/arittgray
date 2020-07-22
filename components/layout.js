import Head from 'next/head'

const Layout =(props) => {
  return(  
  <div>
      <Head>
        <title>ArittGray-Epoxy floor/wall installer training</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.children}
    
    </div>)

}

export default Layout