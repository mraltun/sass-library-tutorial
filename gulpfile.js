const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

// Compile the CSS from SCSS
function buildStyles() {
  return src("sass/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("css"));
}

// Watch the changes and re-compile.
function watchTask() {
  watch(["sass/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
