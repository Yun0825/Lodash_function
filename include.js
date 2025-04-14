import { reduce } from "./reduce";

const includes = function (array, target) {
    return reduce(
        array,
        function (wasFound, item) {
            if (wasFound) {
                return true;
            }
            return item === target;
        },
        false
    );
};