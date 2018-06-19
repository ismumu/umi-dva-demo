import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  
});

window.g_app = app;
app.use(createLoading());
app.use(require('/Users/ismumu/Desktop/umi-dva-demo/node_modules/dva-immer/lib/index.js').default());
app.model({ namespace: 'global', ...(require('/Users/ismumu/Desktop/umi-dva-demo/src/models/global.js').default) });
app.model({ namespace: 'model', ...(require('/Users/ismumu/Desktop/umi-dva-demo/src/pages/about/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/ismumu/Desktop/umi-dva-demo/src/pages/index/model.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
