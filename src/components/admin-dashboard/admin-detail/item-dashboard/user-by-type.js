import React, { Component } from 'react';

class UserByType extends Component {
	render() {
    let { user, index } = this.props;
		return (
			<tr>
				<td>{index}</td>
				<td>{user.taiKhoan}</td>
				<td>{user.hoTen}</td>
				<td>{user.email}</td>
				<td>{user.soDt}</td>
				<td  className="d-flex justify-content-center">
					<button className="btn btn-info mr-2" data-toggle="modal" data-target="#userModal" onClick={() => this.props.handleTypeUserModal(user)}>
						Edit
              </button>
					<button
            className="btn btn-danger"
            onClick={() => this.props.handleUser(user, "deleteUser")}
					>
						Delete
              </button>
				</td>
			</tr>
		);
	}
}

export default UserByType;