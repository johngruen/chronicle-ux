/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define([
  'jquery',
  'views/base',
  'stache!templates/component/loading'
], function ($, BaseView, LoadingTemplate) {
  'use strict';

  var LoadingView = BaseView.extend({
    template: LoadingTemplate,

    afterInsert: function() {

      this.loadingEls = this.$('.loading-element');
      this.currentElement = 0;
      this.rotationTime = 3000;

      this.loadingEls.eq(0).show().addClass('is-pop-in-fade-out');

      this.loadingElementSwitcher();
      this.loadingBar();

    },

    loadingBar: function() {
      var loadingTime = this.loadingEls.length * this.rotationTime;
      this.$(".loading-bar").animate({width:'100%'}, loadingTime);
    },

    loadingElementSwitcher: function(length) {
      var that = this;

      setTimeout(function(){
          that.loadingEls.eq(that.currentElement).hide();
          that.currentElement++;

        if (that.currentElement < that.loadingEls.length - 1) {
          that.loadingEls.eq(that.currentElement).show().addClass('is-pop-in-fade-out');
          that.loadingElementSwitcher();
        }
        else {
          that.loadingEls.eq(that.currentElement).show().addClass('is-pop-in');
        }

      }, that.rotationTime);
    }

  });

  return LoadingView;

});
