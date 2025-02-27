import { BrowserRouter as Router, Routes, Route } from "react-router";
import Homepage from "./container/homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/profile" element={<PR />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

// import MainLayout from "./container/layout";
// import React from 'react'

// function App() {
//   return (
//     <div>
//       <MainLayout/>
//     </div>
//   )
// }

// export default App
