
// import { message} from 'antd';
// import {browserHistory} from 'dva/router';

export default {
    namespace: 'umiDvaGlobal',
    state: {
        collapsed: false,
		progressWidth: 0,
    },
    effects: {},
    reducers: {
        changeState(state, action) {
            return { ...state, ...action.payload };
        },
    }
};
