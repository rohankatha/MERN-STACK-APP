import React from 'react';
import { useHistory } from "react-router-dom";
function NavigationDemo() {
  const history = useHistory();
  const navigateTo = () => history.push('/componentURL');//eg.history.push('/login');

  return (
   <div>
   <button onClick={navigateTo} type="button" />
   </div>
  );
}
export default NavigationDemo;