class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Grocery List</h2>
        <ShoppingList list={['milk', 'apples', 'ice cream', 'bread', 'olives']}/>
      </div>
    )
  }
}
// props container variables
class ShoppingList extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <ul>
      {this.props.list.map(function(foodProduct, index) {
        return <li>{foodProduct}</li>
      })}
      </ul>
    )
  }
}

// class listItem extends React.Component {
//   constructor (props) {
//     super(props)
//   }
//   render() {
//     return (
//       <li>{this.props.item}</li>
//     )
//   }
// }

ReactDOM.render(<App />,document.getElementById("app"));