/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define([
  'jquery',
  'views/base',
  'views/alert',
  'stache!templates/index'
], function ($, BaseView, AlertView, IndexTemplate) {
  'use strict';

  var IndexView = BaseView.extend({
    template: IndexTemplate,
    className: 'front-page',

    afterRender: function() {
      this.assign(this.trackSubview(new AlertView()), '#alert-wrapper');
      $('#top-bar').addClass('dark');
    }

  });

  return IndexView;
});
