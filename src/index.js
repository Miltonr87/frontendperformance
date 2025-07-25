import { createRoot } from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { requestRobots, searchRobots } from './reducers';

import './index.css';

const logger = createLogger();

// Esse LOGGER é usado para imprimir no console as ações que estão sendo despachadas e o estado atual do Redux.
// Ele ajuda a depurar o fluxo de dados na aplicação, mostrando as ações que ocorrem e como elas afetam o estado da aplicação.
// O logger é aplicado como middleware no Redux, o que significa que ele intercepta as ações antes de serem enviadas aos reducers, permitindo que você veja o que está acontecendo em tempo real.
// O logger é especialmente útil durante o desenvolvimento, pois fornece uma visão clara do que está acontecendo
// na aplicação, facilitando a identificação de problemas e a compreensão do fluxo de dados.
// Importando os reducers que foram criados para gerenciar o estado da aplicação.

const rootReducers = combineReducers({ requestRobots, searchRobots });

const store = createStore(rootReducers, applyMiddleware(thunk, logger));

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

registerServiceWorker();
