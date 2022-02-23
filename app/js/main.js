import {swiperConfig} from './configs/swiper';
import {memberForm} from './member/memberForm';
import {modal} from './modal/modal';
import {changeBgOnScroll, showNavMenu, smoothScroll} from './nav/nav';

document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  swiperConfig();
  modal();
  memberForm();
  showNavMenu();
  smoothScroll();
  changeBgOnScroll();
});
