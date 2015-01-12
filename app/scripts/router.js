/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define([
  'jquery',
  'backbone',
  'views/main',
  'views/ux-site/ux-site'
], function ($, Backbone, MainView, UxView) {
  'use strict';

  var Router = Backbone.Router.extend({
    routes: {
      '': 'showUx',
      'main': 'showMain'

    },

    showMain: function () {
      this.setStage(new MainView());
    },

    showUx: function () {
      this.setStage(new UxView());
    },


    setStage: function (view) {
      // Destroy the current view before replacing it
      if (this.currentView) {
        this.currentView.destroy();
      }

      this.currentView = view;

      $('#stage').html(this.currentView.render().el);
    }
  });

  // Return a singleton
  return new Router();
});
