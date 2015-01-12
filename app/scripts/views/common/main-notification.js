/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define([
  'jquery',
  'views/base',
  'stache!templates/common/main-notification'
], function ($, BaseView, NotificationTemplate) {
  'use strict';

  var NotificationView = BaseView.extend({
    template: NotificationTemplate,
    className: 'notification-bar',

    events: {
      'click button': 'hide'
    },

    hide: function() {
      this.$el.slideUp(200);
    }

  });

  return NotificationView;

});
