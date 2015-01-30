/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define([
  'jquery',
  'underscore',
  'views/base',
  'fullpage',
  'stache!templates/component/landing'
], function ($, _, BaseView, fullpage, LandingTemplate) {
  'use strict';

  var LandingView = BaseView.extend({
    template: LandingTemplate,
    events: {
      'click .skip-intro':'skipIntro'
    },

    afterRender: function() {
    },

    afterInsert: function() {
      var that = this;
      this.$("#fullpage").fullpage({
        navigation: true,
        navigationPosition: 'right',
          onLeave: function(index, nextIndex, direction){
            if(nextIndex === 2) {
            setTimeout(function(){
              that.$('.round').addClass('is-delayed-fade');
              that.$('.square-holder').addClass('is-move-delayed-fade');
            },1000)
          }
          else if(nextIndex === 3) {
            that.$('.secure').addClass('is-delayed-fade');
            that.$('.plus').addClass('is-delayed-fade-1');
            that.$('.private').addClass('is-delayed-fade-2');
            that.$('.equal').addClass('is-delayed-fade-3');
            that.$('.logo').addClass('is-delayed-fade-4');
          }
        }
      });
    },

    skipIntro: function() {
      console.log('blorb');
      $.fn.fullpage.moveTo(4, 0);
    }

  });

  return LandingView;
});
