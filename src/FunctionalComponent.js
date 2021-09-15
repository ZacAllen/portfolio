import React from 'react';
import lifecycle from 'react-pure-lifecycle';
 
// create your lifecycle methods
const componentDidMount = (props) => {
  console.log('I mounted! Here are my props: ', props);
};
 
// make them properties on a standard object
const methods = {
  componentDidMount
};
 
const FunctionalComponent = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};
 
// decorate the component
export default lifecycle(methods)(FunctionalComponent);