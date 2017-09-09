var gulp =require("gulp");
var less=require("gulp-less");
var cssmin=require("gulp-cssmin");
var autoprefixer=require("gulp-autoprefixer");
var rev=require("gulp-rev");
var rename=require("gulp-rename");
var imagemin=require("gulp-imagemin");
var useref=require("gulp-useref");
var gulpif=require("gulp-if");
var uglify=require("gulp-uglify");
//处理css
gulp.task("css",function(){
	return
	gulp.src("public/less/*")
	.pipe(less())
	.pipe(cssmin())
	.pipe(autoprefixer())
	.pipe(rev())
	.pipe(gulp.dest("./release/public/css"))
	.pipe(rev.manifest())
	.pipe(rename("css-manifest.json"))
	.pipe(gulp.dest("./release/rev"))

})
//处理图片
gulp.task("image",function(){
	gulp.src(['./public/images/**/*','./uploads/*'],{base:"./"})
	.pipe(imagemin())
	.pipe(rev())
	.pipe(gulp.dest('./release'))
	.pipe(rev.manifest())
	.pipe(rename("image-manifest.json"))
	.pipe(gulp.dest("/release/rev"));
})
//处理js
gulp.task("js",function(){
	gulp.src("index.html")
	.pipe(useref())
	.pipe(gulpif("*.js",uglify()))
	.pipe(gulpif("*.js",rev()))
	.pipe(gulp.dest("./release"))
	.pipe(rev.manifest())
	.pipe(rename("js-manifest.json"))
	.pipe(gulp.dest("./release/rev/"));
})
//其他
gulp.task("other",function(){
	gulp.src(["./views/*.html","./public/font/*"],{base:"./"})
	.pipe(gulp.dest("./release"))
})


