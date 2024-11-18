import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import img1 from '../../../../src/assets/pexels-photo-5638644.jpeg';

class Specialty extends Component {


    render() {
        const specialties = [
            { id: 1, name: "Chuyên khoa Nội", image: img1 },
            { id: 2, name: "Chuyên khoa Ngoại", image: img1 },
            { id: 3, name: "Chuyên khoa Răng hàm mặt", image: img1 },
            { id: 4, name: "Chuyên khoa Mắt", image: img1 },
            { id: 5, name: "Chuyên khoa Tai mũi họng", image: img1 }
        ];



        return (
            <div className="section-share specialty-wrapper">
                <div className="section-container specialty-container">
                    <div className="section-title specialty-title">
                        <h2>Danh sách chuyên khoa</h2>
                        <div className="section-more specialty-more" >
                            <span>Xem Thêm</span>
                        </div>
                    </div>
                    <div className='list-section list-specialty'>
                        <Slider {...this.props.settings}>
                            {specialties.map((specialty) => (
                                <div key={specialty.id} className="section-item specialty-item">
                                    <img src={specialty.image} alt={specialty.name} />
                                    <div className="section-name specialty-name">{specialty.name}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
