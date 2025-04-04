import React from 'react';
import { Button } from '@mui/material'; 

function Header() {
  return (
    <>
<header class="top-header">
    <nav class="navbar navbar-expand-xl w-100 navbar-dark container gap-3">
      <a class="navbar-brand d-none d-xl-inline" href="index.html"><img src="" class="logo-img" alt=""/></a>
      <a class="mobile-menu-btn d-inline d-xl-none" href="javascript:;" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar">
        <i class="bi bi-list"></i>
      </a>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
        <div class="offcanvas-header">
          <div class="offcanvas-logo"><img src="assets/images/logo.webp" class="logo-img" alt=""/>
          </div>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body primary-menu">
          <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                Shop
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="cart.html">Shop Cart</a></li>
                <li><a class="dropdown-item" href="wishlist.html">Wishlist</a></li>
                <li><a class="dropdown-item" href="product-details.html">Product Details</a></li>
                <li><a class="dropdown-item" href="payment-method.html">Payment Method</a></li>
                <li><a class="dropdown-item" href="billing-details.html">Billing Details</a></li>
                <li><a class="dropdown-item" href="address.html">Addresses</a></li>
                <li><a class="dropdown-item" href="shop-grid.html">Shop Grid</a></li>
                <li><a class="dropdown-item" href="shop-grid-type-4.html">Shop Grid 4</a></li>
                <li><a class="dropdown-item" href="shop-grid-type-5.html">Shop Grid 5</a></li>
                <li><a class="dropdown-item" href="search.html">Search</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about-us.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact-us.html">Contact</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                Account
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="account-dashboard.html">Dashboard</a></li>
                <li><a class="dropdown-item" href="account-orders.html">My Orders</a></li>
                <li><a class="dropdown-item" href="account-profile.html">My Profile</a></li>
                <li><a class="dropdown-item" href="account-edit-profile.html">Edit Profile</a></li>
                <li><a class="dropdown-item" href="account-saved-address.html">Addresses</a></li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li><a class="dropdown-item" href="authentication-login.html">Login</a></li>
                <li><a class="dropdown-item" href="authentication-register.html">Register</a></li>
                <li><a class="dropdown-item" href="authentication-reset-password.html">Password</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                Blog
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="blog-post.html">Blog Post</a></li>
                <li><a class="dropdown-item" href="blog-read.html">Blog Read</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <ul class="navbar-nav secondary-menu flex-row">
        <li class="nav-item">
          <a class="nav-link dark-mode-icon" href="javascript:;">
            <div class="mode-icon">
              <i class="bi bi-moon"></i>
            </div>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="search.html"><i class="bi bi-search"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="wishlist.html"><i class="bi bi-suit-heart"></i></a>
        </li>
        <li class="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
          <a class="nav-link position-relative" href="javascript:;">
            <div class="cart-badge">8</div>
            <i class="bi bi-basket2"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="account-dashboard.html"><i class="bi bi-person-circle"></i></a>
        </li>
      </ul>
    </nav>
  </header>


    </>
  )
   

}

export default Header;
