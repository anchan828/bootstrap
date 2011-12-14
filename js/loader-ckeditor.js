if (CKEDITOR != undefined) {
    var CKEDITOR_TOOLBAR = [
        { name: 'basicstyles', items : [ 'Format','-','Bold','Italic','Underline','Strike','-','RemoveFormat' ] },
        { name: 'list',        items : [ 'NumberedList','BulletedList','-','Table','HorizontalRule' ] },
        { name: 'paragraph',   items : [ 'JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ] },
        { name: 'insert',      items : [ 'Link','Unlink','-','Image','SpecialChar' ] },
    ];

    CKEDITOR.editorConfig = function(config)
    {
        config.toolbar = 'Standard';
        config.toolbar_Standard = CKEDITOR_TOOLBAR;
    }

    $(function () {
        $('textarea.editor').each(function() {
            $(this).ckeditor( { toolbar : $(this).attr('data-editor-toolbar') ? $(this).attr('data-editor-toolbar') : CKEDITOR_TOOLBAR } );
        })
    });
}
