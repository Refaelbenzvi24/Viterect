import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import './styles/cssLibraries';

import {RecoilRoot} from 'recoil';

import App from './App';
import ThemeProvider from './components/UI/Theme/ThemeProvider';
import ReloadPrompt from './components/ReloadPrompt';
import ReactQuery from './plugins/reactQuery';
import MainProvider from './components/UI/Main/MainProvider';
import ProgressSpinner from './components/UI/Progress/ProgressSpinner';

function Main() {
	return (
	  <ThemeProvider>
		  <MainProvider>
			  <ReactQuery>
				  <RecoilRoot>
					  <Suspense fallback={<ProgressSpinner/>}>
						  <App/>
						  {/*<ReloadPrompt/>*/}
					  </Suspense>
				  </RecoilRoot>
			  </ReactQuery>
		  </MainProvider>
	  </ThemeProvider>
	);
}

const Root = document.querySelector('#root');

ReactDOM.render(
  <Main/>,
  Root,
);
