import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-nextjs-toast'
// import {default as detect} from 'detect-browser';
import Link from 'next/link'
import Layout from '../components/layout'

import {loadDatabase} from "../lib/db"
// import {mailer} from "../api/mailer"
// const browser = detect();
// {  browser() ? dynamic(() => import( '../api/mailer' )): "dynamic(() => import( './browser' ))"}
import states from './states.js'

export default function Home() {



// const mailer = async () => {
//  let mail =  await mailer(props)
//  return mail;
// } 

 const { register, handleSubmit, watch, errors} = useForm();
  const onSubmit = async (data, e)=> {
    let firebase = await loadDatabase(); 
    let db = firebase.firestore();
    e.target.reset();
    return await db.collection("epoxy-registrants").add(data).then((res)=>{
      toast.notify(`Your Training session is booked`, {
        duration: 5,
        type: "success"
      })
    })
    // .catch((err)=>{
    //   toast.notify(`Something went wrong, Training session can't be booked`)
    // });
  }

//  const execute = async = (data) =>{
//   this.onSubmit(data, e);
//   this.mailer(data);
//  }

  return (
    <Layout>
     
    <div className="container">
 

      {/* <main> */}
    
     
          <div className="epoxy-bkg_1">
        <h1>BE A CERTIFIED EPOXY 3D FLOOR/WALL INSTALLER IN 2 DAYS </h1>
        <h2>Be Part of the practical Training!</h2>

        <div className="epoxy_images">
          <img src="../images/epoxy_training_1.jpeg"/>
          <img src="../images/epoxy_training_2.jpeg"/>
          <img src="../images/epoxy_training_3.jpeg"/>
          <img src="../images/epoxy_training_4.jpeg"/>
          <img src="../images/epoxy_training_5.jpeg"/>
          <img src="../images/epoxy_training_6.jpeg"/>
        </div>
            </div>
            <div className="arrow">
              <a href="#form"><span className="fa fa-arrow-down center"></span></a>
              
            </div>
          <div className="epoxy-bkg_2">
          {/* <Link href="/login"><button>Login</button></Link> */}
        <form className="epoxy-form" onSubmit={handleSubmit(onSubmit)}>
             <ToastContainer align={"center"} position={"bottom"}/>
                <h3>Epoxy Installer Training Registration</h3>
                <label htmlFor="epoxy_training_fullname">Full name:
              <input 
                type="text" 
                name="epoxy_training_fullname" 
                placeholder="Your Full name" 
                id="epoxy_training_fullname"
                ref={register({ required: true })} />
                {errors.epoxy_training_fullname && <span>This field is required</span>}
            </label>
              <label htmlFor="epoxy_training_email">Email:
              <input type="email" 
                     placeholder="Your Email" 
                     id="epoxy_training_email"
                     name="epoxy_training_email"
                     ref={register({ required: true })} />
                     {errors.epoxy_training_email && <span>This field is required</span>}
              </label> 
              <label htmlFor="epoxy__training_gender"> Gender:
              <select 
                type="text" 
                placeholder="gender" 
                id="epoxy_training_gender"
                name="epoxy_training_gender"
                ref={register({ required: true })} >
                <option value="">-Select Gender-</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
           
              {errors.epoxy_training_gender && <span>This field is required</span>}
             </label>
             <label htmlFor="epoxy__training_state"> State:
             <select 
                type="text" 
                placeholder="state" 
                id="epoxy_training_state"
                name="epoxy_training_state"
                ref={register({ required: true })} >
                  {
                    // console.log(states)
                  states.map((state)=> {
                    return <option key={state}>{state}</option>
                  })
                }
              </select>
              </label>
              <label htmlFor="epoxy_training_phone">Phone number
                <input 
                id="epoxy_training_phone" 
                type="tel" 
                placeholder="Phone Number"
                name="epoxy_training_phone"
                ref={register({ required: true })}/>
                 {errors.epoxy_training_phone && <span>This field is required</span>}
                </label>
              <label htmlFor="epoxy_training_interest">Training interested in
              <span id="form"></span>
              <select 
                type="text" 
                id="epoxy_training_interest"
                name="epoxy_training_interest"
                ref={register({ required: true })} >
                <option value="">-Select Training interest-</option>
                <option value="3d_epoxy_floor">3D epoxy floor installation</option>
                <option value="3d_epoxy_wall">3D wall installation</option>
                <option value="3d_ceiling_stretch">3D ceiling Stretch</option>
                <option value="3d_epoxy_flakes">3D epoxy flakes</option>
                <option value="3d_mettalic_floor">3D metallic floor/ walls</option>
                </select>
                {errors.epoxy_training_interest && <span>This field is required</span>}
                </label>
                <button type="submit">Register</button>
                </form> 
            
            
          </div>
            {/* <script src="/__/firebase/7.16.1/firebase-app.js"></script>

            <script src="/__/firebase/7.16.1/firebase-analytics.js"></script>

            <script src="/__/firebase/init.js"></script> */}

     
        

      {/* </main> */}

      <style jsx>{`

        .container {
          min-width:100%;
          min-height: 100vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color:#dedede;
        
        }
        .epoxy-bkg_1{
          display:flex;
          justify-content: center;
          align-items: center;
          flex-direction:column;
          width:100vw;
          min-height: 100vh;
          clip-path: polygon(0 0, 86% 0, 100% 100%, 0% 100%);
          background-color:#000;
          background: linear-gradient(rgba(17, 45, 78, 0.7),rgba(17,45,78,0.7)),url("../images/epoxy_training_8.jpeg") no-repeat;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          -webkit-box-shadow: 0 20px 10px 0 #000; 
          -moz-box-shadow: 0 20px 10px 0 #000;
          box-shadow: 0 20px 10px 0 #000;
          }

        .epoxy-bkg_1 h1{
          top:30%;
          align-self:center;
          color:#fff;
          width: 80%;
          font-size:3rem;
          -webkit-text-shadow: 0 20px 0px 0 rgba(0,0,0,0.9); 
          -moz-text-shadow: 0 20px 50px 0 rgba(0,0,0,0.9);
          text-shadow: 0 20px 50px 0 rgba(0,0,0,0.9);
          }
          .epoxy-bkg_1 h2{
            top:5%;
            align-self:center;
            color:#fff;
            width: 80%;
            font-size:2rem;
            
            }

        .epoxy-bkg_2{
          display:flex;
          justify-content: center;
          align-items: center;
          width:70%;
           

        }

        .epoxy_images{
          display:flex;
          justify-content: space-between;
          align-items: center;
         
          
        }
        .epoxy_images img{
          width:20%;
          height:150px;
         
          padding:0.3rem;
          -webkit-box-shadow: 0 20px 50px 0 #000; 
          -moz-box-shadow: 0 20px 50px 0 #000;
          box-shadow: 0 20px 50px 0 #000;
       
        }

        .epoxy-form{
          display:flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          -webkit-box-shadow: 0 20px 50px 0 rgba(0,0,0,0.1); 
          -moz-box-shadow: 0 20px 50px 0 rgba(0,0,0,0.1);
          box-shadow: 0 20px 50px 0 rgba(0,0,0,0.1);
          height: auto;
          width:60%;
          border-radius: 5px;
          background-color:#fff;
          padding:1.5rem;
        }
        .epoxy-form input{
          width:100%;
          height: 40px;
          border-radius:5px;
          display:block;
          border:none;
          padding:0.5rem;
          background: #f1f1f1;
          
        }
        .epoxy-form label{
          width:100%;
          margin:0.5rem 0;
         
        
          }
        .epoxy-form select{
          width:100%;
          height: 40px;
          display:block;
               
        }
        .epoxy-form button {
          text-transform: uppercase;
          outline: 0;
          background: #041557;
          width: 100%;
          border: 0;
          padding: 15px;
          margin-top: 15px;
          color: #FFFFFF;
          font-size: 14px;
          -webkit-transition: all 0.3 ease;
          transition: all 0.3 ease;
          cursor: pointer;
          -webkit-box-shadow: 0 20px 50px 0 rgba(0,0,0,0.1); 
          -moz-box-shadow: 0 20px 50px 0 rgba(0,0,0,0.1);
          box-shadow: 0 20px 50px 0 rgba(0,0,0,0.1);
        }
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
         
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .container {
            min-width:100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color:#dedede;
           
          }
          .epoxy-form{
            flex-direction: column;
            width:100%;
            }
            .epoxy-bkg_1{
              display:flex;
              justify-content: center;
              align-items: center;
              flex-direction:column;
              width:100vw;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
              -webkit-box-shadow: 0 20px 10px 0 #000; 
              -moz-box-shadow: 0 20px 10px 0 #000;
              box-shadow: 0 20px 10px 0 #000;
              }

              .epoxy-bkg_1{
                display:flex;
                justify-content: center;
                align-items: center;
                flex-direction:column;
                width:100vw;
                min-height: 100vh;
                clip-path: none;
                background-color:#000;
                background: linear-gradient(rgba(17, 45, 78, 0.7),rgba(17,45,78,0.7)),url("../images/epoxy_training_8.jpeg") no-repeat;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                }

              .epoxy-bkg_1 h1{
                top:30%;
                align-self:center;
                color:#fff;
                width: 80%;
                clip-path: none !important;
                font-size:1rem;
                -webkit-text-shadow: 0 20px 0px 0 rgba(0,0,0,0.9); 
                -moz-text-shadow: 0 20px 50px 0 rgba(0,0,0,0.9);
                text-shadow: 0 20px 50px 0 rgba(0,0,0,0.9);
                }

                .epoxy-bkg_1 h2{
                  top:5%;
                  align-self:center;
                  color:#fff;
                  width: 80%;
                  font-size:2rem;
                  
                  }
                .epoxy-bkg_2{
                      width:100%;
                }


        .epoxy_images{
          display:flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
       
        }

        .epoxy_images img{
          width:40%;
          height:100px;
         
          padding:0.3rem;
          -webkit-box-shadow: 0 20px 50px 0 #000; 
          -moz-box-shadow: 0 20px 50px 0 #000;
          box-shadow: 0 20px 50px 0 #000;
       
        }
        .arrow{
          bottom:10px;
          position: absolute;
          left: -webkit-calc(50% - 30px);
          left: -moz-calc(50% - 30px);
          left: calc(50% - 30px);
          bottom: 10;
          z-index: 1;
          border-radius: 50%;
          background:#fff;
          width:50px;
          height:50px;
          padding:0.5rem;
          -webkit-box-shadow: 0 20px 50px 0 rgba(0,0,0,0.1);
          -moz-box-shadow: 0 20px 50px 0 rgba(0,0,0,0.1);
          box-shadow: 0 20px 50px 0 rgba(0,0,0,0.1);
          text-align:center;
          display:flex;
          justify-content: center;
          align-items: center;
        }
           
          }
      `}</style>

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
    </div>
    </Layout>
  )
}
