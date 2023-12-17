$('#translate').on('click', function () {
    translate();
});

function translate() {
    var text_uz = $('#text_uz').val();
    var lang_en = 'uz';
    var lang_uz = 'en';
    var lang_ru = 'ru';
    var lang_tr = 'tr';

    var url_en_to_uz = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + lang_en + "&tl=" + lang_uz + "&dt=t&q=" + encodeURI(text_uz);
    var url_uz_to_ru = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + lang_en + "&tl=" + lang_ru + "&dt=t&q=" + encodeURI(text_uz);
    var url_ru_to_tr = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + lang_en + "&tl=" + lang_tr + "&dt=t&q=" + encodeURI(text_uz);

    $.getJSON(url_en_to_uz, function (data) {
        var translatedTextEnToUz = data[0][0][0];
        $('#text_en').val(translatedTextEnToUz);

        $.getJSON(url_uz_to_ru, function (data) {
            var translatedTextUzToRu = data[0][0][0];
            $('#text_ru').val(translatedTextUzToRu);

            $.getJSON(url_ru_to_tr, function (data) {
                var translatedTextRuToTr = data[0][0][0];
                $('#text_tr').val(translatedTextRuToTr);
            });
        });
    });
}