import React from 'react';
import dva, { connect } from 'dva';
const Order=({loading})=>{
    return (<div>111</div>)
}
export default connect(({ loading }) => ({ loading }))(Order)