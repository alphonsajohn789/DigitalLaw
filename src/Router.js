


const AllRoute = () => {
    return (
      <div className="App">
        <Router>
        <Routes>
         
          <Route path = "/search" element={<Search/>} />
          <Route path = "/register" element={<Register/>} />
          
        </Routes>

        
      </Router>
      </div>
    );
};

export default AllRoute;