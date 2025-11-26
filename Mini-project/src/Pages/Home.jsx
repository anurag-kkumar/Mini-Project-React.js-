function Home(){
    return(
       <div className='bg-blue-700'>
    <h1>Student Result Manegment System </h1>
    <p className='text-sm'>Maneges Student details</p>
    <div className='bg-white'>
      <Nav></Nav>
      <StudentDetail></StudentDetail>
    </div>
   </div>
    );
}
export default Home;