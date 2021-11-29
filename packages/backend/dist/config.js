"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frontendOrigin = exports.isDev = void 0;
exports.isDev = process.env.NODE_ENV === "development";
exports.frontendOrigin = exports.isDev
    ? "http://localhost:3000/"
    : "https://chevayamos.com/";
