/**
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE.txt for license details.
 **/

define([
    'jquery',
    'accordion'
], function ($) {
    'use strict';

    return function (config, element) {
        var element = $(element);
        element.children("li").each(function (i) {
            $(this).find("[data-collapsible]").attr("data-role", "collapsible");
            $(this).find("[data-content]").attr("data-role", "content");
        });
        element.accordion({
            collapsible: true,
            multipleCollapsible: true
        });
    };
});
