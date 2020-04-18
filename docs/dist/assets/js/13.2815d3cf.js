(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{368:function(t,e,a){"use strict";a.r(e);var s=a(8),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("记录一些在命令行中使用的git命令")])]),t._v(" "),a("h4",{attrs:{id:"_1、放弃本地修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、放弃本地修改"}},[t._v("#")]),t._v(" 1、放弃本地修改")]),t._v(" "),a("p",[t._v("在开发工作中，经常要回滚本地的修改，此时分三种情况")]),t._v(" "),a("ul",[a("li",[t._v("本地修改未提交到暂存区，即未执行git add操作")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git checkout --fileName\ngit checkout .\n")])])]),a("ul",[a("li",[t._v("本地修改已提交到暂存区，但是还未提交，即未执行git commit操作")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git reset HEAD filepathname \ngit reset HEAD .\n")])])]),a("ul",[a("li",[t._v("已经执行了提交，版本回退")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git reset --hard HEAD^\ngit reset --hard  commitid  \n")])])]),a("p",[a("code",[t._v("(PS：1、HEAD表示当前版本， HEAD^表示上个版本， HEAD^^表示上上个版本；2、commitid通过git log获取，直接使用版本号的前几个字符串即可。(git log --pretty=oneline 一行显示)；3、要重返未来，用git reflog查看命令历史，以便确定要回到未来的版本)")])])])}),[],!1,null,null,null);e.default=l.exports}}]);