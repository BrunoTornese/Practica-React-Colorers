import "./App.css";
import { Container, Form, Button } from "react-bootstrap";
import { ColorCard } from "./components/ColorCard";
import { useState } from "react";

function generateHexColor() {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  color = "#" + color;
  return color;
}

function App() {
  const [colorNum, setColorNum] = useState([]);
  const generarColor = (num) => {
    const colorGenerado = Array.from({ length: num }, () => generateHexColor());
    setColorNum(colorGenerado);
  };

  return (
    <Container fluid className="text-center">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const num = parseInt(e.target[0].value, 10);
          if (!isNaN(num) && num >= 1 && num <= 30) {
            generarColor(num);
          } else {
            alert("Por favor, ingrese un número válido entre 1 y 30.");
          }
        }}
      >
        <div className="d-flex my-3 justify-content-center">
          <Form.Control
            id="colorNum"
            className="w-50"
            min="1"
            max="30"
            type="number"
            placeholder="Inserte la cantidad de colores que desea generar (entre 1 y 30)"
          />
          <Button type="submit" className="ms-3" variant="primary">
            Generar
          </Button>
        </div>
      </Form>
      {colorNum.length > 0 &&
        colorNum.map((color, i) => <ColorCard key={i} color={color} />)}
    </Container>
  );
}

export default App;
