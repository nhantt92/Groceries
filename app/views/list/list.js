var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var config = require("../../shared/config");
var fetchModule = require("fetch");
// var pageData = new observableModule.fromObject({
//     groceryList: new ObservableArray([
//         { name: "Cam" },
//         { name: "Buoi" },
//         { name: "Xoai" },
//         { name: "Quyt"}
//     ])
// });

// exports.loaded = function(args) {
//     page = args.object;
//     page.bindingContext = pageData;
// }

function GroceryListViewModel(items) {
    var viewModel = new ObservableArray(items);
    return viewModel;
}

module.exports = GroceryListViewModel;