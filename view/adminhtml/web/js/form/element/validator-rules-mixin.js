/*
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE.txt for license details.
 */

define([
    'jquery',
    'underscore',
    'Magento_Ui/js/lib/validation/utils'
], function ($, _, utils) {
    'use strict';

    /**
     * Validate that string is url
     * @param {String} href
     * @return {Boolean}
     */
    function validateIsUrl(href) {
        return (/^(http|https|ftp):\/\/(([A-Z0-9]([A-Z0-9_-]*[A-Z0-9]|))(\.[A-Z0-9]([A-Z0-9_-]*[A-Z0-9]|))*)(:(\d+))?(\/[A-Z0-9~](([A-Z0-9_~-]|\.)*[A-Z0-9~]|))*\/?(.*)?$/i).test(href);//eslint-disable-line max-len
    }

    return function (validator) {
        var requiredInputRule = validator.getRule('required-entry');

        validator.addRule(
            'validate-html-video-source',
            function (href) {
                if (utils.isEmptyNoTrim(href)) {
                    return true;
                }

                href = (href || '').replace(/^\s+/, '').replace(/\s+$/, '');

                return validateIsUrl(href) && href.match(/\.(mp4|ogg|webm)(?!\w)/);
            },
            $.mage.__('Please enter a valid video URL. Valid URLs have a video file extension (.mp4, .webm, .ogv).')//eslint-disable-line max-len
        );

        return validator;
    };
});
