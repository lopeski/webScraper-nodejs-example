import React from 'react';
import {
  Card, Button, CardTitle, CardText, CardColumns,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var myInit = { method: 'GET' };

async function callApi()  {
  try {
    const response = await fetch('/recebe', myInit);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
      return body;

  } catch (e) {
    console.log('erro', e);
    return('erro')
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
    };
  };
  componentDidMount() {
    this.setState({ count: '1' })
    callApi()
      .then((result) => {
        const bb = [];
        bb.push(result.post);
        return bb
      })
      .then(bb => {
        const array = [];
        bb.find(item =>
          item.map(elemento =>
            array.push(elemento)
          )
        )
        this.setState({ lista: array })
      }
      )
      .catch(erro => console.log('erro NEGO', erro))
      .catch(erro => console.log('erro AQUI', erro))
  }
  render() {
    return (
      <CardColumns>
        {this.state.lista.map(item =>
          <Card body inverse color="danger">
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.description}</CardText>
            <Button color="secondary">Button</Button>
          </Card>
        )}
      </CardColumns>
    );
  }
}
export default App;
