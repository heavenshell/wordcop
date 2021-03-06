"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var visitSource_1 = require("./visitSource");
// ______________________________________________________
//
function getTypeCheckDiagnostics(checker, typeRegExpChecker, sources) {
    var allDiagnostics = sources
        .map(function (source) {
        var diagnostics = visitSource_1.visitSource(checker, typeRegExpChecker, source).diagnostics;
        return diagnostics;
    })
        .flat();
    return {
        allDiagnostics: allDiagnostics
    };
}
exports.getTypeCheckDiagnostics = getTypeCheckDiagnostics;
