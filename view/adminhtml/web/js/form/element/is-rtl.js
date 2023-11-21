/*
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE.txt for license details.
 */

define([
    'Magento_Ui/js/form/element/single-checkbox',
], function (SingleCheckbox) {
    'use strict';

    return SingleCheckbox.extend({

        /**
         * Switch direction on update
         *
         * @returns void
         */
        onUpdate: function () {
            this._super();
            this.switchDirection();
        },

        switchDirection: function () {
            var iframes = document.querySelectorAll('.pagebuilder-text iframe');

            // Loop through each iframe
            for (var i = 0; i < iframes.length; i++) {
                var iframe = iframes[i];
                var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                var iframeBody = iframeDocument.querySelector('body');
                iframeBody.dir = parseInt(this.value()) ? 'rtl' : 'ltr';
            }
        },
    });
});
