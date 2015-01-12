/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define([
  'jquery',
  'views/base',
  'stache!templates/common/main-footer'
], function ($, BaseView, FooterTemplate) {
  'use strict';

  var FooterView = BaseView.extend({
    template: FooterTemplate,
    className: 'footer',
  });

  return FooterView;

});
