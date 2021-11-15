function AllData(){
    const ctx = React.useContext(UserContext);
    return (

    <Card
        bgcolor="info"
        txtcolor="white"
        header="All Data"
        body={JSON.stringify(ctx)}
    />
    );
}