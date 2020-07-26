import Head from 'next/head'
// import '@fortawesome/fontawesome-free/css/all.css';
// import '@fortawesome/fontawesome-free/js/fontawesome';
// import '@fortawesome/fontawesome-free/js/solid';
// import '@fortawesome/fontawesome-free/js/regular';
// import '@fortawesome/fontawesome-free/js/brands';

const Layout =(props) => {
  return(  
  <div>
      <Head>
        <title>ArittGray-Epoxy floor/wall installer training</title>
      </Head>
      {props.children}
    
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>)

}

export default Layout