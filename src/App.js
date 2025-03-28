import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const files = [
  'lab13q1', 'lab13q2','lab13q3', 'lab13q4', 'lab13q5',
  'lab13q6', 'lab13q7', 'lab13q8', 'lab13q9', 'lab13q10',
  'lab13q11', 'lab13q12', 'lab14q1', 'lab14q2', 'lab14q3'
];

const loadComponent = (file) => {
  try {
    return lazy(() => import(`./${file}.js`).catch(() => {
      return { default: () => <div>Component {file} not found</div> };
    }));
  } catch (error) {
    console.error(`Failed to load component ${file}`, error);
    return () => <div>Error loading component {file}</div>;
  }
};

function DynamicTable() {
  const exerciseGroups = files.reduce((acc, file) => {
    const match = file.match(/lab(13|14)q(\d+)/);
    if (match) {
      const [, exerciseNum, programNum] = match;
      if (!acc[exerciseNum]) {
        acc[exerciseNum] = [];
      }
      acc[exerciseNum].push(programNum);
    }
    return acc;
  }, {});

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Yogesh's react exercises</h1>
      <table border="2" style={{margin: 'auto', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Programs</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(exerciseGroups).map(([exerciseNum, programs]) => (
            <tr key={`exercise-${exerciseNum}`}>
              <td>Exercise {exerciseNum}</td>
              <td>
                {programs.map(programNum => (
                  <Link 
                    key={`lab${exerciseNum}q${programNum}`} 
                    to={`/lab${exerciseNum}q${programNum}`} 
                    style={{marginRight: '10px'}}
                  >
                    Program {programNum}
                  </Link>
                ))}
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
    <Router basename="/webprogrammingreact">
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