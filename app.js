// var data = {['milk', 'apples']}
/*
var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList />
  </div>
);

// Here we create a `TodoList` component
var TodoList = (props) => (
  <ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
  </ul>
);

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
  </div>
);

ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"));


*/



class App extends React.Component {
  constructor (props) {
    super(props)
  }
  <div>
    <h2>Grocery List</h2>
    <ShoppingList list={['milk', 'apples', 'ice cream', 'bread', 'olives']}/>;
  </div>
}
// props container variables
class ShoppingList extends React.Component {
  constructor (props) {
    super(props)
  }
  // var onListItemclick = (event) {
  //   console.log('clicked!');
  // }
  render() {
    return (
    <ul>
    {/* <li onClick={onListItemclick}>{props.list[0]}</li> */}
    {/* for (var i = 0; i < this.props.list.length; i++) { */}
    {this.props.list.map(function(name, index) {
      return <listItem item={this.props.list[]}/>
    })};
  </ul>
    )
  }
}

class listItem extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <li>{this.props.item}</li>
    )
  }
}

ReactDOM.render(<App />,document.getElementById("app"));

/*
var Hello = React.createClass({
    render: function() {
        var names = ['Jake', 'Jon', 'Thruster'];
        return (
            <ul>
                {names.map(function(name, index){
                    return <li key={ index }>{name}</li>;
                  })}
            </ul>
        )
    }
});

*/