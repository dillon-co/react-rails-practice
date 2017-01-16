class Records extends React.Component {
  constructor(props){
    super(props);
    this.state = {allRecords: (this.props.allRecords || "")}
  }

  render () {
    var records = this.state.allRecords.map(function(record){
      return(
          <Record key={record.id} record={record}/>
      );
    });

    return (
      <div>
        <h1>Records</h1>
        <hr/>
        <div className='row'>
          {records}
        </div>
      </div>
    );
  }
}
