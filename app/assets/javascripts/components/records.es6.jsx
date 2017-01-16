class Records extends React.Component {
  constructor(props, content){
    super(props, content);
    this.state = {allRecords: (this.props.allRecords || "")}
  }

  getNewRecords(){
    $.get({
      url: window.location.origin+'/load_records',
      success: function(data){
        console.log(data);
        this.setState( {allRecords: data})
      }.bind(this)
    })
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
        <button onClick={this.getNewRecords.bind(this)} className='btn btn-success'>
          Reload Records
        </button>
        <br/><br/>
        <div className='row'>
          {records.reverse()}
        </div>
      </div>
    );
  }
}
