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

            // Find input with name="is_rtl"
            let inputIsRtl = document.querySelector('input[name="is_rtl"]');
            if (inputIsRtl && parseInt(inputIsRtl.value)) {
                result.directionality = 'rtl';
            }

            // Find input with name="product[is_rtl]"
            let inputProductIsRtl = document.querySelector('input[name="product[is_rtl]"]');
            if (inputProductIsRtl && parseInt(inputProductIsRtl.value)) {
                result.directionality = 'rtl';
            }

            return result;
        });

        return tinymce5Adapter;
    };

});
