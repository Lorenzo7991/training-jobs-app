/*
You can have only one element, for example, a single <div>, in a component. But you can add as many as you want inside a parent component.
By using the <></> tag, you can create a container that is not displayed in the DOM and have the same effect as above,
without having a physical footprint in the DOM.
*/

const App = () => {
  /* You can insert JS code here and use it in the single component below. */
  const name = 'John Doe';
  const names = ['John', 'Doe', 'Jane', 'Doe'];
  const loggedIn = true;


  return (
    <>
      <div className='text-5xl'>App</div>
      {/* You can inject style properties inline with the below syntax */}
      <p style={{color: 'red', fontSize: '24px', marginTop: '30px' }}>Hello {name}</p>
      {/* You can use JS code here to create a loop on a list of names. */}
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {/* You can use JS code here to create a conditional statement */}
      {loggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
    </>
  );
};

export default App;
