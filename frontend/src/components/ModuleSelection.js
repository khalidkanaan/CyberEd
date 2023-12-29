import React from 'react';
import '../assets/css/homepage.css'
import '../assets/css/fonts.css';

const modules = [
  { id: 'c1', title: 'MODULE 1', description: 'MODULE 1 description', bgImage: require('../assets/img/bg1.jpg'), defaultChecked: true },
  { id: 'c2', title: 'MODULE 2', description: 'MODULE 2 description', bgImage: require('../assets/img/bg1.jpg') },
  { id: 'c3', title: 'MODULE 3', description: 'MODULE 3 description', bgImage: require('../assets/img/bg1.jpg') },
  { id: 'c4', title: 'MODULE 4', description: 'MODULE 4 description', bgImage: require('../assets/img/bg1.jpg') },
];

function ModuleSelection() {
  return (
    <div className="wrapper">
      <h1 className="ps2p text-L2">Welcome to the Home Page!</h1>
      <div className="container">
        {modules.map((module, index) => (
          <React.Fragment key={module.id}>
            <input className="module-input" type="radio" name="slide" id={module.id} defaultChecked={module.defaultChecked}/>
            <label htmlFor={module.id} className="card" style={{ backgroundImage: `url(${module.bgImage})` }}>
              <div className="row">
                <div className="icon">{index + 1}</div>
                <div className="description">
                  <h4>{module.title}</h4>
                  <p>{module.description}</p>
                </div>
              </div>
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ModuleSelection;
