"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __importDefault(require("./Utilities/Utils"));
class InitializeAzure {
    static importAzModule(azPSVersion) {
        return __awaiter(this, void 0, void 0, function* () {
            Utils_1.default.setPSModulePath();
            /* if (azPSVersion === "latest") {
                azPSVersion = await Utils.getLatestModule(Constants.moduleName);
            } else {
                await Utils.checkModuleVersion(Constants.moduleName, azPSVersion);
            }
            azPSVersion = '3.8.0';
            core.debug(`Az Module version used: ${azPSVersion}`);
            Utils.setPSModulePath(`${Constants.prefix}${azPSVersion}`); */
        });
    }
}
exports.default = InitializeAzure;
