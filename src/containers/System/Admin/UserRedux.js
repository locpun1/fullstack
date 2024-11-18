import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserRedux.scss';
import { FormattedMessage } from 'react-intl';
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import * as actions from "../../../store/actions";
import ReactImageLightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            address: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            role: '',
            roles: [],
            gender: '',
            genders: [],
            position: '',
            posistions: [],
            avatar: '',
            previewImage: ''
        };
    }

    onChangeInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => console.log(this.state));

    }

    handleSaveUser = (event) => {
        event.preventDefault();
        console.log("Form data: ", this.state);
    }


    handlePreviewImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Kiểm tra định dạng tệp
            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (!allowedTypes.includes(file.type)) {
                alert('Chỉ cho phép các định dạng ảnh: JPEG, PNG, GIF');
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                this.setState({ previewImage: e.target.result }, () => console.log(this.state));
            };
            reader.readAsDataURL(file);
        }
    };

    // Hàm mở lightbox
    openLightbox = () => this.setState({ isOpen: true });

    // Hàm đóng lightbox
    closeLightbox = () => this.setState({ isOpen: false });



    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getRoleStart();
        this.props.getPosistionStart();
        // try {
        //     let res = await getAllCodeService('gender'); // Lấy dữ liệu giới tính
        //     if (res && res.data) {
        //         this.setState({
        //             genders: res.data
        //         });
        //     }
        // } catch (e) {
        //     console.log(e)
        // }
    }
    componentDidUpdate(prevProps, prevState, snapShot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGender = this.props.genderRedux;
            this.setState({
                genders: arrGender,
                gender: arrGender && arrGender.length > 0 ? arrGender[0].key : ''
            })
        }
        if (prevProps.roleReux !== this.props.roleReux) {
            let arrRole = this.props.roleReux;
            this.setState({
                roles: arrRole,
                role: arrRole && arrRole.length > 0 ? arrRole[0].key : ''
            });
        }

        if (prevProps.posistionRedux !== this.props.posistionRedux) {
            let arrPosition = this.props.posistionRedux;
            this.setState({
                posistions: arrPosition,
                posistion: arrPosition && arrPosition.length > 0 ? arrPosition[0].key : ''
            });
        }
    }
    render() {
        let genders = this.state.genders;
        let roles = this.state.roles;
        let positions = this.state.posistions;
        let language = this.props.language;
        let isLoadingGenderReact = this.props.isLoadingGender;
        return (
            <div className="container-sm mt-5">
                <div className="text-center mb-4">
                    <h2><FormattedMessage id="manage-user.manage-user-title" /></h2>
                    <p className="lead"><FormattedMessage id="manage-user.manage-user-title1" /></p>
                </div>

                <form onSubmit={this.handleSaveUser}>
                    <div className="p-4 border rounded shadow-sm" style={{ maxWidth: '500px', margin: '0 auto' }}>
                        <div className="mb-3">
                            <div className="row">
                                <div className='col-12'>{isLoadingGenderReact === true ? 'Loading Gender' : ''}</div>
                                <div className="col-md-6">
                                    <label htmlFor="firstName" className="form-label"><FormattedMessage id="manage-user.first-name" /></label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="form-control form-control-sm"
                                        placeholder="Nhập họ"
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.onChangeInput}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName" className="form-label"><FormattedMessage id="manage-user.last-name" /></label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="form-control form-control-sm"
                                        placeholder="Nhập tên"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.onChangeInput}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label"><FormattedMessage id="manage-user.email" /></label>
                            <input
                                type="email"
                                id="email"
                                className="form-control form-control-sm"
                                placeholder="Nhập email"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChangeInput}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label"><FormattedMessage id="manage-user.password" /></label>
                            <input
                                type="password"
                                id="password"
                                className="form-control form-control-sm"
                                placeholder="Nhập mật khẩu"
                                name="password"
                                value={this.state.password || ''}
                                onChange={this.onChangeInput}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label"><FormattedMessage id="manage-user.address" /></label>
                            <input
                                type="text"
                                id="address"
                                className="form-control form-control-sm"
                                placeholder="Nhập địa chỉ"
                                name="address"
                                value={this.state.address}
                                onChange={this.onChangeInput}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label"><FormattedMessage id="manage-user.numberPhone" /></label>
                            <input
                                type="text"
                                id="phoneNumber"
                                className="form-control form-control-sm"
                                placeholder="Nhập số điện thoại"
                                name="phoneNumber"
                                value={this.state.phoneNumber}
                                onChange={this.onChangeInput}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label"><FormattedMessage id="manage-user.gender" /></label>
                            <select
                                id="gender"
                                className="form-select form-select-sm"
                                name="gender"
                                value={this.state.gender}
                                onChange={this.onChangeInput}
                            >
                                {genders && genders.length > 0 &&
                                    genders.map((item, index) => (
                                        <option key={index} value={item.key}>
                                            {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="role" className="form-label"><FormattedMessage id="manage-user.role" /></label>
                            <select
                                id="role"
                                className="form-select form-select-sm"
                                name="role"
                                value={this.state.role}
                                onChange={this.onChangeInput}
                            >
                                {roles && roles.length > 0 &&
                                    roles.map((item, index) => (
                                        <option key={index} value={item.key}>
                                            {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="position" className="form-label"><FormattedMessage id="manage-user.position" /></label>
                            <select
                                id="position"
                                className="form-select form-select-sm"
                                name="position"
                                value={this.state.position}
                                onChange={this.onChangeInput}
                            >
                                {positions && positions.length > 0 &&
                                    positions.map((item, index) => (
                                        <option key={index} value={item.key}>
                                            {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        {/* Upload hình ảnh và preview */}
                        <div className="mb-3">
                            <label className="form-label">Hình ảnh</label>
                            <div className="preview-image-container">
                                <input
                                    id="previewImg"
                                    type="file"
                                    onChange={this.handlePreviewImage}
                                />
                                <label htmlFor="previewImg">Chọn hình ảnh</label>
                                <div className="preview-image" onClick={this.openLightbox}>
                                    {this.state.previewImage && <img src={this.state.previewImage} alt="preview" />}
                                </div>
                            </div>
                        </div>

                        {/* Lightbox hiển thị hình ảnh */}
                        {this.state.isOpen && (
                            <ReactImageLightbox
                                mainSrc={this.state.previewImage}
                                onCloseRequest={this.closeLightbox}
                            />
                        )}

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary w-100">
                                <FormattedMessage id="manage-user.add-user" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        isLoadingGender: state.admin.isLoadingGender,
        roleReux: state.admin.roles,
        posistionRedux: state.admin.posistions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        getPosistionStart: () => dispatch(actions.fetchPosistionStart())
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
