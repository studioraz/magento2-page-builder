/*
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE.txt for license details.
 */
define([
    'jquery',
    'mage/utils/wrapper'
], function ($, wrapper) {
    'use strict';
    return function (tinymce5Adapter) {
        tinymce5Adapter.getSettings = wrapper.wrapSuper(tinymce5Adapter.getSettings, function () {
            var result = this._super();

            if (parseInt(document.querySelector('[name="is_rtl"]').value)) {
                result.directionality = 'rtl';
            }

            return result;
        });

        return tinymce5Adapter;
    };

});
