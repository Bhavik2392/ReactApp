import React, { Component } from 'react';


class UnsignedOrders extends React.Component {
	constructor(props) {
		super(props)
		this.state = { data: [] }
	}
	
	loadData() {
		fetch('https://www.hatchways.io/api/assessment/students')
			.then(response => response.json())
			.then(data => {
				this.setState({data: data })
		})
			.catch(err => console.error(this.props.url, err.toString()))
	}
	
	signOrder(id) {
		let ids = [
		{ 'studentId': id }
		];
		console.log(ids)
		fetch('https://www.hatchways.io/api/assessment/students', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(ids)
		})
		
	}
	
	componentDidMount() {
		this.loadData()
	}
	
  render() {
    return <ul>
			<li className='title'>
				<span>Student ID</span>
				<span>City</span>
				<span>Company</span>
			</li>
      { this.state.data.map((item, i) => {
				let statusClass = 'sign'
				if (item.signStatus === 'Out for signature') statusClass += ' sign-complete'
				let boundClick = this.signOrder.bind(this, i)
				return <li className='item'>
					<span>{item.students.city}</span>
					<span>{item.students.company}</span>
					<span>{item.students.email}</span>
					<span><span className={statusClass} onClick={() => this.signOrder(item.orderID)}>{item.signStatus}</span></span>
				</li>
        })
      }
    </ul>;
  }
}
			
//ReactDOM.render(<UnsignedOrders />, document.getElementById('app'));

export default UnsignedOrders;