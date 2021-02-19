# React Material Design Lite

Lightweight react component library based on material design

## Sample code for testing all components

```jsx

import "./App.css";
import {
  Button,
  RadioButton,
  Checkbox,
  Switch,
  Slider,
  TextField,
  Select,
  MenuItem
} from "@vijayprwyd/react-mds";
function App() {
  return (
    <>
      <h2> Input </h2>
      <p> Accessible light-weight React components based on Material design</p>
      <h3>1.Buttons</h3>
      <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
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

      <Select onChange={() => {}} value={10} placeHolder={"value"} id="age">
        <MenuItem value="10"> Ten </MenuItem>
        <MenuItem value="20"> Twenty </MenuItem>
        <MenuItem value="30"> Thirty </MenuItem>
        <MenuItem value="40"> Forty </MenuItem>
      </Select>

      <h3>4.Radio Buttons</h3>

      <div
        style={{
          width: "fit-content",
          marginLeft: "10px",
          display: "flex",
          flexWrap: "wrap",
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
          width: "fit-content",
          marginLeft: "10px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Checkbox name="checkbox1">Option 1</Checkbox>
        <Checkbox name="checkbox1">Option 2</Checkbox>
        <Checkbox name="checkbox1">Option 3</Checkbox>
        <Checkbox name="checkbox1">Option 4</Checkbox>
      </div>

      <h3>6.Switch</h3>

      <div style={{ width: "fit-content", margin: "20px 0 20px 20px" }}>
        <Switch>Toggle Me</Switch>
      </div>

      <h3>7.Slider</h3>
      <div style={{ width: "fit-content", margin: "20px 0 20px 20px" }}>
        <Slider min={0} max={100} id="volume" label="Volume" />
      </div>

      <div style={{ width: "200px" }}>
        <TextField textFieldId="myTextField" label="Name" type="password" />
      </div>
    </>
  );
}

export default App;


```


## Components

### Inputs

#### 1. Button

Supports following props :

* variant ( text / contained )
* shape ( flat / circular )
* rippleClassName for custom ripples

```jsx
        <Button
          className="custom-button"
          rippleClassName="rippleWhite"
          variant="contained"
        >
          Custom
        </Button>

```
#### 2. RadioButton

All radio buttons must mandatorily pass name attribute

#### 3. Checkbox

All checkbox must mandatorily pass name attribute

#### 4. Switch

#### 5. Select

#### 6. Slider

* min : Minimum value
* max : Maximum value
* initialValue: (Optional)
* id: Unique slider id
* ariaValueText: Slider aria text for accessibility
* label slider label
* onChange ( optional event handler )

#### 7. Textfield

#### 8. Select

Select accepts following prop-types :

* value: selected value
* placeHolder
* error
* onChange
* id: required select id