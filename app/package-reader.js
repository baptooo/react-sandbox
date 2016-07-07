import React from 'react';
import ReactDOM from 'react-dom';
import qwest from 'qwest';

let mapObj = (obj, cb, res = []) => {
  for(var i in obj) {
    if( obj.hasOwnProperty(i)) res.push(cb(obj[i], i));
  }
  return res;
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    qwest.get('./package.json')
      .then((xhr, data) => this.setState({ pkg: data }));
  }
  render() {
    let pkg = this.state.pkg;

    if(!pkg) {
      return <h2>No package</h2>
    }

    let getDependencies = (deps) => mapObj(deps, (version, name) => {
      return <tr key={name}>
        <td>{name}</td>
        <td>{version}</td>
      </tr>
    });

    return (
      <section>
        <h1>{pkg.name}@{pkg.version}</h1>
        <cite>{pkg.description}</cite>
        <hr/>
        <article>
          <cite>Created by {pkg.author}</cite>
          <p>It's main file is <strong>{pkg.main}</strong></p>
        </article>
        <table className="table">
          <caption>Dev dependencies</caption>
          <tbody>
            {getDependencies(pkg.devDependencies)}
          </tbody>
        </table>
        <table className="table">
          <caption>Dependencies</caption>
          <tbody>
            {getDependencies(pkg.dependencies)}
          </tbody>
        </table>
        <table className="table">
          <caption>Scripts</caption>
          <tbody>
          {getDependencies(pkg.scripts)}
          </tbody>
        </table>
      </section>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-app'));