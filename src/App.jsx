import './App.css'
export default function App(){
  return(
    <>
    {/* <div className='text-center'>
      <h1 className='black-500 font-semibold text-lg'>Hello World</h1>
      <label className='font-mono gray-500' htmlFor="">Welcome to Fonest The Mobile World</label>
      <div className='text-center w-80 h-64 mx-auto'>
        <img className='' src="../public/LogoTrans perents.png" alt="logo" />
      </div>
    </div> */}
    <div className='bg-gray-200 p-lg flex justify-between items-center w-screen h h-screen'>
      <div className="left"><img  src="../public/loginimg.png" alt="" /></div>
      <div className="right bg-white text-center rounded-md">
          <img src="" alt="" />
          <h6>Welcome Back!</h6>
          <form action="">
            <input type="Email" placeholder='Email' />
            <input type="Password" placeholder='Password' />
          <div>
            <div className='d-flex'>
              <input type="check" />
              <label htmlFor="">Remember for 30 days</label>
            </div>
            <label htmlFor="">Forgot password?</label>
          </div>
          </form>
      </div>
    </div>
    </>
  );

}
