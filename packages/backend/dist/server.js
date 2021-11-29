"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.listen = exports.server = exports.appRouter = void 0;
var trpc = __importStar(require("@trpc/server"));
var standalone_1 = require("@trpc/server/adapters/standalone");
var Context_1 = __importDefault(require("./Context"));
var AuthController_1 = __importDefault(require("./controllers/AuthController"));
exports.appRouter = trpc.router().merge("auth/", AuthController_1.default);
// http server
exports.server = (_a = standalone_1.createHTTPServer({
    router: exports.appRouter,
    createContext: Context_1.default,
}), _a.server), exports.listen = _a.listen;
var PORT = 2022;
exports.listen(PORT);
console.log("server listening on port " + PORT);
var close = function () { return exports.server.close(); };
exports.close = close;
