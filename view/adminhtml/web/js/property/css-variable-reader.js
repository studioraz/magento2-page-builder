/*eslint-disable */
/* jscs:disable */
define(["Magento_PageBuilder/js/utils/string"], function (_string) {
  /**
   * Copyright © Magento, Inc. All rights reserved.
   * See COPYING.txt for license details.
   */

  /**
   * @api
   */
  var StylePropertyReader = /*#__PURE__*/function () {
    "use strict";

    function StylePropertyReader() {}

    var _proto = StylePropertyReader.prototype;

    /**
     * Read style property from element
     *
     * @param {HTMLElement} element
     * @param {string} source
     * @returns {string | object}
     */
    _proto.read = function read(element, source) {
        let cssVarName = source.replace('css_var_', '').replaceAll('_', '-');
        let elemStylesSource = element.getAttribute('data-desktop-style');

        if (!elemStylesSource) {
            var camelCasedSource = (0, _string.fromSnakeToCamelCase)(source);
            return element.style[camelCasedSource];
        }

        let elemStyles = elemStylesSource.split(';');
        let targetStyleLine = elemStyles.filter(function name(elem) {
            return elem.includes(cssVarName);
        });

        if (targetStyleLine.length === 0) {
            return '';
        }

        let targetStyle = targetStyleLine[0].split(':');

        return targetStyle[1].trim();
    };

    return StylePropertyReader;
  }();

  return StylePropertyReader;
});
