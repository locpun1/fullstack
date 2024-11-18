import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './UserManage.scss';
import { emitter } from '../../utils/emitter';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''

        }

        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: ''
            });
        })
    }
    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }
    checkValieInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter:' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    hanleAddNewUser = () => {
        let isValid = this.checkValieInput();
        if (isValid === true) {
            this.props.createNewUser(this.state);
        }

    }
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className='abcClassName'
                size='lg'
                centered
            >
                <ModalHeader toggle={() => this.toggle()}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row">
                            <form action="" method="POST">
                                <div className="form-row">
                                    <div className="col-12 mt-3">Create a new user</div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Email" name="email"
                                            onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                                            value={this.state.email} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword">Password</label>
                                        <input type="password" className="form-control" name="password" placeholder="Password"
                                            onChange={(event) => { this.handleOnChangeInput(event, "password") }}
                                            value={this.state.password} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputFirstName">First name</label>
                                        <input type="text" className="form-control" placeholder="firstName" name="firstName"
                                            onChange={(event) => { this.handleOnChangeInput(event, "firstName") }}
                                            value={this.state.firstName} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputLastName">Last name</label>
                                        <input type="text" className="form-control" name="lastName" placeholder="lastName"
                                            onChange={(event) => { this.handleOnChangeInput(event, "lastName") }}
                                            value={this.state.lastName} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="inputAddress">Address</label>
                                        <input type="text" className="form-control" name="address" placeholder="1234 Main St"
                                            onChange={(event) => { this.handleOnChangeInput(event, "address") }}
                                            value={this.state.address} />
                                    </div>
                                    {/* <div className="form-group col-md-6">
                                        <label htmlFor="inputPhone">Phone number</label>
                                        <input type="text" className="form-control" name="phoneNumber" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputGender">Sex</label>
                                        <select name="gender" className="form-control">
                                            <option value="1">Male</option>
                                            <option value="0">Female</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputRole">Role</label>
                                        <select name="roleId" className="form-control">
                                            <option value="1">Admin</option>
                                            <option value="2">Doctor</option>
                                            <option value="3">Paitent</option>
                                        </select>
                                    </div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary px-3" onClick={() => this.hanleAddNewUser()}>
                        Add
                    </Button>{' '}
                    <Button color="secondary px-3" onClick={() => this.toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);


