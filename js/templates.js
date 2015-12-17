angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html><html lang=\"en\" ng-app=\"NotSoShitty\"><head><title>Not so shitty</title><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"css/vendor.css\"><link rel=\"stylesheet\" href=\"css/app.css\"><link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.ico\"></head><body ui-view><script src=\"js/vendor.js\"></script><script src=\"js/templates.js\"></script><script src=\"js/app.js\"></script></body></html>");
$templateCache.put("common/views/base.html","<md-content class=\"container\"><md-toolbar><div class=\"md-toolbar-tools\"><h2><span>Not So Shitty</span></h2></div></md-toolbar><md-tabs class=\"md-primary md-hue-2\"><md-tab data-ui-sref=\"tab.project\"><md-tab-label> Project</md-tab-label></md-tab><md-tab data-ui-sref=\"tab.current-sprint\"><md-tab-label> Sprint</md-tab-label></md-tab><md-tab data-ui-sref=\"tab.daily-report\"><md-tab-label> Daily Mail</md-tab-label></md-tab></md-tabs><div ui-view class=\"container\"></div><feedback></feedback></md-content>");
$templateCache.put("feedback/directives/call-to-action.html","<md-button ng-click=\"openFeedbackModal($event)\" class=\"md-fab md-primary feedback-call-to-action\"><md-icon md-svg-icon=\"comment-text-outline\"></md-icon><md-tooltip md-direction=\"right\">Give us some feedback!</md-tooltip></md-button>");
$templateCache.put("feedback/directives/dialog.html","<md-dialog><form><md-toolbar><div class=\"md-toolbar-tools\"><h2>Feedback Form</h2><span flex=\"\"></span><md-button ng-click=\"cancel()\" class=\"md-icon-button\"><md-icon md-svg-src=\"close\" aria-label=\"Close dialog\"></md-icon></md-button></div></md-toolbar><md-dialog-content><div class=\"md-dialog-content\"><h2>Your feedback is precious</h2><p>Something is wrong? You\'re missing a feature? You like it that way? Please tell us!</p><md-input-container class=\"md-block\"><label>Your Feedback</label><textarea ng-model=\"message\" rows=\"5\" cols=\"1\"></textarea></md-input-container></div></md-dialog-content><md-dialog-actions layout=\"row\"><md-button ng-click=\"send()\" class=\"md-flat md-primary\">Send</md-button></md-dialog-actions></form></md-dialog>");
$templateCache.put("common/directives/trello-avatar/view.html","<div><img ng-if=\"hash\" alt=\"{{ member.username }}\" ng-src=\"https://trello-avatars.s3.amazonaws.com/{{hash}}/{{size}}.png\" style=\"border-radius: 50%;\" class=\"md-avatar member-avatar\"><div ng-if=\"!hash\" class=\"member-avatar initials\">{{ member.initials }}</div></div>");
$templateCache.put("daily-report/states/preview/view.html","<md-dialog><form><md-toolbar><div class=\"md-toolbar-tools\"><h2>Daily Report Preview</h2><span flex=\"\"></span><md-button ng-click=\"cancel()\" class=\"md-icon-button\"><md-icon md-svg-src=\"close\" aria-label=\"Close dialog\"></md-icon></md-button></div></md-toolbar><md-dialog-content><div class=\"md-padding\"><div layout=\"column\"><md-input-container><label>To:</label><input ng-model=\"message.to\" disabled></md-input-container><md-input-container><label>Subject:</label><input ng-model=\"message.subject\" disabled></md-input-container><div ng-bind-html=\"message.body\"></div></div></div></md-dialog-content><md-dialog-actions layout=\"row\"><md-button ng-click=\"send()\" class=\"md-raised md-primary\">Send</md-button></md-dialog-actions></form></md-dialog>");
$templateCache.put("daily-report/states/template/view.html","<div layout=\"row\" layout-align=\"center start\" class=\"sprint-body\"><md-card flex=\"80\" class=\"layout-padding\"><form name=\"dailyReportCreate\"><h2 layout-align=\"center end\" class=\"md-title\">DAILY REPORT</h2><div layout=\"column\" layout-sm=\"column\"><md-input-container flex><label>To</label><input ng-model=\"dailyReport.message.to\"></md-input-container><md-input-container flex><label>Subject</label><input ng-model=\"dailyReport.message.subject\"></md-input-container><md-input-container class=\"md-block\"><label>Body (html is allowed)</label><textarea ng-model=\"dailyReport.message.body\" columns=\"1\" rows=\"5\"></textarea></md-input-container><div layout=\"row\"><md-input-container flex=\"50\"><label>Behind Label</label><input ng-model=\"dailyReport.message.behindLabel\"></md-input-container><md-input-container flex=\"50\"><label>Ahead Label</label><input ng-model=\"dailyReport.message.aheadLabel\"></md-input-container></div><section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap><md-button ng-click=\"preview($event)\" class=\"md-raised md-primary\">Preview</md-button><md-button ng-click=\"save()\" class=\"md-raised md-primary\">Save template</md-button></section></div></form></md-card><md-card flex=\"20\" class=\"layout-padding\"><md-list><h2 layout-align=\"center end\" class=\"md-title\">DYNAMIC FIELDS</h2><md-list-item class=\"md-2-line\"><div class=\"md-list-item-text\"><h3>{today#YYYY-MM-DD}</h3><p>format is supposed to follow<a href=\"http://momentjs.com/docs/#/parsing/string-format/\" target=\"_blank\"> moment format</a></p></div></md-list-item><md-list-item class=\"md-2-line\"><div class=\"md-list-item-text\"><h3>{sprintNumber}</h3><p>available if filled in the sprint form</p></div></md-list-item><md-list-item class=\"md-2-line\"><div class=\"md-list-item-text\"><h3>{bdc}</h3><p>The burndown chart image</p></div></md-list-item><md-list-item class=\"md-2-line\"><div class=\"md-list-item-text\"><h3>{total}</h3><p>Total number of points to do during the sprint</p></div></md-list-item><md-list-item class=\"md-2-line\"><div class=\"md-list-item-text\"><h3>{done}</h3><p>The number of points in the Trello done column</p></div></md-list-item><md-list-item class=\"md-2-line\"><div class=\"md-list-item-text\"><h3>{toValidate}</h3><p>The number of points in the Trello to validate column</p></div></md-list-item><md-list-item class=\"md-2-line\"><div class=\"md-list-item-text\"><h3>{blocked}</h3><p>The number of points in the Trello blocked column</p></div></md-list-item><md-list-item class=\"md-2-line\"><div class=\"md-list-item-text\"><h3>{gap}</h3><p>The difference between the standard points and the done points</p></div></md-list-item><md-list-item class=\"md-3-line\"><div class=\"md-list-item-text\"><h3>{behind/ahead}</h3><p>If your are behind or late according to the burn down chart</p><div layout=\"row\"><md-input-container flex=\"50\"><label>Behind Label</label><input ng-model=\"dailyReport.message.behindLabel\"></md-input-container><md-input-container flex=\"50\"><label>Ahead Label</label><input ng-model=\"dailyReport.message.aheadLabel\"></md-input-container></div></div></md-list-item></md-list></md-card></div>");
$templateCache.put("login/directives/profil-info/view.html","<div><md-button ng-click=\"toggleProfilCard()\" aria-label=\"Profil\" class=\"md-icon-button profil-button\"><trello-avatar member=\"userInfo\"></trello-avatar></md-button><md-card ng-if=\"showProfilCard\" class=\"profil-details\"><md-list><md-list-item class=\"md-3-line\"><a href=\"{{userInfo.url}}\" target=\"_blank\" class=\"picture-link\"><trello-avatar member=\"userInfo\" size=\"170\"></trello-avatar></a><div class=\"md-list-item-text\"><h3>Trello Account</h3><p>{{ userInfo.fullName }}</p><p>{{ userInfo.email }}</p></div><md-button ng-click=\"logout()\" class=\"md-warn\">Logout</md-button></md-list-item><md-divider></md-divider><md-list-item class=\"md-3-line\"><trello-avatar member=\"userInfo\" class=\"md-avatar\"></trello-avatar><div class=\"md-list-item-text\"><h3>Gmail Account</h3><md-button>Login</md-button></div></md-list-item></md-list></md-card></div>");
$templateCache.put("login/states/google/view.html","<div class=\"container\"><div class=\"jumbotron\"><h1>Authentication Gmail</h1><span>Authorize access to Gmail API</span><md-button ng-click=\"authenticate()\">Authorize</md-button><pre id=\"output\"></pre></div></div>");
$templateCache.put("login/states/trello/view.html","<div layout=\"row\" layout-align=\"center center\" class=\"landing-page\"><div class=\"hgroup\"><h1>Not So Shitty</h1><h3>Automate your daily boring tasks</h3><md-button ng-click=\"login()\" class=\"md-raised md-primary\"><md-icon md-svg-icon=\"trello\"></md-icon>  Login with Trello</md-button></div></div><footer><a href=\"http://www.theodo.fr\" target=\"_blank\"><img src=\"images/theodo.png\"></a></footer><feedback></feedback>");
$templateCache.put("project/directives/resources-by-day/view.html","<div layout=\"row\" class=\"resources-by-day\"></div><md-data-table-container><table md-data-table><thead><tr><td>&nbsp;</td><td layout-align=\"center center\" ng-repeat=\"(j, member) in members\"><trello-avatar member=\"member\"></trello-avatar></td></tr></thead><tbody><tr ng-repeat=\"(i, day) in days\"><td>{{ day.date | date : \'EEEE\' }}</td><td ng-repeat=\"(j, member) in members\"><md-button ng-click=\"resourceClick(i,j)\" class=\"md-primary row\">{{ matrix[i][j] }}</md-button></td></tr></tbody></table></md-data-table-container>");
$templateCache.put("project/directives/select-people/view.html","<div ng-repeat=\"member in members\" ng-class=\"{\'selected\': teamCheck[member.id]}\" class=\"member-select\"><label ng-click=\"check()\"><trello-avatar member=\"member\" class=\"member-select-image\"></trello-avatar><input type=\"checkbox\" ng-model=\"teamCheck[member.id]\"></label></div>");
$templateCache.put("project/states/main/view.html","<div layout=\"row\" layout-align=\"center end\" class=\"sprint-body\"><md-card flex=\"80\" class=\"layout-padding\"><h2 layout-align=\"center end\" class=\"md-title\">SET YOUR PROJECT</h2><md-input-container layout=\"column\"><label>Select a board: </label><md-select ng-model=\"project.boardId\"><md-option ng-value=\"board.id\" ng-repeat=\"board in boards\">{{ board.name }}</md-option></md-select></md-input-container><div ng-if=\"project.boardId\" layout=\"column\"><md-input-container><md-tooltip md-direction=\"left\">To be used in daily mail</md-tooltip><label>Select \"blocked\" column</label><md-select ng-model=\"project.columnMapping.blocked\"><md-option ng-value=\"column.id\" ng-repeat=\"column in boardColumns\">{{ column.name }}</md-option></md-select></md-input-container><md-input-container><md-tooltip md-direction=\"left\">To be used in daily mail</md-tooltip><label>Select \"to validate\" column</label><md-select ng-model=\"project.columnMapping.toValidate\"><md-option ng-value=\"column.id\" ng-repeat=\"column in boardColumns\">{{ column.name }}</md-option></md-select></md-input-container><h4 class=\"md-title\">The team</h4><md-data-table-container><table md-data-table><thead><tr><th name=\"People\"></th><th name=\"Email\"></th></tr></thead><tbody><tr ng-repeat=\"dev in project.team.dev\"><td><trello-avatar member=\"dev\"></trello-avatar></td><td><md-input-container><label>Email</label><input ng-model=\"dev.email\"></md-input-container></td></tr><tr ng-repeat=\"rest in project.team.rest\"><td><trello-avatar member=\"rest\"></trello-avatar></td><td><md-input-container><label>Email</label><input ng-model=\"rest.email\"></md-input-container></td></tr></tbody></table></md-data-table-container><div class=\"select-teams\"><div class=\"select-dev-team\"><div>Select the dev team</div><select-people members=\"boardMembers\" selected-members=\"project.team.dev\"></select-people></div><div class=\"select-rest-team\"><div>Select the rest of the team</div><select-people members=\"boardMembers\" selected-members=\"project.team.rest\"></select-people></div></div></div><section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap><md-button ng-click=\"clearTeam()\" class=\"md-warn\">CLEAR THE TEAM</md-button><md-button ng-click=\"save()\" class=\"md-raised md-primary\">SAVE AND GO TO SCRUM BOARD</md-button></section></md-card></div>");
$templateCache.put("sprint/directives/burndown/view.html","<div id=\"bdcgraph\"></div>");
$templateCache.put("sprint/states/current-sprint/view.html","<div layout=\"row\" layout-align=\"center start\"><md-card flex=\"60\" class=\"layout-padding\"><h2 layout-align=\"center end\" class=\"md-title\">BURN DOWN CHART<burndown data=\"tableData\"></burndown></h2></md-card><md-card flex=\"40\" class=\"layout-padding\"><md-data-table-container><table md-data-table class=\"bdc-data\"><thead><tr><th name=\"Day\"></th><th name=\"Standard\"></th><th name=\"Done\"></th></tr></thead><tbody><tr ng-repeat=\"day in tableData\" ng-class=\"{\'md-selected\': currentDayIndex == $index}\"><td>{{ day.date | date : \'EEEE\' }}</td><td>{{ day.standard.toFixed(1) }}</td><td><section layout=\"row\" layout-sm=\"column\" layout-wrap><md-input-container flex=\"50\" md-no-float=\"true\"><label>Done</label><input ng-model=\"day.done\" type=\"number\"></md-input-container><div layout-align=\"center center\" ng-if=\"currentDayIndex == $index\"><md-button ng-click=\"fetchTrelloDonePoints()\" class=\"md-primary\">Fetch from Trello</md-button></div></section></td></tr></tbody></table></md-data-table-container><section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap><md-button ng-click=\"save()\" class=\"md-raised md-primary\">Save</md-button></section></md-card></div><md-button ng-click=\"showConfirmNewSprint($event)\" class=\"md-fab md-primary new-sprint-fab\"><md-icon md-svg-icon=\"plus\"></md-icon><md-tooltip md-direction=\"top\">Create a new sprint</md-tooltip></md-button>");
$templateCache.put("sprint/states/new-sprint/view.html","<div layout=\"row\" layout-align=\"center end\" class=\"sprint-body\"><md-card flex=\"80\" class=\"layout-padding\"><h2 layout-align=\"center end\" class=\"md-title\">NEW SPRINT</h2><md-input-container><label>Sprint Number</label><input ng-model=\"sprint.number\" ng-change=\"save()\"></md-input-container><md-input-container><label>Select the done column</label><md-select ng-model=\"sprint.doneColumn\" ng-change=\"save()\"><md-option ng-value=\"column.id\" ng-repeat=\"column in boardLists\">{{ column.name }}</md-option></md-select></md-input-container><div flex><md-datepicker ng-model=\"sprint.dates.start\" md-placeholder=\"Start Date\"></md-datepicker><md-datepicker ng-model=\"sprint.dates.end\" md-placeholder=\"End date\"></md-datepicker></div><div ng-if=\"sprint.dates.days.length &gt; 0\" class=\"man-days\"><resources-by-day days=\"sprint.dates.days\" matrix=\"sprint.resources.matrix\" members=\"devTeam\"></resources-by-day><md-input-container><label>Total sprint points</label><input nss-round ng-model=\"sprint.resources.totalPoints\"></md-input-container><md-input-container><label>Sprint speed</label><input nss-round ng-model=\"sprint.resources.speed\"></md-input-container></div><section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap><md-button ng-disabled=\"!activable\" ng-click=\"activate()\" class=\"md-raised md-primary\">START THE SPRINT</md-button></section></md-card></div>");}]);