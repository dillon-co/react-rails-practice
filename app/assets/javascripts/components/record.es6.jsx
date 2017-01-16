class Record extends React.Component {
  render () {
    return (
      <div className='col col-lg-4'>
          <h2>{this.props.record.title}</h2>
          <p> {this.props.record.date}</p>
          <h4>$ {this.props.record.amount}</h4>
      </div>
    );
  }
}
