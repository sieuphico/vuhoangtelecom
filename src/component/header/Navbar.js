import React, { Component } from "react";
import logo from '../../logo.svg';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';


export default function Navbar() {
    return (
        <header class="header">
        <div class="grid">
            <nav class="header__navbar">
                <ul class="header__navbar-list">
                    <li class="header__navbar-item header__navbar-item--phone">
                        <a href="" class="header__navbar-item-link" />
                        <i class="fas fa-phone-alt"></i>
                        19009259
                    </li>
                    <li class="header__navbar-item header__navbar-item--about">
                        <a href="" class="header__navbar-item-link" />
                        <i class="fas fa-info"></i>Giới thiệu
                    </li>
                    <li class="header__navbar-item header__navbar-item--system">
                        <a href="" class="header__navbar-item-link" />
                        <i class="fas fa-location-arrow"></i>Hệ thống chi nhánh
                    </li>
                    <li class="header__navbar-item header__navbar-item--recruitment">
                        <a href="" class="header__navbar-item-link" />
                        <i class="fas fa-bullhorn"></i>Tuyển dụng
                    </li>
                </ul>
                <ul class="header__navbar-list">
                    <li class="header__navbar-item">
                        <a href="" class="header__navbar-item-link">
                            <i class="fas fa-headphones-alt"></i>
                            Hỗ trợ khách hàng</a>
                    </li>
                    <li class="header__navbar-item">
                        <a href="" class="header__navbar-item-link">
                            <i class="fas fa-cloud-download-alt"></i>
                            Download tài liệu</a>
                    </li>
                    <li class="header__navbar-item">
                        <a href="" class="header__navbar-item-link" />
                        <i class="fas fa-shopping-basket"></i>
                        Tra cứu bảo hành
                    </li>
                    <li class="header__navbar-item">
                        <a href="" class="header__navbar-item-link">
                            <i class="fas fa-box-open"></i>
                            Đại Lý
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="grid__row">
                <div class="grid__col-2">
                    <div class="header__logo">
                        <Link to="/"><img src={logo} alt="logo" width="150" height="150" /></Link>

                    </div>
                </div>
                <div class="grid__col-10 header__search">
                    <div class="search__searchbox">
                        <input class="searchbox__input" type="text" placeholder="Bạn cần tìm..." />
                        <button class="btn__search" type="submit" title="Start Search">
                            <i class="fa fa-search" aria-hidden="true"></i> <span>Tìm kiếm</span>
                        </button>
                    </div>

                    <div class="search__opts">
                        <div class="search__opts__item search__account">
                          <Link to="/login">
                          <i class="searchrow__icon fas fa-user-circle"></i>
                            Tài Khoản
                          </Link>
                        </div>

                        <div class="search__opts__item search__cart">
                            <i class="searchrow__icon fas fa-shopping-cart"></i>
                            Giỏ Hàng
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </header>
    );
}