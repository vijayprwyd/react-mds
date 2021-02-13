import { Card } from './libs/components/Surfaces/Card/Card';
import InputsPlayground from './playgrounds/InputPlaygrounds';

function App() {
  return (
    <>
      <h1>React MDS</h1>
      <InputsPlayground/>
      {/*<Row style = {{flexDirection: 'row-reverse'}}>

        <Col xs = {12} sm = {6}  md = {4} lg = {3} xl = {2} style ={{backgroundColor: "red", padding: "8px"}}>1</Col>
        <Col xs = {12} sm = {6}  md = {4} lg = {3} xl = {2} style ={{backgroundColor: "green", padding: "8px"}}>2</Col>
        <Col xs = {12} sm = {6}  md = {4} lg = {3} xl = {2} style ={{backgroundColor: "blue", padding: "8px"}}>3</Col>
        <Col xs = {12} sm = {6}  md = {4} lg = {3} xl = {2} style ={{backgroundColor: "yellow", padding: "8px"}}>4</Col>
        <Col xs = {12} sm = {6}  md = {4} lg = {3} xl = {2} style ={{backgroundColor: "orange", padding: "8px"}}>5</Col>

      </Row>
  <Hidden/>*/}
      <Card/>
    </>
  );
}

export default App;
