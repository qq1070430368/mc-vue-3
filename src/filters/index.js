import Vue from 'vue';
import filters from './common';

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
})
;
