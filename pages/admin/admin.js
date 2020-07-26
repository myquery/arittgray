import Link from 'next/link'
import Router from 'next/router';
import Layout from '../../components/layout'
import 'isomorphic-fetch'
import { loadDatabase } from "../../lib/db"


function Admin({ props }) {
  return (<Layout>

    <div className="container">
      <div className="header-container">
        <div >
          <Link href="/"><a><img className="aritt-logo" src="../images/aritlogo.png" /></a></Link>
        </div>
        <nav><Link href="/login"><a onClick={() => Router.push('/')}>Logout</a></Link></nav>
      </div>
      <div className="list-reg">
        <h1>List of Registrants</h1>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Location</th>
                <th>Phone</th>
                <th>Training Interest</th>
              </tr>
            </thead>
            {
              props.map((data, key) => {
                return <tbody key={key}>

                  <tr>
                    <td>{data.epoxy_training_fullname}</td>
                    <td>{data.epoxy_training_email}</td>
                    <td>{data.epoxy_training_gender}</td>
                    <td>{data.epoxy_training_state}</td>
                    <td>{data.epoxy_training_interest}</td>
                    <td>{data.epoxy_training_phone}</td>
                  </tr>


                </tbody>
              })
            }

          </table>
        </div>
      </div>



      <style jsx>{`
      a{
        font-size:1rem;
        text-decoration:none;
        color:#333;
        font-size:0.9rem;
    
      }
      a:hover{
        font-size:1rem;
        color:#ddd;
      }

        .container {
          min-width:100%;
          min-height: 100vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color:#dedede;
        
        }
        .list-item{
            display:inline-block
        }
        .list-item li{
           list-style:none
        }
        .header-container{
          display:flex;
          flex-direction:row;
          justify-content: space-between;
          align-items: center;
          width:100%;
          height:80px;
          padding:1rem;
          position:absolute;
          top:0;
          z-index:9999;
          background:#fff;
          -webkit-box-shadow: 0 1px 5px 0 #333; 
          -moz-box-shadow: 0 1px 5px 0 #333;
          box-shadow: 0 1px 5px 0 #333;
        }
        .aritt-logo{
          width:250px;
          height:90px;
        }
        .list-reg{
            width:70%;
            display:flex;
            justify-content:center;
            align-item:top;
            flex-direction:column;
            background:#fff;
            -webkit-box-shadow: 0 1px 50px 0 #ccc; 
            -moz-box-shadow: 0 1px 50px 0 #ccc;
            box-shadow: 0 1px 50px 0 #ccc;
            margin:10px 0;
            border-radius:5px;
            padding:2rem;
        }
        .table-container{
          width:100%;
          font-size:1rem;
     
      }
      .table-container table{
        width:100%;
        font-size:1rem;
   
    }
    
          @media (max-width: 600px) {
              h1{
                  font-size:1rem;
              }
       
             .table-container{
                  width:90%;
                  overflow:auto;
                  font-size:0.7rem;
             
              }
          .container {
            min-width:100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color:#dedede;
           
          }
          .header-container{
            display:flex;
            flex-direction:row;
            justify-content: space-between;
            align-items: center;
            width:100%;
            height:60px;
            padding:1rem;
            position:absolute;
            top:0;
            z-index:9999;
            background:#fff;
            -webkit-box-shadow: 0 1px 5px 0 #333; 
            -moz-box-shadow: 0 1px 5px 0 #333;
            box-shadow: 0 1px 5px 0 #333;
          }
          .list-reg{
            width:90%;
            display:flex;
            justify-content:center;
            align-item:top;
            flex-direction:column;
            background:#fff;
            -webkit-box-shadow: 0 1px 50px 0 #ccc; 
            -moz-box-shadow: 0 1px 50px 0 #ccc;
            box-shadow: 0 1px 50px 0 #ccc;
            margin:10px 0;
            border-radius:5px;
            padding:0.5rem;
        }
    

         .aritt-logo{
            width:150px;
            height:50px;
          }
          .table-container table{
         
            font-size:0.8rem;
       
        }

 
          }
      `}</style>

    </div>
  </Layout>
  )

}

Admin.getInitialProps = async (ctx) => {
  let firebase = await loadDatabase();
  let db = firebase.firestore();
  let registrants = db.collection("epoxy-registrants")
  let getRegistrants = await registrants.get()
  if (getRegistrants.empty) {
    console.log("No matching documents.");
    return;
  }

  let data = []
  getRegistrants.forEach((doc) => {
    data.push(doc.data());
  })
  return { props: data };
}


export default Admin;
