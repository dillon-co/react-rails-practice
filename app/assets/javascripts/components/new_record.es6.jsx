class NewRecord extends React.Component {
  constructor(props){
    super(props)
    this.state = {newRecord: this.props.newRecord}

  }

  addRecord(){
    var title = $("#record-title").val(), date = $("#record-date").val(), amount=parseFloat($("#record-amount").val())
    var dataHash = {title: title, date: date, amount: amount}
    console.log(dataHash);
    $.post(window.location.origin+'/create_new_record', {record_hash: dataHash})
  }

  showText(){
    console.log("Title: "+$("#record-title").val())
  }

  showDate(){
    console.log("Date: "+$("#record-date").val())
  }

  showNumber(){
    console.log("Amount: "+ $("#record-amount").val())
  }

  render () {
    return (
    <div>
      <div>
        <input type="text" placeholder="Title" onChange={this.showText} id="record-title"/><br/><br/>
        <input type='date' onChange={this.showDate} id='record-date'/><br/><br/>
        <input type='number' onChange={this.showNumber} id='record-amount'/><br/><br/>
        <button className='btn btn-primary' onClick={this.addRecord}>Add Record</button>
      </div>
    </div>
    );
  }
}
