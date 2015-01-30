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
      this.$("#fullpage").fullpage({
        navigation: true,
        navigationPosition: 'right'
      });
    },

    skipIntro: function() {
      console.log('blorb');
      $.fn.fullpage.moveTo(4, 0);
    }

  });

  return LandingView;
});
