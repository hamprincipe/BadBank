function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit] = React.useState('');

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
  function handleDeposit(){
    if (!validate(deposit, 'enter valid amount'))
    return;
    if(deposit > ctx.users[0].balance){
      setStatus("error: invalid amount");
      setTimeout(() => setStatus(''),3000);
      return;
    }
    ctx.users[0].balance -= -deposit;
    alert("Huzzah!");
    setShow(false);
    console.log(`amount deposited: $ ${deposit}`)
  }
  
  // this function is for when click the "back" button after submitting a number
  function clearForm(){
    setDeposit('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="secondary"
      header="Deposit"
      title="Balance"
      text={ctx.users[0].balance}
      status={status}
      body={show ? (  
              <>
                <h5>Deposit Amount:</h5>
                <p>(use number scroll)</p>
                <input type="number" min="0" className="form-control" id="deposit" placeholder="$0.00" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
                </>
              ):(
                <>
                <h5>Amount successfully deposited.</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Back</button>
                </>
            )}
    />
  )
}