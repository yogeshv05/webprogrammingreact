import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const files = [
  'lab13q1', 'lab13q2', 'lab13q4', 'lab13q5', 
  'lab13q6', 'lab13q7', 'lab13q8', 'lab13q9', 'lab13q10', 
  'lab13q11', 'lab13q12', 'lab14q1', 'lab14q2', 'lab14q3'
];

const loadComponent = (file) => {
  return lazy(() => import(`./${file === 'lab14q3' ? 'index' : file}.js`));
};

function DynamicTable() {
  return (
    <div>
      <h1 align="center">My React Exercises</h1>
      <table border="2" cellSpacing={0} cellPadding={5} align="center">
        <thead>
          <tr>
            <th>Exercise Name</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file}>
              <td>{file}</td>
              <td>
                <Link to={`/${file}`}>Open</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <Router basename="/web-programming-reactjs">
      <Routes>
        <Route path="/" element={<DynamicTable />} />
        {files.map((file) => {
          const Component = loadComponent(file);
          return (
            <Route
              key={file}
              path={`/${file}`}
              element={
                <Suspense fallback={<h2>Loading...</h2>}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
