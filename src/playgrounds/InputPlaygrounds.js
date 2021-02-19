import './App.css';
import { Button } from '../libs/components/Inputs/Button/Button';
import { RadioButton } from '../libs/components/Inputs/RadioButton/RadioButton';
import { Checkbox } from '../libs/components/Inputs/Checkbox/Checkbox';
import { Switch } from '../libs/components/Inputs/Switch/Switch';
import { SelectPlayground } from '../DemoSelect';
import { Slider } from '../libs/components/Inputs/Slider/Slider';
import { TextField } from '../libs/components/Inputs/TextField/TextField';

function InputsPlayground() {
  return (
    <>
      <h2> Input </h2>
      <p> Accessible light-weight React components based on Material design</p>
      <h3>1.Buttons</h3>
      <div className="App" style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Button>Primary</Button>
        <Button
          className="custom-button"
          rippleClassName="rippleWhite"
          variant="contained"
        >
          Custom
        </Button>
        <Button variant="text">Text</Button>
        <Button disabled>Disabled</Button>
      </div>

      <h3>2.Select</h3>
      <SelectPlayground />

      <h3>4.Radio Buttons</h3>

      <div
        style={{
          width: 'fit-content',
          marginLeft: '10px',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        <RadioButton name="hi">Option 1</RadioButton>
        <RadioButton name="hi">Option 2</RadioButton>
        <RadioButton name="hi">Option 3</RadioButton>
        <RadioButton name="hi">Option 4</RadioButton>
      </div>
      <h3>5.Check Box</h3>
      <div
        style={{
          width: 'fit-content',
          marginLeft: '10px',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        <Checkbox name="checkbox1">Option 1</Checkbox>
        <Checkbox name="checkbox1">Option 2</Checkbox>
        <Checkbox name="checkbox1">Option 3</Checkbox>
        <Checkbox name="checkbox1">Option 4</Checkbox>
      </div>

      <h3>6.Switch</h3>

      <div style={{ width: 'fit-content', margin: '20px 0 20px 20px' }}>
        <Switch>Toggle Me</Switch>
      </div>

      <h3>7.Slider</h3>
      <div style={{ width: 'fit-content', margin: '20px 0 20px 20px' }}>
        <Slider min={0} max={100} id="volume" label = 'Volume' />
      </div>

      <div style = {{width: '200px'}}>
        <TextField textFieldId = "myTextField" label = "Name" type = "password"/>
      </div>
    </>
  );
}

export default InputsPlayground;
