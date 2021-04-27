"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleController = void 0;
const common_1 = require("@nestjs/common");
let SampleController = class SampleController {
    findAll() {
        return 'FIND ALL';
    }
    find() {
        return 'FIND ALL USING ID';
    }
    create() {
        return 'CREATE';
    }
    update() {
        return 'UPDATE';
    }
    Update() {
        return 'UPDATE USING ID';
    }
    delete() {
        return 'DELETE';
    }
    Delete() {
        return 'DELETE USING ID';
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SampleController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SampleController.prototype, "find", null);
__decorate([
    common_1.Post(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SampleController.prototype, "create", null);
__decorate([
    common_1.Put(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SampleController.prototype, "update", null);
__decorate([
    common_1.Put(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SampleController.prototype, "Update", null);
__decorate([
    common_1.Delete('del'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SampleController.prototype, "delete", null);
__decorate([
    common_1.Delete(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SampleController.prototype, "Delete", null);
SampleController = __decorate([
    common_1.Controller('sample')
], SampleController);
exports.SampleController = SampleController;
//# sourceMappingURL=sample.controller.js.map