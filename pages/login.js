
import Link from 'next/link'
import Router from 'next/router';
import { useForm } from "react-hook-form";
import Layout from '../components/layout'
import { loadDatabase } from "../lib/db"
import { toast, ToastContainer } from 'react-nextjs-toast'

export default function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onLogin = async (data, e) => {
    
    let firebase = loadDatabase();
    const auth = firebase.auth()
    e.target.reset();
    return await auth.signInWithEmailAndPassword(data.username, data.password)
    .then((response)=>{
      if(!response){
        return
      }
      Router.push('/admin/admin')
    })
    .catch((err)=>{
      toast.info(`Something went wrong, Training session can't be booked`)
    });
  }
  return (
    <Layout>
      <div className="container">
        <div className="header-container">
          <div ><Link href="/"><a><img className="aritt-logo" src="../images/aritlogo.png" /></a></Link></div>



        </div>
        <div className="list-reg">
          <form className="epoxy-form" onSubmit={handleSubmit(onLogin)}>
            <ToastContainer align={"center"} position={"bottom"} />
            <h3>Admin Login</h3>
            <label htmlFor="username">Email:
              <input
                type="text"
                name="username"
                placeholder="Your username"
                id="username"
                ref={register({ required: true })} />
              {errors.username && <span>This field is required</span>}
            </label>
            <label htmlFor="password">Password:
              <input type="password"
                placeholder="Your Password"
                id="password"
                name="password"
                ref={register({ required: true })} />
              {errors.password && <span>This field is required</span>}
            </label>

            <button type="submit">Login</button>
          </form>
        </div>
        <style jsx>{
          `
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
            width:30%;
            display:flex;
            justify-content:center;
            align-item:top;
            flex-direction:column;
            -webkit-box-shadow: 0 1px 50px 0 #ccc; 
            -moz-box-shadow: 0 1px 50px 0 #ccc;
            box-shadow: 0 1px 50px 0 #ccc;
            margin:10px 0;
            border-radius:5px;
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
           
          }
          .aritt-logo{
            width:150px;
            height:50px;
          }
          .list-reg{
            width:90%;
            display:flex;
            justify-content:center;
            align-item:top;
            flex-direction:column;
            -webkit-box-shadow: 0 1px 50px 0 #ccc; 
            -moz-box-shadow: 0 1px 50px 0 #ccc;
            box-shadow: 0 1px 50px 0 #ccc;
            margin:10px 0;
            border-radius:5px;
           
        }
        .epoxy-form{
          flex-direction: column;
          width:100%;
          }
    
        }
          `
        }

        </style>
      </div>
    </Layout>)
}