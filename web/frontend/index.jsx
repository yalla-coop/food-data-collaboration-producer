import ReactDOM from 'react-dom';

console.log('index.jsx', process.env.NODE_ENV);
console.log('api key', process.env.SHOPIFY_API_KEY);

import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));
