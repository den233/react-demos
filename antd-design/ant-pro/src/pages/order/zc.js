import React, {Component} from 'react'
import { Icon,Card,Row, Col,InputNumber ,Tabs, Radio,Button} from 'antd'
import styles from './zc.less'
const TabPane = Tabs.TabPane;
const { Meta } = Card;
const lists=[
	{'id':1,name:"隆力奇蛇胆"},
	{'id':1,name:"隆力奇蛇胆"},
	{'id':1,name:"隆力奇蛇胆"},
	{'id':1,name:"隆力奇蛇胆"},
	{'id':1,name:"隆力奇蛇胆"},
	{'id':1,name:"隆力奇蛇胆"},
	{'id':1,name:"隆力奇蛇胆"},
	{'id':1,name:"隆力奇蛇胆"},
	{'id':1,name:"隆力奇蛇胆"},
	{'id':1,name:"隆力奇蛇胆"},
	{'id':1,name:"隆力奇蛇胆"},
	{'id':1,name:"隆力奇蛇胆"},
	{'id':1,name:"隆力奇蛇胆"}
]
 
// function onChange(value) {
// 	console.log('changed', value);
// 	sum+=1
// }
 //var sum=0
class Lists extends Component {
	constructor (props) {
	super(props);
	this.	onChange=this.onChange.bind(this);
	}
	onChange = (event) => {
		//console.log(this.props)
		var newState = {
			mode: 'top',
			a:11,
		};
		this.props.onChange(newState);
	}
  componentDidMount(){
	  console.log(this.props)
  }	
  render () {
    const { list } = this.props
    return (
	  <Col xs={24} sm={12} md={6} style={{padding:'10px'}}> 
		  <Card
			hoverable
			className={styles.card}
			 
			cover={<img alt="example" style={{height: '210px'}}  src="https://file.szgreenleaf.com/group1/M00/2B/32/CgAAIFt-aiqAfLhKAAHeilWzP9A199.jpg" />}
		  >
			<Meta
			title={list.name}
			/>
			<div className="price" style={{ color:' red',padding:' 5px 0px'}}>¥19.9元</div>
			<ul className="ant-card-actions">
			<li style={{color: 'red', fontSize: '32', marginLeft: '10px'}}><span>
			     <a>
			    <InputNumber min={0} max={99} defaultValue={0} onChange={this.onChange} />
				 </a></span></li>
			<li style={{color: 'red', fontSize: '32', marginLeft: '10px'}}><span><a>加入购物车</a></span></li>
			</ul>
			  
		  </Card>
	  </Col>
    )
  }
}
class zc extends Component{
  constructor(props) {
    super(props);
    this.state = {
			mode: 'top',
			a:0,
		};
		this.handleChildChange=this.handleChildChange.bind(this); 
  }

  handleModeChange = (e) => {
		const mode = e.target.value;
		console.log(mode)
    this.setState({ mode });
  }
	handleChildChange (comment) {
		console.log(comment)
		this.setState(comment)
  }
  render() {
    const { mode } = this.state;
		return (
	 
			<div className={styles.listcontent}>
			<Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group>
				<Button type="primary">
             购物车 ({this.state.a})
          </Button>
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
        >
					 {lists.map((list,i) => <TabPane tab={'Tab'+i} key={i}> 
					      {lists.map((list,k) => <Lists onChange={this.handleChildChange} key={k} list={list} />)} 
						</TabPane>	
					 )}
				</Tabs>
			</div>
		)
	}
	 
}

export default zc
