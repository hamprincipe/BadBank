function NavBar(){
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Community Central Bank</a>
          <ul className="navbar-nav nav ml-auto">
            {/* ml-auto refers to the navbar links be separated from the brand name and adds highlight to page */}
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </nav>
      </>
    );
  }