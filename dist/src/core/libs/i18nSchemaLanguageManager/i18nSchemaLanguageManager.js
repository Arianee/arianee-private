"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var iso_language_picker_1 = require("@arianee/iso-language-picker");
var macros = ['fr-FR', 'en-US', 'ko-KR', 'ja-JP', 'de-DE'];
exports.replaceLanguage = function (certificateSummary, languages) {
    var availableLanguages = exports.availableLanguagesExtract(certificateSummary.content.data);
    var defaultLanguage = certificateSummary.content.data.language;
    var language = iso_language_picker_1.pickLanguageAccordingToUserLanguagesWithMacrosFallback(macros, languages, availableLanguages, defaultLanguage);
    if (language) {
        certificateSummary.content.data = exports.replaceLanguageContent(certificateSummary.content.data, language);
    }
    return certificateSummary;
};
exports.replaceLanguageContentWithFavUserLanguage = function (certificateId18n, languages) {
    var availableLanguages = exports.availableLanguagesExtract(certificateId18n);
    var defaultLanguage = certificateId18n.language;
    var language = iso_language_picker_1.pickLanguageAccordingToUserLanguagesWithMacrosFallback(macros, languages, availableLanguages, defaultLanguage);
    return exports.replaceLanguageContent(certificateId18n, language);
};
exports.availableLanguagesExtract = function (certificateId18n) {
    var defaultLanguage = certificateId18n.language;
    var availableTranslation = certificateId18n.i18n.map(function (i) { return i.language; });
    return __spreadArrays([defaultLanguage], availableTranslation);
};
exports.replaceLanguageContent = function (certificateId18n, language) {
    var translated = certificateId18n.i18n.find(function (i) { return i.language === language; });
    return __assign(__assign({}, certificateId18n), translated);
};
exports.replaceLanguageIdentityContentWithFavUserLanguage = function (identityI18n, languages) {
    var availableLanguages = identityI18n.i18n.map(function (i) { return i.language; }).filter(function (i) { return i !== undefined && i !== null; });
    var defaultLanguage = 'en-US';
    var language = iso_language_picker_1.pickLanguageAccordingToUserLanguagesWithMacrosFallback(macros, languages, availableLanguages, defaultLanguage);
    return exports.replaceLanguageContent(identityI18n, language);
};
//# sourceMappingURL=i18nSchemaLanguageManager.js.map