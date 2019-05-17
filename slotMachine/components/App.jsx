class App extends React.Component{

  render (){
    const generateOption = () => {
      const options = ['🍉', '🥝', '🍒', '🍎', '🍊', '🍌', '🍐', '🍇']
      const i = Math.floor(Math.random() * Math.floor(7));
      console.log(i)
      console.log(options[i])
      return options[i]
    }
    return (
      <div>
        <Machine s1={generateOption()} s2={generateOption()} s3={generateOption()} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))