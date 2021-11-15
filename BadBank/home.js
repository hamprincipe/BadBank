function Home(){
  return (
    <Card
      bgcolor="white"
      txtcolor="black"
      header="Welcome to Community Central Bank"
      text="Backed by the people, for the people."
      body={(<img src="bank.jpeg" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
