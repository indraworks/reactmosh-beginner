import Button from "./components/Button";

const App = () => {
  return (
    <Button color={"primary"} onClick={() => console.log("iam clicked")}>
      MyButton
    </Button>
  );
};

export default App;
