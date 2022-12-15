const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Compile the CSS from SCSS
function buildStyles() {
  return src("index.scss").pipe(sass()).pipe(dest("css"));
}

// Watch the changes and re-compile.
function watchTask() {
  watch(["index.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
