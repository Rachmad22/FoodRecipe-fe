import React from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import "../styles/add.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
 const navigate = useNavigate();

 // check if already login
 React.useEffect(() => {
  const isLogin = localStorage.getItem("isSignIn");
  const token = localStorage.getItem("token");

  if (!isLogin && !token) {
   navigate("/login"); // navigate to home
  }
 }, []);

 const [background, setBackground] = React.useState(null)
 const [photo, setPhoto] = React.useState(null)
 const [videos, setVideos] = React.useState("")
 const [name, setName] = React.useState("")
 const [ingredient, setIngredient] = React.useState("")
 const [okeMsg, setOkeMsg] = React.useState("")
 const [errMsg, setErrMsg] = React.useState("")
 const [isError, setIsError] = React.useState(false)
 const [isSuccess, setIsSuccess] = React.useState(false)



 const handleAddRecipe = async (e) => {
  const token = localStorage.getItem("token")
  e.preventDefault()
  let bodyFormData = new FormData()
  const config = {
   headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
   },
  };

  bodyFormData.append("name", name.toLowerCase())
  bodyFormData.append("ingredient", ingredient)
  bodyFormData.append("photo", photo)
  bodyFormData.append("videos", videos)

  await axios.post(`${process.env.REACT_APP_URL_BACKEND}/recipes/add`,
   bodyFormData, config
  ).then((res) => {
   // console.log(res?.data?.message)
   setIsSuccess(true)
   setOkeMsg(res?.data?.message)
  }).catch((err) => {
   // console.log(err?.response?.data?.message)
   setIsError(true)
   setErrMsg(err?.response?.data?.message)
  })
 }


 return (
  <div>
   {/* <!-- Start Navbar --> */}
   <Navbar />
   {/* <!-- End of Navbar --> */}
   <section id="header">
    <div class="container">
     <div class="row mt-5 justify-content-center">
      <div class="col-8">
       <form>
        <div class="mb-3">

         {isError ? (
          <div
           class="alert alert-danger text-center ps-0 pe-0"
           role="alert"
           style={{
            fontSize: "14px",
            border: "0",
            borderRadius: "15px",
            marginBottom: "-15px",
           }}
          >
           {errMsg}
          </div>
         ) : null}

         {isSuccess ? (
          <div
           class="alert alert-success text-center ps-0 pe-0"
           role="alert"
           style={{
            fontSize: "14px",
            border: "0",
            borderRadius: "15px",
            marginBottom: "-15px",
           }}
          >
           {okeMsg}
          </div>
         ) : null}



         {background && <img src={background} alt="bg" className="d-flex align-items-center" style={{ height: "100px", width: "100px", objectFit: "cover" }} />}
         {/* <!-- form image --> */}
         <label for="formFile" class="form-label"></label>
         <input class="form-control" type="file" id="formFile" accept="image/*" onChange={(e) => {
          setBackground(URL.createObjectURL(e.target.files[0]))
          setPhoto(e.target.files[0])
         }} />

        </div>
        <div className="form-floating">
         {/* <!-- form title --> */}
         <input class="form-control form-control-lg mt-3" id="title" type="text" aria-label=".form-control-lg example" onChange={(e) => setName(e.target.value)} />
         <label for="title">Title</label>
        </div>
        <div>
         {/* <!-- form ingredients --> */}
         <label for="Ingredients" class="form-label mt-3"></label>
         <textarea class="form-control" id="Ingredients" rows="5"
          placeholder="Ingredients" onChange={(e) => setIngredient(e.target.value)}></textarea>
        </div>
        <div class="mb-3 form-floating">
         {/* <!-- form video --> */}
         <input class="form-control form-control-lg mt-3" type="text"
          aria-label=".form-control-lg example" id="video" onChange={(e) => setVideos(e.target.value)} />
         <label for="video">Videos</label>
        </div>
        <div class="row mb-3">
         <div class="d-grid col-4 mx-auto">
          <button type="submit" class="btn btn-warning btn-lg post" onClick={handleAddRecipe}>Post</button>
         </div>
        </div>
       </form>
      </div>
     </div>
    </div>
   </section>
   {/* <!-- footer --> */}
   <Footer />
  </div>
 );
}

export default Add;