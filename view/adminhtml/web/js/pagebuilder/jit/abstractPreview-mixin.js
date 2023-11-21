/*
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE.txt for license details.
 */

define([
    'jquery',
    'mage/utils/wrapper'
], function ($, wrapper) {
    'use strict';

    return function (target) {
        target.updatePreviewIframe = wrapper.wrapSuper(target.updatePreviewIframe, function (iframe, html) {
            var result = this._super(iframe, html);

            if (parseInt(document.querySelector('[name="is_rtl"]').value)) {
                iframe.contentWindow.document.body.setAttribute('dir', 'rtl');
            }

            return result;
        });

        return target;
    };
});
