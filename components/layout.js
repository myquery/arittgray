import Head from 'next/head'

const Layout =(props) => {
  return(  
  <div>
      <Head>
        <title>ArittGray-Epoxy floor/wall installer training</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js" ></script>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
      </Head>
      {props.children}
    
    </div>)

}

export default Layout