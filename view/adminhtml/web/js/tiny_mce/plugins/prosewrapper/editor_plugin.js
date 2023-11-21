(function() {
    tinymce.create('tinymce.plugins.TextWrapWithProsePlugin', {
        /**
         * @param {tinymce.Editor} editor - Editor instance that the plugin is initialized in.
         */
        init: function (editor) {

            editor.addCommand('mceProseWrapper', function (content) {
                var selectedNode = editor.selection.getNode();

                if (editor.dom.hasClass(selectedNode, 'prose')) {
                    editor.dom.removeClass(selectedNode, 'prose');
                    // editor.dom.unwrap(selectedNode);
                } else {
                    var selectedText = editor.selection.getContent();
                    if (selectedText) {
                        var wrappedText = '<div class="prose">' + selectedText + '</div>';
                        editor.insertContent(wrappedText);
                    }
                }
            });

            editor.ui.registry.addToggleButton('prosewrapper', {
                // icon: 'prosewrapper',
                tooltip: jQuery.mage.__('Wrap Text In Hyva prose class'),

                /**
                 * execute openVariablesSlideout for onAction callback
                 */
                onAction: function () {
                    editor.execCommand('mceProseWrapper');
                },
                // Add text fallback for the button
                text: 'TW Prose Wrapper',
            });
        },
    });

    // Register plugin
    tinymce.PluginManager.add('prosewrapper', tinymce.plugins.TextWrapWithProsePlugin);
})();
