/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define([
  'jquery',
  'views/base',
  'stache!templates/items'
], function ($, BaseView, ItemsTemplate) {
  'use strict';

  var ItemsView = BaseView.extend({
    template: ItemsTemplate,
    className: 'items-page',
    events: {
      'click .icon-button-warn': 'closeItem',
    },

    closeItem: function(e) {
      $(e.target).closest('.item').fadeOut(1000);
    },

    afterRender: function() {
      $('#top-bar').addClass('dark');
    }

  });

  return ItemsView;
});
