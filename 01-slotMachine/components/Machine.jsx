class Machine extends React.Component{
  render (){
    const {s1,s2,s3} = this.props
    const areEqual = (s1 === s2) && (s2 === s3)
    return (
      <div className="Machine">
        <h1>Slot Machine!</h1>
        <p style={{backgroundColor: '#01f3ff'}}>{this.props.s1} | {this.props.s2} | {this.props.s3}</p>
        <h4 className={areEqual? 'Machine-win' : 'Machine-lose'}>{areEqual? 'Congrats! You win!!!': 'Looooser!!'}</h4>
      </div>
    )
  }
}

