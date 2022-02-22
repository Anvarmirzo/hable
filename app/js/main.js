import {swiperConfig} from './configs/swiper';
import {memberForm} from './member/memberForm';
import {modal} from './modal/modal';

document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  swiperConfig();
  modal();
  memberForm();
});
