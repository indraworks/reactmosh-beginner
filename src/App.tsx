import ListGroup from "./components/ListGroup";

const App = () => {
  let items = ["sepatu", "tas", "kemeja", "kaos", "celdam", "dasi"];
  let heading = "Accesories";
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <ListGroup
        items={items}
        heading={heading}
        onSelectedItem={handleSelectedItem}
      />
    </>
  );
};

export default App;
