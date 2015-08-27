(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["add-story.template.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<modal-jiraHeader>\n\tAdd user story\n</modal-JiraHeader>\n<form type=\"post\" action=\"\" class=\"storyForm\">\n<modal-jiraContent>\n\t<modal-jiraContentStory>\n\t\tAs a \n\t\t<input type=\"text\" name=\"persona\" value=\"\" placeholder=\"persona\">\n\t\tI want \n\t\t<input type=\"text\" name=\"goal\" value=\"\" placeholder=\"your goal\">\n\t\tso that\n\t\t<input type=\"text\" name=\"reason\" value=\"\" placeholder=\"reason\">\n\t</modal-jiraContentStory>\n\t<modal-content>\n\n\t<div-jira class=\"points\">\n\t\t<input name=\"business\" class=\"jira-input\" placeholder=\"Business Value\">\n\t\t<input name=\"storypoints\" class=\"jira-input\" placeholder=\"Story points\">\n\t</div-jira>\n\n\t<textarea class=\"jira-input\" placeholder=\"Description\" name=\"description\"></textarea>\n\n\t<textarea class=\"jira-input\" placeholder=\"Acceptance criterias\" name=\"acceptance\"></textarea>\n\t</modal-content>\n</modal-jiraContent>\n<modal-jiraFooter>\n\t<button-jira class=\"btnJira-default btn-jira-cancel\">Cancel</button-jira>\n\t<button-jira class=\"btnJira-primary btn-jira-add-story btn-submit\">Save</button-jira>\n</modal-jiraFooter>\n</form>\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["login.template.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<form type=\"post\" action=\"\" class=\"authForm\">\n\t<modal-jiraContent>\n\t\t<modal-content>\n\t\t\t<p-jira class=\"centerParent\">Jira Login</p-jira>\n\t\t\t<div class=\"inputContainer\">\n\t\t\t\t<input type=\"text\" name=\"username\" class=\"jira-input__opacity jira-input--with-icon top10\" placeholder=\"Username\" required value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "username"), env.opts.autoescape);
output += "\">\n\t\t\t\t<div class=\"input-icon  icon-user\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"inputContainer\">\n\t\t\t\t<input type=\"password\" name=\"password\" class=\"jira-input__opacity jira-input--with-icon top10\" placeholder=\"Password\" required value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "password"), env.opts.autoescape);
output += "\">\n\t\t\t\t<div class=\"input-icon icon-key\"></div>\n\t\t\t</div>\n\n\t\t\t<p-jira class=\"centerParent\">Project Informations</p-jira>\n\t\t\t<div class=\"inputContainer\">\n\t\t\t\t<input type=\"url\" name=\"url\" class=\"jira-input__opacity jira-input--with-icon top10\" placeholder=\"Jira URL\" required value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "url"), env.opts.autoescape);
output += "\">\n\t\t\t\t<div class=\"input-icon icon-link\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"inputContainer\">\n\t\t\t\t<input type=\"text\" name=\"projectid\" class=\"jira-input__opacity jira-input--with-icon  top10\" placeholder=\"Project ID\" required value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "projectid"), env.opts.autoescape);
output += "\">\n\t\t\t\t<div class=\"input-icon icon-folder-o\"></div>\n\t\t\t</div>\n\t\t</modal-content>\n\t</modal-jiraContent>\n\t<modal-jiraFooter class=\"centerParent\">\n\t\t<button-jira type=\"submit\" class=\"btnJira__opacity-primary btn-jira-connect\">Continue</button-jira>\n\t</modal-jiraFooter>\n</form>\n<jira-progress class=\"jira-progress--top\" component=\"Loader\" name=\"progressBar\"></jira-progress>";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["sidebar.component.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<jira-sidebar__background></jira-sidebar__background>\n<jira-sidebar__content>\n\t<jira-close-link class=\"icon-close\"></jira-close-link>\n\t<jira-sidebar__menu>\n\t\t<jira-sidebar__link class=\"icon-story\" href=\"settings\"><span>Add Story or bug</span></jira-sidebar__link>\n\t\t<jira-sidebar__link class=\"icon-backlog\" href=\"settings\"><span>Backlog</span></jira-sidebar__link>\n\t\t<jira-sidebar__link class=\"icon-intelligence\" href=\"settings\"><span>Intelligence</span></jira-sidebar__link>\n\t\t<jira-sidebar__link class=\"icon-profile\" href=\"settings\"><span>Profile</span></jira-sidebar__link>\n\t</jira-sidebar__menu>\n\t<jira-sidebar__container class=\"jira-hidden\">\n\t\t<jira-auth-form component=\"LoginForm\" class=\"\" name=\"LoginForm\" initVars='user'></jira-auth-form>\n\t</jira-sidebar__container>\n</jira-sidebar__content>\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["test-connection.template.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<modal-jiraHeader>\n\tTesting Connection\n</modal-JiraHeader>\n<form type=\"post\" action=\"\" class=\"authForm\">\n\t<modal-jiraContent>\n\t\t<modal-content>\n\t\t\t<p-jira>\n\t\t\t\t<div id=\"loader-wrapper\">\n\t\t\t\t    <div id=\"loader\"></div>\n\t\t\t\t</div>\n\t\t\t</p-jira>\n\t\t\t<p-jira class=\"waitConnection\">Please wait while we connect to your account</p-jira>\n\t\t\t<p-jira class=\"showConnected success\">Account Connected!</p-jira>\n\t\t\t<p-jira class=\"showError error\">Error while connection</p-jira>\n\t\t</modal-content>\n\t</modal-jiraContent>\n\t<modal-jiraFooter>\n\t\t<button-jira class=\"btnJira-default btn-jira-cancel\">Close</button-jira>\n\t</modal-jiraFooter>\n</form>\n";
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
