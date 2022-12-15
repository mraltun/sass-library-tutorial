const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Compile the CSS from SCSS
function buildStyles() {
  return src("*.scss").pipe(sass()).pipe(dest("css"));
}

// Watch the changes and re-compile.
function watchTask() {
  watch(["*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
