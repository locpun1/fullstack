import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import img1 from '../../../../src/assets/pexels-photo-5638644.jpeg';

class HandBook extends Component {


    render() {
        const specialties = [
            { id: 1, name: "Khám dạ dày ở đâu tốt?", image: img1 },
            { id: 2, name: "Trồng Răng ở đâu đẹp?", image: img1 },
            { id: 3, name: "Đây có phải người đẹp trai nhất?", image: img1 },
            { id: 4, name: "Đây có phải người đẹp trai nhất?", image: img1 },
            { id: 5, name: "Đây có phải người đẹp trai nhất?", image: img1 }
        ];



        return (
            <div className="section-share HandBook-wrapper">
                <div className="section-container HandBook-container">
                    <div className="section-title HandBook-title">
                        <h2>Cẩm Nang</h2>
                        <div className="section-more HandBook-more" >
                            <span>Xem Thêm</span>
                        </div>
                    </div>
                    <div className='list-section list-HandBook'>
                        <Slider {...this.props.settings}>
                            {specialties.map((HandBook) => (
                                <div key={HandBook.id} className="section-item HandBook-item">
                                    <img src={HandBook.image} alt={HandBook.name} />
                                    <div className="section-name HandBook-name">{HandBook.name}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
