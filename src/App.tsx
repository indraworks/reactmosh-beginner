import ListGroup from "./components/ListGroup";

const App = () => {
  let items = ["sepatu", "tas", "kemeja", "kaos", "celdam", "dasi"];
  let heading = "Accesories";
  return (
    <>
      <ListGroup items={items} heading={heading} />
    </>
  );
};

export default App;
