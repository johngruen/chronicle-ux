/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define([
  'jquery',
  'views/base',
  'views/common/main-notification',
  'views/common/main-header',
  'views/common/main-footer',
  'stache!templates/main',
], function ($, BaseView, NotificationView, HeaderView, FooterView, MainTemplate) {
  'use strict';

  var MainView = BaseView.extend({
    template: MainTemplate,
    className: 'l-full-flex',

    afterRender: function() {
      this.assign(this.trackSubview(new NotificationView()), '#main-notification-wrapper');
      this.assign(this.trackSubview(new HeaderView()), '#main-header-wrapper');
      this.assign(this.trackSubview(new FooterView()), '#main-footer-wrapper');
    }
  });

  return MainView;
});
