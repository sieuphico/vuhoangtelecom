import React, { Component } from 'react';

export default class TopContainer extends Component {
    render() {
        return (
            <div class="app__container">
            <div class="topbar">
                <div class="grid topbar__row">
                    <div class="grid__row ">
                        <div class="grid__col-3 topbar__item ">
                            <div class="topbar__button-left">
                                <a class="topbar__button" href="#">
                                    <i class="fa fa-bars" aria-hidden="true">
                                    </i> DANH MỤC SẢN PHẨM</a>
                            </div>                       
                        </div>
                        <div class="grid__col-9 topbar__item">
                            <ur class="topbar__category-list">
                                <li class="topbar__category-item">
                                    <a class="category-item--link item--1" href="#">
                                       Sản phẩm đc quan tâm</a>
                                </li>
                                <li class="topbar__category-item">
                                    <a class="category-item--link item--2" href="#">
                                        Khuyến mãi</a>
                                </li>
                                <li class="topbar__category-item">
                                    <a class="category-item--link item--3" href="#">
                                        Giao hàng 24h</a>
                                </li>
                                <li class="topbar__category-item ">
                                    <a class="category-item--link item--4 " href="#">
                                        7 ngày đổi trả </a>
                                </li>
                                <li class="topbar__category-item">
                                    <a class="category-item--link item--5" href="#">
                                        Tin công nghệ </a>
                                </li>
                            </ur>

                        </div>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="grid__row">
                    <div class="grid__col-3">
                        <nav class="category">
                            <ul class="category-list">
                                <li class="category-item ">
                                    <a href="">
                                         Sản phẩm khuyến mại</a>
                                </li>
                                <li class="category-item">
                                    <a href="">
                                        Dịch vụ trọn gói
                                    </a>
                                </li>
                                <li class="category-item  ">
                                    <a href="" > Thiết bị camera an ninh</a>
                                </li>
                                <li class="category-item  ">
                                    <a href="" >
                                        Thiết bị báo động - báo cháy
                                    </a>
                                </li>
                                <li class="category-item  ">
                                    <a href="" >
                                        Thiết bị Văn phòng - gia đình
                                    </a>
                                </li>
                                <li class="category-item  ">
                                    <a href="">
                                        Thiết bị kiểm soát cửa
                                    </a>
                                </li>
                                <li class="category-item  ">
                                    <a href="">
                                        Thiết bị viễn thông
                                    </a>
                                </li>
                                <li class="category-item  ">
                                    <a href="">
                                        Thiết bị số - công nghệ
                                    </a>
                                </li>
                                <li class="category-item  ">
                                    <a href="" >
                                        Thiết bị điện thông minh
                                    </a>
                                </li>
                                <li class="category-item  ">
                                    <a href="" >
                                        Thiết bị ý tế - sức khoẻ
                                    </a>
                                </li>
                                <li class="category-item  ">
                                    <a href="">
                                        Thiết bị siêu thị
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="grid__col-6">
                        <div class="slieshow">
                            <div class="slide-wrapper">
                                <div class="slide">
                                    <img width="711" height="416" 
                                    src="https://vuhoangtelecom.vn/wp-content/uploads/2021/10/lap-khoa-phglock-them-qua-tang-711x416-1.jpg" 
                                    class="attachment-post-thumbnail size-post-thumbnail wp-post-image" 
                                    alt="Khuyến mãi lắp khóa điện tử tháng 10" loading="lazy" 
                                    srcset="https://vuhoangtelecom.vn/wp-content/uploads/2021/10/lap-khoa-phglock-them-qua-tang-711x416-1.jpg 711w, https://vuhoangtelecom.vn/wp-content/uploads/2021/10/lap-khoa-phglock-them-qua-tang-711x416-1-427x250.jpg 427w, https://vuhoangtelecom.vn/wp-content/uploads/2021/10/lap-khoa-phglock-them-qua-tang-711x416-1-600x351.jpg 600w" sizes="(max-width: 711px) 100vw, 711px"/>
                                </div>
                               
                              </div>
                        </div>
                    </div>
                    <div class="grid__col-3">
                        <div class="img_qc">
                            <a href="/tinh-dung-luong-o-cung-cho-camera/">
                            <img src="https://vuhoangtelecom.vn/wp-content/uploads/2021/01/banner-tinh-dung-luong-luu-tru-camera.jpg" alt="Vuhoangtelecom"/>
                            </a>
                        </div>
                        <div class="img_qc">
                            <a href="/tron-bo-camera-ip-wifi-khong-day/?utm_source=cpc&amp;utm_campaign=camera-khong-day&amp;utm_term=camerawifi">
                            <img src="https://vuhoangtelecom.vn/wp-content/uploads/2020/11/banner-lap-dat-camera-wifi-gia-re-thang-11.jpg" alt="Vuhoangtelecom"/>
                            </a>
                        </div>
                        <div class="img_qc">
                            <a href="/khoa-thong-minh-smart-lock-phglock/?utm_source=web&amp;utm_medium=cpc&amp;utm_campaign=khoa-phglock&amp;utm_term=khoa-phglock">
                            <img src="https://vuhoangtelecom.vn/wp-content/uploads/2020/11/banner-ban-khoa-cua-phglock-gia-re-thang-11.jpg" alt="Vuhoangtelecom"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}