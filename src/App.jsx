/*
You can have only one element, for example, a single <div>, in a component. But you can add as many as you want inside a parent component.
By using the <></> tag, you can create a container that is not displayed in the DOM and have the same effect as above,
without having a physical footprint in the DOM.
*/

const App = () => {
  /* You can insert JS code here and use it in the single component below. */
  const name = 'John Doe';


  return (
    <>
    <div className='text-5xl'>App</div>
    <p>Hello {name}</p>
    </>
  );
};

export default App;