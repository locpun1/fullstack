import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import img1 from '../../../../src/assets/z5488009739821_489dc50e8aa063124d45c38a355ab231.jpg';

class OutStandingDocotr extends Component {


    render() {
        const specialties = [
            { id: 1, name: "Phó giáo sư,Tiến sĩ,Trương Quang Lộc", image: img1, MedicalFacility: 'Da liễu' },
            { id: 2, name: "Giáo sư,Tiến sĩ Trương Quang Lộc", image: img1, MedicalFacility: 'Da liễu' },
            { id: 3, name: "Phó giáo sư,Tiến sĩ,Bác sĩ cao cấp Trương Quang Lộc", image: img1, MedicalFacility: 'Da liễu' },
            { id: 4, name: "Giáo sư,Tiến sĩ Trương Quang Lộc", image: img1, MedicalFacility: 'Da liễu' },
            { id: 5, name: "Giáo sư,Tiến sĩ Trương Quang Lộc", image: img1, MedicalFacility: 'Da liễu' }
        ];
        return (
            <div className="section-share OutStandingDoctor-wrapper">
                <div className="section-container OutStandingDoctor-container">
                    <div className="section-title OutStandingDoctor-title">
                        <h2>bác sĩ nổi bật tuần qua</h2>
                        <div className=" section-more OutStandingDoctor-more" >
                            <span>Xem Thêm</span>
                        </div>
                    </div>
                    <div className='list-section list-OutStandingDocotr'>
                        <Slider {...this.props.settings}>
                            {specialties.map((OutStandingDoctor) => (
                                <div key={OutStandingDoctor.id} className="section-item OutStandingDoctor-item">
                                    <div className='OutStandingDoctor-img'><img src={OutStandingDoctor.image} alt={OutStandingDoctor.name} /></div>
                                    <div className="section-name OutStandingDoctor-name">{OutStandingDoctor.name}</div>
                                    <div className='OutStandingDoctor-MedicalFacility'>{OutStandingDoctor.MedicalFacility}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDocotr);
