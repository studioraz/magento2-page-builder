/**
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE for license details.
 */

define([
    'mage/utils/wrapper',
    'underscore',
    'Magento_PageBuilder/js/utils/string'
], function (wrapper, _underscore, _string) {
    'use strict';

    return function (target) {
        var mixin = {
            generateCssBlock: function (selector, styles) {
                var generatedStyles = "";
                Object.keys(styles).forEach(function (key) {
                    if (!_underscore.isEmpty(styles[key]) && key.includes('cssVar')) {
                        var propName = key.replace('cssVar', '');
                        propName = propName.charAt(0).toLowerCase() + propName.slice(1);
                        propName = (0, _string.fromCamelCaseToDash)(propName);

                        generatedStyles += '--' + propName + ": " + styles[key] + "; ";

                        return;
                    }

                    if (!_underscore.isEmpty(styles[key])) {
                        generatedStyles += (0, _string.fromCamelCaseToDash)(key) + ": " + styles[key] + "; ";
                    }
                });
                return selector + " { " + generatedStyles + " }";
            },

            generateCss: function (styles) {
                var generatedCss = "";
                Object.keys(styles).forEach(function (selector) {
                    if (!_underscore.isEmpty(styles[selector])) {
                        generatedCss += mixin.generateCssBlock(selector, styles[selector]);
                    }
                });
                return generatedCss;
            }
        };

        // TODO: implement using super in the mixin
        target.generateCssBlock = mixin.generateCssBlock;
        target.generateCss = mixin.generateCss;

        return target;
    };
});
