import Alert from "./components/Alert";

const App = () => {
  // const children ="<p>Warning! Error Come This Module!</p>"
  // return (
  //   <>
  //     <Alert>{children}</Alert>
  //   </>
  // );
  return (
    <Alert>
      Hello{" "}
      <p style={{ display: "inline-block" }}>
        Indra <h2>Suryawan</h2>
      </p>
    </Alert>
  );
};

export default App;
