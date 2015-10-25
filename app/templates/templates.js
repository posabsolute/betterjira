(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["components/layout/sidebar.component.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"sidebar__background\"></div>\n<div class=\"sidebar__content\">\n\t<div class=\"close-link icon-close\"></div>\n\t<div class=\"sidebar__menu\">\n\t\t<div class=\"sidebar__link icon-story btn-navigate\" href=\"/story\">\n\t\t\t<span class=\"sidebar__link__content\">Add Story or bug</span>\n\t\t</div>\n\t\t<div class=\"sidebar__link icon-backlog\" href=\"settings\">\n\t\t\t<span class=\"sidebar__link__content\">Backlog</span>\n\t\t</div>\n\t\t<div class=\"sidebar__link icon-intelligence\" href=\"settings\">\n\t\t\t<span class=\"sidebar__link__content\">Intelligence</span>\n\t\t</div>\n\t\t<div class=\"sidebar__link icon-profile\" href=\"settings\">\n\t\t\t<span class=\"sidebar__link__content\">Profile</span>\n\t\t</div>\n\t</div>\n\t<div class=\"sidebar__container hidden\">\n\t\t<LoginForm component class=\"\" initVars='user' />\n\t</div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["components/login.template.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<form type=\"post\" action=\"\" class=\"authForm\">\n\t<div class=\"container\">\n\t\t<p class=\"center\">Jira Login</p>\n\t\t<div class=\"input-container\">\n\t\t\t<input type=\"text\" name=\"username\" class=\"input--opacity input--with-icon top10\" placeholder=\"Username\" required value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "username"), env.opts.autoescape);
output += "\">\n\t\t\t<div class=\"input-icon icon-user\"></div>\n\t\t</div>\n\t\t<div class=\"input-container\">\n\t\t\t<input type=\"password\" name=\"password\" class=\"input--opacity input--with-icon top10\" placeholder=\"Password\" required value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "password"), env.opts.autoescape);
output += "\">\n\t\t\t<div class=\"input-icon icon-key\"></div>\n\t\t</div>\n\n\t\t<p class=\"center\">Project Informations</p>\n\t\t<div class=\"input-container\">\n\t\t\t<input type=\"url\" name=\"url\" class=\"input__opacity input--with-icon top10\" placeholder=\"Jira URL\" required value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "url"), env.opts.autoescape);
output += "\">\n\t\t\t<div class=\"input-icon icon-link\"></div>\n\t\t</div>\n\t\t<div class=\"input-container\">\n\t\t\t<input type=\"text\" name=\"projectid\" class=\"input__opacity input--with-icon top10\" placeholder=\"Project ID\" required value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "projectid"), env.opts.autoescape);
output += "\">\n\t\t\t<div class=\"input-icon icon-folder-o\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"center\">\n\t\t<button type=\"submit\" class=\"btn__opacity-primary btn--connect\">Continue</button-jira>\n\t</div>\n</form>\n<Loader class=\"progress--top\" component name=\"progressBar\" />";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["components/pbi/pbi-comments.component.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["components/pbi/pbi-files.component.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["components/pbi/pbi-infos.component.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["components/utils/dropdown-helper.template.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"dp-helper\">\n\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "collection");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n  \t\t<li class=\"dp-helper__item\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"archetype", env.opts.autoescape), env.opts.autoescape);
output += "</li>\n\t";
;
}
}
frame = frame.pop();
output += "\n</ul>\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["views/add-story.template.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"content-section\">\n\t<h2>Add Story of bug</h2>\n\t<form type=\"post\" action=\"\" class=\"storyForm\">\n\n\t\t<textarea class=\"textarea--plain\" placeholder=\"Your story title\" name=\"description\" id=\"storyDescription\">asd</textarea>\n\t\t<DropdownHelper component collection=\"Personas\" input=\"#storyDescription\"></dropdownHelper>\n\n\t\t<div class=\"points\">\n\t\t\t<input name=\"business\" class=\"jira-input\" placeholder=\"Business Value\">\n\t\t\t<input name=\"storypoints\" class=\"jira-input\" placeholder=\"Story points\">\n\t\t</div>\n\n\t\t<textarea class=\"text-writter\" placeholder=\"Description\" name=\"description\"></textarea>\n\n\t\t<div class=\"content__footer-buttons\">\n\t\t\t<button class=\"btnJira-default btn-jira-cancel\">Cancel</button>\n\t\t\t<button class=\"btnJira-primary btn-jira-add-story btn-submit\">Save</button>\n\t\t</div>\n\t</form>\n<div>\n<rightbar component=\"RightBar\">\n\t<PBIinfos component />\n\t<PBIpictures component />\n\t<PBIcomments component />\n</rightbar>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
