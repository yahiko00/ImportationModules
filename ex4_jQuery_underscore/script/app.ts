import $ = require("jquery");
import _ = require("underscore");

export function start() {
    $("h1").hide();
    console.log(_.isEmpty({}));
}
