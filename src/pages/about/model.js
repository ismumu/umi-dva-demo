
import { message} from 'antd';
// import {browserHistory} from 'dva/router';



export default {
    namespace: 'about',
    state: {
        a: 1,
        b: 2,
    },
    subscriptions: {
        // setup({ dispatch, history }) {
        //     history.listen((location) => {                
        //     });
        // }
    },
    effects: {

        // 获取货主
        *allConsignor( action, { call, put } ) {

            const { payload } = action;
            const data = yield call('abcd', payload);

            if (data && data.code === 0) {

            } else {
                message.error(data.message || "系统异常");
            }

            message.error("系统异常");
        },

    },
    reducers: {
        changeState(state, action) {
            return { ...state, ...action.payload };
        },
    }
};
