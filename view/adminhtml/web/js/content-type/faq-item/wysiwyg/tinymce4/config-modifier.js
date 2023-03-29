/**
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE.txt for license details.
 **/

define([], function () {
    'use strict';

    /**
     * @constructor
     */
    function ConfigModifier () {

    }
    ConfigModifier.prototype = Object.create({});

    /**
     * @param contentTypeId
     * @param config
     */
    ConfigModifier.prototype.modify = function(contentTypeId, config) {
        if (config.adapter_config.mode === "inline") {
            config.adapter.settings.fixed_toolbar_container = "#" + contentTypeId + " " + "[data-role='content']";
        }
    };

    return ConfigModifier;
});
