function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdraw, setWithdraw] = React.useState('');

  const ctx = React.useContext(UserContext);  

  //this function is for when you click submit while the form is still empty
  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        alert("error: no number added");
        console.log("error: no number added");
        return false;
      }
      return true;
  }

  //this function is for when you submit a number
  function handleWithdraw(){
    if (!validate(withdraw, 'enter valid amount'))
    return;
    if(withdraw > ctx.users[0].balance){
      setStatus("error: insufficient funds");
      setTimeout(() => setStatus(''),3000);
      return;
    }
    ctx.users[0].balance -= withdraw;
    alert("Huzzah!");
    setShow(false);
    console.log(`amount withdrawn: $ ${withdraw}`)
  }
  
  // this function is for when click the "back" button after submitting a number
  function clearForm(){
    setWithdraw('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="secondary"
      header="Withdraw"
      title="Balance"
      text={ctx.users[0].balance}
      status={status}
      body={show ? (  
              <>
                <h5>Withdraw Amount:</h5>
                <p>(use number scroll)</p>
                <input type="number" min="0" className="form-control" id="withdraw" placeholder="$0.00" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
                </>
              ):(
                <>
                <h5>Amount successfully withdrawn.</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Back</button>
                </>
            )}
    />
  )
}