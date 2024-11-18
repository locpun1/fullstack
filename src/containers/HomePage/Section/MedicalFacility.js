import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import img1 from '../../../../src/assets/z5488009739821_489dc50e8aa063124d45c38a355ab231.jpg';

class MedicalFacility extends Component {


    render() {
        const specialties = [
            { id: 1, name: "Phóng khám Hà Đông", image: img1 },
            { id: 2, name: "Phòng khám Cầu Giấy", image: img1 },
            { id: 3, name: "Phòng khám Ba đình", image: img1 },
            { id: 4, name: "Phòng khám Hồ Tây", image: img1 },
            { id: 5, name: "Phòng khám Thu Cúc", image: img1 }
        ];
        return (
            <div className="section-share MedicalFacility-wrapper">
                <div className="section-container MedicalFacility-container">
                    <div className="section-title MedicalFacility-title">
                        <h2>Cơ sở y tế nổi bật</h2>
                        <div className=" section-more MedicalFacility-more" >
                            <span>Xem Thêm</span>
                        </div>
                    </div>
                    <div className='list-section list-MedicalFacility'>
                        <Slider {...this.props.settings}>
                            {specialties.map((MedicalFacility) => (
                                <div key={MedicalFacility.id} className="section-item MedicalFacility-item">
                                    <img src={MedicalFacility.image} alt={MedicalFacility.name} />
                                    <div className="section-name MedicalFacility-name">{MedicalFacility.name}</div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
