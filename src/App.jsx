import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import values from "values.js";

const App = () => {
  const [colors, setColors] = useState(new values("#f15025").all(10));
  const addColor = (color) => {
    console.log(color);
    //since there there might be a case where the user will provide inaccurate value we need to use try and catch
    try {
      const newColors = new values(color).all(10);
      // the value we pass to the all method is increment.

      // this throws an error when the
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ToastContainer />
      <ColorList colors={colors} />
    </main>
  );
};

export default App;
