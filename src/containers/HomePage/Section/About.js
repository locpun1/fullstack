import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {


    render() {




        return (
            <div className='section-share section-about'>
                <div className='section-container section-about-container'>
                    <div className='section-title section-about-title'>
                        <h2>Truyền thông nói gì về Locpun</h2>
                    </div>
                    <div className='section-about-content'>
                        <div className='section-about-video'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZNVVMlZbzVk"
                                title="Ừ THÌ CHIA TAY - CAPTAIN BOY ft. RHYDER | OFFICIAL MV"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                               picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
                        </div>
                        <div className='section-about-text'>
                            <h3>Locpun - Sức ảnh hưởng và tầm nhìn</h3>
                            <p>Locpun là thương hiệu tiên phong trong ngành công nghiệp sáng tạo, nổi bật với những sản phẩm chất lượng và phong cách độc đáo.</p>
                            <ul>
                                <li>Đạt giải thưởng doanh nghiệp sáng tạo 2023</li>
                                <li>Hợp tác với hơn 100 đối tác quốc tế</li>
                                <li>Tầm nhìn vươn ra toàn cầu, hướng đến đổi mới bền vững</li>
                            </ul>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
