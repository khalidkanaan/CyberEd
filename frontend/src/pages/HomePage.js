import React from 'react';
import BasePage from './BasePage';
import ModuleSelection from '../components/ModuleSelection'; 


class HomePage extends React.Component {
  render() {
    return (
      <BasePage>
        <ModuleSelection />
      </BasePage>
    );
  }
}

export default HomePage;
