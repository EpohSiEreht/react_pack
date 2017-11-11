import React from 'react';
import { render } from 'react-dom';
import Router from '@/router';
import store from '@/store';

render(<Router store={store} />, document.getElementById('root'));
