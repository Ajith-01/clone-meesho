import React, { Component } from "react";
import { FiSmartphone, FiShoppingCart } from "react-icons/fi";
function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            meesho
          </a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2 "
              type="search"
              placeholder="Try Saree,Kurti or Search by Product Code"
              aria-label="Search"
            />
          </form>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#Download">
                  <FiSmartphone />
                  Download App
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Suppiler">
                  Became a Supplier
                </a>
              </li>
              <li class="nav-item" id="border">
                <a class="nav-link" href="#">
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <FiShoppingCart />
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav class="sec-nav">
        <div class="sec1-nav">
          <ul class="navbar-bar nav2">
            <li class="nav-item nav-li2">
              <a class="nav-link " aria-current="page" href="#">
                Women Ethnic
              </a>
            </li>
            <li class="nav-item nav-li2">
              <a class="nav-link " aria-current="page" href="#">
                Women Western
              </a>
            </li>
            <li class="nav-item nav-li2">
              <a class="nav-link " aria-current="page" href="#">
                Men
              </a>
            </li>
            <li class="nav-item nav-li2">
              <a class="nav-link " aria-current="page" href="#">
                Kids
              </a>
            </li>
            <li class="nav-item nav-li2">
              <a class="nav-link " aria-current="page" href="#">
                Home & Kitchen
              </a>
            </li>
            <li class="nav-item nav-li2">
              <a class="nav-link " aria-current="page" href="#">
                Beauty & Health
              </a>
            </li>
            <li class="nav-item nav-li2">
              <a class="nav-link " aria-current="page" href="#">
                Jewellery & Accessories
              </a>
            </li>
            <li class="nav-item nav-li2">
              <a class="nav-link " aria-current="page" href="#">
                Bags & Footwear
              </a>
            </li>
            <li class="nav-item nav-li2">
              <a class="nav-link " aria-current="page" href="#">
                Electronics
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
