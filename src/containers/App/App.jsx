import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      list: [
        {nome: 'Example', id: 1}
      ]
    }
  }


  render (){
    const { list } = this.state;
    return (
        <div>
          <ul>
            {list.map(item => (
                <li key={item}>{item.nome}</li>
            ))}
          </ul>
        </div>
    );
  }
}

export default App;
