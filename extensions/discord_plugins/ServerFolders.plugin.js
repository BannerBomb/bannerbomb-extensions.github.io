:root {
	--accent-color: #3f51b5;
	--accent-color-high: #5262bc;
	--accent-rgb: rgba(39,147,230,0.3);

	--card-color: #1e2024;
	--card-games: #2a2c30;

	--alert-color: #f04747;
	--alert-color-high: #f25a5a;

	--main-color: #16171a;
	--main-alt: #0f1012;
	--message-color: #292d30;
	--message-alt: #1c1e21;

	--chat-color: #202225;
	--popout-color: #202225;
	--popout-alt: #2c2f33;
	--server-bg: #232327;

	--spotify-color: #1db954;
	--stream-color: #593695;

	--input-color: #272a2e;
	--hover-color: rgba(255,255,255,0.05);

	--border-radius: 4px;
	--border-radius-big: 8px;
	--border-radius-bar: 3px;

	--default-animation: cubic-bezier(0.4,0,0.2,1);
}

::selection {
	background: #859fbf;
	text-shadow: none;
}

@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700);

* {
	font-family: 'Roboto', sans-serif !important;
}


/*
 *
 *	GLOBAL ELEMENTS
 *
 */

/* ACCENT [BACKGROUND][IMPORTANT] */

#bd-settings-sidebar .ui-tab-bar-item.selected,
#friends .tab-bar-item.tab-bar-item-primary.selected .badge,
#friends .tab-bar-item.tab-bar-item-primary:hover:not(.selected),
#friends .tab-bar-item.selected .badge,
.popout header,
.form-deprecated .btn-primary,
.form.deprecated .btn-primary,
.form-deprecated .btn-primary:hover,
.form.deprecated .btn-primary:hover,
.private-channel-recipients-invite .footer button,
.private-channel-recipients-invite .footer button:hover,
.private-channel-recipients-invite .error-state.not-friends .btn:hover,
.private-channel-recipients-invite .error-state.not-friends .btn,
#friends .btn,
.ui-standard-sidebar-view .bda-slist .bda-right button,
.itemDefaultSelected-1UAWLe,
.itemDefaultSelected-1UAWLe:active,
.ui-tab-bar.SIDE .ui-tab-bar-item.selected,
.ui-tab-bar.SIDE .ui-tab-bar-item:active,
.ui-slider .slider-bar-fill,
.ui-switch-wrapper:not(.disabled):not(.clear):hover .ui-switch-checkbox:checked+.ui-switch,
.ui-switch-checkbox:checked+.ui-switch,
._3Mv0RaJ0,
._3Mv0RaJ0:hover,
.ui-standard-sidebar-view .bda-slist li button,
.buttonBrandFilled-3Mv0Ra,
.buttonBrandFilled-3Mv0Ra:hover,
.ui-button.brand.filled,
.ui-button.brand.filled:hover,
.create-guild-container.deprecated .action:hover.create .btn,
.region-select:hover button,
.slider-bar-fill,
.form .btn-primary:hover,
.form .btn-primary,
.side-8zPYf6 .itemSelected-1qLhcL,
.barFill-23-gu-,
.buttonBrandInverted-VFL7Yc,
.colorGreen-29iAKY,
.cardPrimaryEditable-3KtE4g[style="background-color: rgb(114, 137, 218);"],
.ui-card-primary.checked,
.guilds-wrapper .guilds-add-inner,
.divider-3gKybi.dividerRed-MKoLlr > div,
.divider-3gKybi.dividerRed-MKoLlr > span,
.newMessagesBar-mujexs,
.popout header,
.buttonWhiteOutlined-2KwPTg,
.buttonGreyGhost-SfY7zU,
.uploadModal-2ifh8j .footer-3mqk7D .button-primary,
.pill-1nbD-Z,
.wrapper-O5i5-0 .instantInviteModal-3vhcvC .copy-3nFbq8,
.side-2nYO0F .itemSelected-3XxAMf[style*="color: rgb(114, 137, 218);"]:hover,
.ui-standard-sidebar-view #editor-detached button,
#bd-settingspane-container .bd-pfbtn,
.buttonPrimaryOutlinedDefault--H0hhk,
.buttonPrimaryOutlinedSubmitting-3m3eFx,
.bd-modal-wrapper .footer button,
.wanderingCubesItem-35kyMu,
.noticeDefault-362Ko2,
.notice-3I4-y_,
.noticeInfo-3_iTE1,
.btn-11C5_u,
.questionMark-CWEQZn,
.lookInverted-2D7oAl.colorBrand-3pXr91,
.lookFilled-1Gx00P.colorGreen-29iAKY,
.lookFilled-luDKDo.colorBrand-3PmwCE,
.lookFilled-1Gx00P.colorBrand-3pXr91,
.lookGhost-GyT-k0.colorGrey-4JijJ1,
.side-2nYO0F .itemSelected-3XxAMf.item-PXvHYJ[style*="color: rgb(114, 137, 218);"]:hover,
.wrapper-39oAo3 button,
.container-3nXdBP header,
.copyInput-2rOSt7 .button-38qaLQ,
.lookOutlined-3sRXeN.colorWhite-rEQuAQ,
.lookOutlined-3sRXeN.colorPrimary-3b3xI6,
.lookOutlined-3sRXeN.colorGreen-29iAKY,
.lookOutlined-3sRXeN.colorBrand-3pXr91,
.lookFilled-1Gx00P.colorPrimary-3b3xI6,
.headerButtonColor-G7_f-V,
.hasMore-3e72_v button,
.botTagRegular-2HEhHi,
.pluginrepo-modal .pluginEntry.downloadable .btn-download,
.pluginrepo-modal .pluginEntry.updated .btn-download,
.pluginrepo-modal .pluginEntry.outdated .btn-download,
.themerepo-modal .themeEntry.downloadable .btn-download,
.themerepo-modal .themeEntry.updated .btn-download,
.themerepo-modal .themeEntry.outdated .btn-download,
.progressBar-3u8FBM.small-1CUeBa[style*="background-color: rgb(114, 137, 218);"],
.regionSelect-3lf4eE:hover button,
.actionRed-1J19Tx,
.streamerModeEnabledBtn-2ZJ2eq,
.defaultIndicator-G3c16x {
	background: var(--accent-color) !important;
}

.lookInverted-2D7oAl.colorBrand-3pXr91:active,
.lookOutlined-3sRXeN.colorBrand-3pXr91:active,
.lookOutlined-3sRXeN.colorWhite-rEQuAQ:active,
.lookFilled-1Gx00P.colorGreen-29iAKY:active,
.lookFilled-luDKDo.colorBrand-3PmwCE:active,
.lookFilled-1Gx00P.colorBrand-3pXr91:active,
.lookGhost-GyT-k0.colorGrey-4JijJ1:active,
.lookGhost-2Fn_0-.colorGrey-2DXtkV:active,
.lookFilled-1Gx00P.colorPrimary-3b3xI6:active,
.btn-11C5_u:active,
.headerButtonColor-G7_f-V:active,
.streamerModeEnabledBtn-2ZJ2eq:active,
.form.deprecated .btn-primary:active,
.uploadModal-2ifh8j .footer-3mqk7D .button-primary:active,
#bd-settingspane-container .bda-slist .plugin-settings button:active {
	background: var(--accent-color-high) !important;
}

/* ACCENT [BACKGROUND-COLOR] */

.privateChannels-1nO12o .search-bar .search-bar-inner input,
.checkbox .checkbox-inner input[type=checkbox]:checked + span,
.iconBadge-2dji3k,
#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch.checked:before,
.guildAvatarWithoutIcon-1sTmE_,
.avatar-uploader-inner,
.selectorButtonSelected-1j4DmC {
	background-color: var(--accent-color);
}

/* ACCENT [BACKGROUND-COLOR][IMPORTANT] */

/*.guilds-wrapper .guilds .guild .guild-inner:hover,*/
.guilds-wrapper .guilds .guild.selected .guild-inner,
.switch-3wwwcV.valueChecked-m-4IJZ:after,
.checkbox .checkbox-inner input[type=checkbox]:checked+span,
.containerDragAfter-3O-noP:before,
.containerDragBefore-31UGCO:before,
.containerDragAfter-3rB7mB:after,
.containerDragBefore-3Dzc5x:before,
.item-26Dhrx[style="border-color: rgb(114, 137, 218); background-color: rgb(114, 137, 218); padding: 10px;"],
.checkbox-1ix_J3[style*="background-color: rgb(114, 137, 218); border-color: rgb(114, 137, 218);"],
.inviteModal-34DdOm .avatar-xxxlarge,
.iconActiveLarge-2nzn9z {
	background-color: var(--accent-color) !important;
}

.containerUserOver-1U5YnL:after {
	background: var(--accent-rgb) !important;
}

/* ACCENT RGBA[IMPORTANT] */

.switch-3wwwcV.valueChecked-m-4IJZ,
.switch-3wwwcV.valueChecked-m-4IJZ[style="flex: 0 0 auto; background-color: rgb(67, 181, 129);"],
#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch.checked {
	background-color: var(--accent-rgb) !important;
}

/* ACCENT HIGHLIGHT BACKGROUND[IMPORTANT] */

/*{
	background: var(--accent-color-high) !important;
}*/

/* POPOUT BACKGROUND[IMPORTANT] */

.create-guild-container.deprecated .action,
.chat-3bRxxu,
.chat-3bRxxu > .content,
.friends-table,
.search-results-wrap .search-result .hit,
.search-results-wrap .search-result.expanded .search-result-message.hit,
.regionSelectModal-12e-57,
.regionSelectModal-12e-57 .regionSelectModalOption-2DSIZ3,
.theme-dark .modal-3HOjGZ,
.modal-3HD5ck,
.footer-2yfCgX,
.footer-2VgWkh,
.uploadModal-2ifh8j,
.uploadModal-2ifh8j .footer-3mqk7D,
.lfg-3xoFkI,
.lfg-3xoFkI .scrollerWrap-2uBjct,
.connectedAccount-36nQx7,
.wrapper-O5i5-0,
.form-deprecated .form-header,
.form.deprecated .form-header,
.form-deprecated .form-inner,
.form.deprecated .form-inner,
.form-deprecated .form-actions,
.form.deprecated .form-actions,
.wrapper-O5i5-0 .instantInviteModal-3vhcvC .form-actions,
.inner-tqJwAU,
.card-11ynQk:before,
#autocomplete-popout,
#autocomplete-popout header,
.gifTag-2VwDRa,
.group-2dAfBy,
.inviteModal-34DdOm .scroller,
.invite-CTGItT,
.bd-modal-wrapper .header,
.bd-modal-wrapper .bd-modal-body,
.bd-modal-wrapper .footer-1PYmcw,
.modal-3HD5ck .ui-standard-sidebar-view,
.contentWrapper-3WC1ID:only-child,
.theme-dark .quickswitcher-3JagVE {
	background: var(--popout-color) !important;
}

.messagesWrapper-3lZDfY,
.content-yTz4x3 {
	background: var(--chat-color) !important;
}

/* APP DEFAULT BACKGROUND [IMPORTANT] */

body,
.app-19_DXt,
.create-guild-container.deprecated,
.create-guild-container.deprecated .create-or-join .form-inner,
.header-1tSljs,
.header-2o-2hj:hover,
.headerBar-UHpsPw,
.title-qAcLxz,
.channels-Ie2l6A,
.scrollerWrap-2uBjct,
.channel-members,
.search-results-wrap,
.search-results-wrap .search-header,
.search-results-wrap .channel-separator .channel-name,
.modal-3HOjGZ,
.regionSelectModal-QBpi1R,
.ui-standard-sidebar-view .content-region,
.container-2Rl01u,
.title-3qD0b-,
.container-PNkimc,
.members-1998pB,
.body-3ND3kc,
.root-SR8cQa::-webkit-scrollbar,
.regionSelect-3lf4eE,
.carousel-JbsNzL,
.article-FleDq5,
.container-16j22k {
	background: var(--main-color) !important;
}

.titleBar-AC4pGV,
.ui-standard-sidebar-view .sidebar-region {
	background: var(--main-alt) !important;
}

.Select-menu-outer,
.select-2TCrqx .Select-control,
.ui-select > .Select .Select-menu-outer,
.contextMenu-HLZMGh,
.itemSubMenu-3ZgIw-,
.item-1Yvehc,
.item-1Yvehc.itemSubMenu-1vN_Yn,
.item-1Yvehc.itemSubMenu-1vN_Yn .scroller-fzNley,
.attachPopout-1n-ZKM,
.container-2YgzWd,
.container-1nZlH6,
.popoutList-T9CKZQ,
.scroller-3J0bdT,
.emojiPicker-3g68GS,
.emojiPicker-3g68GS .header-27dQ-e .search-bar,
.emojiPicker-3g68GS .scrollerWrap-EC-dSj,
.emojiPicker-3g68GS .stickyHeader-3LjM5X,
.emojiPicker-3g68GS .category-3rCtoh,
.diversitySelector-O3ea2c .popout-2lja3I,
.emojiPicker-3m1S-j,
.emojiPicker-3m1S-j .header-1nkwgG .search-bar,
.emojiPicker-3m1S-j .category-2U57w6,
.diversitySelector-tmmMv0 .popout-2nUePc,
.menu-Sp6bN1,
.container-3cGP6G,
.searchPopout-1vUlP3,
.gameSelector-24sFfz,
.quickswitcher-3JagVE,
.themed-popout .header,
.themed-popout .footer,
.private-channel-recipients-invite .body,
#autocomplete-popout .autocomplete-scroller,
.incomingCallInner-2rV0UJ,
.bda-dark #bda-qem,
.bda-dark #bda-qem-favourite-container,
.bda-dark #bda-qem-twitch-container,
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc .bgScale-1otPtc,
.attachPopout-1n-ZKM,
.overflowRolesPopout-140n9i,
.overflowRolesPopoutArrow-2O66oH,
.bf-toolbar:before,
.colorPickerCustom-2CWBn2 {
	background: var(--popout-alt) !important;
}

.body-3iLsc4,
.footer-1fjuF6,
.popout-3sVMXz section,
.themed-popout,
.messagesPopoutWrap-1MQ1bW,
.themed-popout .header {
	background-color: var(--popout-alt) !important;
}

/* ACCENT [COLOR] */

.app-19_DXt a,
.theme-dark #friends .friends-header .tab-bar .tab-bar-item.tab-bar-item-primary:hover:not(.selected) .badge,
#autocomplete-popout .empty h4,
.theme-dark #friends .friends-header .tab-bar .tab-bar-item.tab-bar-item-primary.selected,
.create-guild-container.deprecated h5,
.create-guild-container.deprecated .action.create .action-header,
#permissions .permissions-helpdesk,
#permissions .permissions-helpdesk:hover,
.guild-settings-modal-members .guild-settings-modal-members-footer a,
.guild-settings-modal-members .guild-settings-modal-members-footer a:hover,
.guild-settings-modal-overview a:hover,
.guild-settings-modal-overview a,
.region-select-modal .region-select-modal-header,
.region-select button,
.form header,
.chat-3bRxxu .welcome-message h1,
.form .control-group label a:hover,
.form .control-group label a,
.form-deprecated header,
.form.deprecated header,
.create-guild-container.deprecated .action.create .action-header,
.create-guild-container.deprecated .action.join .action-header,
.regionSelectModal-12e-57 .regionSelectModalHeader-21khC1,
.message-group .edit-message .edit-operation > a,
.message-group a,
.buttonLinkLink-PqcWoA,
.theme-dark .embedTitleLink-1IGDvg,
.lookLink-3VWONr.colorLink-Ttelix,
.botTagInvert-18-95s,
.regionSelect-3lf4eE button,
.app .welcomeMessage-3_Mcht h1,
.create-guild-container.deprecated .join-server h5,
.create-guild-container.deprecated .join-server .sample-link,
.lookLink-9FtZy-.colorLink-35jkBc {
	color: var(--accent-color);
}

/* WHITE [COLOR][IMPORTANT] */

.lookLink-3VWONr.colorBrand-3PmwCE,
.tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP.selected,
#friends .tab-bar .tab-bar-item.selected,
#friends .tab-bar .tab-bar-item.tab-bar-item-primary.selected,
.side-2nYO0F .itemSelected-3XxAMf[style*="color: rgb(114, 137, 218);"],
.side-2nYO0F .itemSelected-3XxAMf[style*="color: rgb(114, 137, 218);"]:hover,
.buttonGhost-2Y7zWJ,
.divider-3gKybi.dividerRed-MKoLlr > span,
#autocomplete-popout header h3,
#autocomplete-popout header input,
.lookOutlined-1c5nhl.colorRed-3HTNPV,
.lookOutlined-3sRXeN.colorRed-1TFJan,
.lookOutlined-3sRXeN.colorGreen-29iAKY,
.lookOutlined-3sRXeN.colorBrand-3pXr91,
.lookGhost-GyT-k0.colorGrey-4JijJ1,
.side-2nYO0F .itemSelected-3XxAMf.item-3879bf[style*="color: rgb(114, 137, 218);"] {
	color: #fff !important;
}

/* ACCENT [COLOR][IMPORTANT] */

.side-2nYO0F .item-3879bf[style*="color: rgb(114, 137, 218);"],
.side-2nYO0F .item-3879bf[style*="color: rgb(114, 137, 218);"]:hover, {
	color: var(--accent-color) !important;
}

/* ACCENT [BORDER] */

.wrapper-O5i5-0 .instantInviteModal-3vhcvC .checkbox .checkbox-inner input:checked + span,
.wrapper-O5i5-0 .instantInviteModalAdvanced-3qJETM .checkbox .checkbox-inner input:checked + span,
.theme-dark .input-2YozMi:focus,
.checkbox .checkbox-inner input[type=checkbox]:checked+span,
.imageSelected-4Kl81J,
.containerUserOver-1U5YnL:after {
	border-color: var(--accent-color);
}

/* ACCENT [BORDER][IMPORTANT] */

.region-select:hover button,
.checked-3_4uQ9[style="flex: 1 1 auto; background-color: rgb(67, 181, 129); border-color: rgb(67, 181, 129);"],
.item-26Dhrx[style="border-color: rgb(114, 137, 218); background-color: rgb(114, 137, 218); padding: 10px;"],
.ui-standard-sidebar-view .bda-slist li input:focus {
	border-color: var(--accent-color) !important;
}

/* TRANSPARENT WHITE [BACKGROUND] */

.ui-select > .Select .Select-option:hover,
.item-1Yvehc:hover,
.selectableItem-3PW5_y:hover,
#autocomplete-popout .row.selected,
#autocomplete-popout .row:hover,
.menu-Sp6bN1 .item-1GzJrl:hover,
.button-1ZXqCA:hover,
.searchPopout-1vUlP3 .option.selected,
.searchPopout-1vUlP3 .search-option.selected .filter,
.attachPopoutRow-elxASe:hover {
	background: var(--hover-color) !important;
}

/* SHADOW_1 */

.theme-dark .cardPrimary-ZVL9Jr,
.theme-dark .cardPrimaryEditable-3KtE4g,
.theme-dark .headerClickable-1jGUp8,
.theme-dark .headerDefault-1ajMkj,
.theme-dark .cardPrimaryOutline-29Ujqw,
.theme-dark .cardPrimary-1Hv-to,
.app-19_DXt button,
.buttonBrandInverted-VFL7Yc,
.buttonGreenFilled-6QHNrw,
.lookInverted-2D7oAl.colorBrand-3pXr91,
.create-guild-container.deprecated .action,
.create-guild-container.deprecated .action .btn,
.theme-dark .separator-NBIcXB,
.regionSelectModal-12e-57 .regionSelectModalOption-2DSIZ3,
.regionSelectModal-12e-57 .regionSelectModalOption-2DSIZ3:hover,
.theme-dark .popoutList-T9CKZQ,
.theme-dark .gameSelector-24sFfz,
.connectedAccount-36nQx7,
.theme-dark .changeDetails-zbf-61,
.form-deprecated .btn-primary,
.form.deprecated .btn-primary,
.theme-dark .header-3lpf0u,
.wrapperDefault-NeXRmD,
.user-settings-games .not-detected, .user-settings-games .now-playing,
.bd-plugin-container, .bda-slist li,
.switch-3wwwcV.valueUnchecked-2lU_20:after,
.switch-3wwwcV.valueChecked-m-4IJZ:after,
.clipboardInputInner-1EXMA3 .copy-3nFbq8,
.bd-modal-wrapper .footer button,
#pubslayer .bd-server-card.bd-server-card,
.gifTag-2VwDRa,
.assetsSmallImageUserPopout-dXG26U,
#bd-settingspane-container .bda-right .ui-switch-wrapper .ui-switch:after,
.container-iksrDt .status,
.container-2Thooq .status,
.topSectionSpotify-3744IX button,
.topSectionSpotify-1lI0-P button,
.topSectionStreaming-1Tpf5X button,
.headerSpotify-zpWxgT .activity-11LB_k button,
.headerStreaming-2FjmGz .activity-11LB_k button,
.lookFilled-luDKDo.colorGreen-22At8E,
.lookFilled-1Gx00P.colorGreen-29iAKY,
.lookFilled-luDKDo.colorBrand-3PmwCE,
.lookFilled-1Gx00P.colorBrand-3pXr91,
.lookFilled-1Gx00P.colorRed-1TFJan,
.invite-CTGItT,
.group-2dAfBy,
.iconBadge-2dji3k,
.auditLog-3jNbM6,
.button-1MICoQ,
.lookOutlined-3sRXeN.colorPrimary-3b3xI6,
.lookOutlined-3sRXeN.colorWhite-rEQuAQ,
.lookOutlined-3sRXeN.colorGreen-29iAKY,
.lookOutlined-3sRXeN.colorBrand-3pXr91,
.uploadModal-2ifh8j .footer-3mqk7D .button-primary,
.private-channel-call.minimum .private-channel-call-actions .center,
.newMessagesBar-mujexs,
.botTag-2WPJ74,
.pluginrepo-modal .pluginEntry.downloadable .btn-download,
.pluginrepo-modal .pluginEntry.updated .btn-download,
.pluginrepo-modal .pluginEntry.outdated .btn-download,
.themerepo-modal .themeEntry.downloadable .btn-download,
.themerepo-modal .themeEntry.updated .btn-download,
.themerepo-modal .themeEntry.outdated .btn-download,
.modal-3HD5ck .header-1R_AjF.marginBottom20-32qID7,
.icon-RTGJu3:after,
#searchBarInner,
.carousel-JbsNzL,
.pagination-1kSokq,
.dock-10JPBX,
.card-7JP0BX,
.emptyState-2-sT0o,
.arrowContainer-10m4Cy,
.arrowHitbox-2_hxtQ,
.streamerModeEnabledBtn-2ZJ2eq,
.verifiedIcon-2TCIsJ,
.mediaBarGrabber-1FqnbN,
.mediaBarInteraction-37i2O4:hover .mediaBarGrabber-1FqnbN,
.guild-1EfMGQ.unread-qLkInr:before,
.defaultIndicator-G3c16x,
.membershipDialog-rVL-t_,
.rowWrapper-2fB6P0,
.image-gallery .imageWrapper-2p5ogY.prev,
.image-gallery .imageWrapper-2p5ogY.next {
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.separator-6YbWrc,
.hue-13HAGb > div > div > div > div,
.rowWrapperActive-2L7i9f {
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}

/* SHADOW_2 */

.theme-dark.contextMenu-HLZMGh,
.privateChannels-1nO12o .search-bar .search-bar-inner input,
.guild-1EfMGQ.audio-3vVhBi .guildInner-3DSoA4:after,
.guild-1EfMGQ.video-15yGu3 .guildInner-3DSoA4:after,
.guilds-wrapper .guilds .guild.selected:before,
.guilds-wrapper .guilds .guild.unread:before,
.diversitySelector-O3ea2c .popout-2lja3I,
.jumpToPresentBar-9P20AM,
#autocomplete-popout .autocomplete-arrow,
.theme-dark #autocomplete-popout .autocomplete-shadow,
.unreadBar-3lDSDn,
.callAvatar-v-u4BM.voice-2D-tt_ .callAvatarStatus-3y6S04 {
	box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
}

/* SHADOW_3 */

.appMount-3VJmYg button:active,
.create-guild-container.deprecated,
.create-guild-container.deprecated .create-or-join .form-inner,
.emojiPicker-3m1S-j,
.bda-dark #bda-qem,
#bda-qem-twitch-container,
#bda-qem-favourite-container,
.userPopout-3XzG_A,
.menu-Sp6bN1,
.theme-dark .themed-popout,
.messagesPopoutWrap-1MQ1bW,
.root-2sNHUF,
.regionSelectModal-QBpi1R,
.uploadModal-2ifh8j,
.quickswitcher-3JagVE,
.wrapper-O5i5-0,
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc .bgScale-1otPtc,
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc.error-kKl9o2,
.attachPopout-1n-ZKM,
.theme-dark .elevationHigh-3XXATs,
.theme-dark .modal-3HOjGZ,
.inner-1JeGVc .imageWrapper-2p5ogY,
.container-3cGP6G,
.inviteModal-34DdOm,
.guildsAddInner-1KMFy-:active,
.uploadModal-2ifh8j .inner-3nWsbo .file-34mY5K .icon-kyxXVr.image-2yrs5j,
.bd-modal-wrapper .bd-modal-inner,
.callAvatar-v-u4BM.video-3GgX2M:not(.disabled-29UbL1),
.videoHeight-Qp_9vC.minimum-1pRSEN,
.bf-toolbar:before,
.arrowContainer-10m4Cy:active,
.arrowHitbox-2_hxtQ:active,
.streamerModeEnabledBtn-2ZJ2eq:active,
.create-guild-container.deprecated .action.create .btn:active,
.create-guild-container.deprecated .action.join .btn:active,
.form.deprecated .btn-primary:active,
.uploadModal-2ifh8j .footer-3mqk7D .button-primary:active,
#autocomplete-popout,
.uploadModal-2ifh8j .inner-3nWsbo .file-34mY5K .icon-kyxXVr.video-27RLEH,
.image-gallery .imageWrapper-2p5ogY.prev:active,
.image-gallery .imageWrapper-2p5ogY.next:active {
	box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
}

.gamePreview-4pQzIA,
.messagesPopoutWrap-1MQ1bW,
.searchPopout-1vUlP3,
.modal-3HD5ck,
.avatar-uploader-inner,
.gamePreview-9weYR2,
.colorPickerCustom-2CWBn2,
.contentWrapper-3WC1ID:only-child {
	box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2) !important;
}

.avatar-uploader-inner:hover {
	box-shadow: inset 0 0 120px rgba(0,0,0,.75), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2) !important;
}

/* NO SHADOW */

.iconButton-3mKjyp,
.iconButton-3V4WS5,
.button-2b6hmh,
.user-settings-games .now-playing-add .button-38aScr,
#pubslayer button.ui-button.disabled,
#friends .friends-table .friends-row:hover,
.privateChannels-1nO12o .channel-2QD9_O .close,
.themed-popout .header .search-bar .search-bar-inner,
.themed-popout .header .search-bar input,
.input-MwQhcX,
.gameSelector-24sFfz button,
.tabBar-PTjkZh button,
.embedVideoPlay-1r-B3h,
.newMessagesBar-mujexs button,
.chat-3bRxxu form,
.emojiPicker-3g68GS .search-bar.search-bar-light input,
.messagesPopout-24nkyi .message-group .action-buttons,
.search-results-wrap .search-result .hit,
.buttonLinkLink-PqcWoA,
.buttonPrimaryLinkDefault-1PQflF,
.lookLink-3VWONr.colorLink-Ttelix,
.lookLink-3VWONr.colorPrimary-2KuK5O,
.lookLink-9FtZy-.colorPrimary-3b3xI6,
.lookLink-9FtZy-.colorBrand-3pXr91,
.lookLink-9FtZy-.colorRed-1TFJan,
.lookLink-9FtZy-.colorGrey-2DXtkV,
.lookLink-9FtZy-.colorWhite-rEQuAQ,
.action-yrVND8.sizeLarge-1vSeWK:first-child,
.menu-Sp6bN1,
.uploadModal-2ifh8j .footer-3mqk7D .button:not(.button-primary),
.messages-wrapper .messages .message-group-blocked:hover {
	box-shadow: none !important;
}

/* BORDER RADIUS */

/* BORDER RADIUS -> DEFAULT RADIUS */

.contextMenu-HLZMGh,
.create-guild-container.deprecated .action,
.create-guild-container.deprecated .action .btn,
.message-group .comment,
.divider-3gKybi,
.markup-2BOw-j code.inline,
.markup-2BOw-j pre code,
.emojiPicker-3g68GS,
.emojiPicker-3g68GS .dimmer-jySV_v,
.container-3cGP6G,
.messagesPopoutWrap-1MQ1bW .messagesPopout-24nkyi .message-group .comment,
.searchPopout-1vUlP3,
.searchPopout-1vUlP3 .search-option .filter,
.tooltip,
.statusOnlineProfile-C7N-xU:before,
.statusIdleProfile-3lQI6a:before,
.statusDndProfile-33i43o:before,
.statusOfflineProfile-9tGGr-:before,
.statusInvisibleProfile-3iFEOq:before,
.downloadLink-1ywL9o:before,
.wrapper-129saQ a:before,
.newMessagesBar-mujexs button:last-child:before,
.bda-dark #bda-qem button:after,
#searchBarInner .checkbox:after,
.operations-36ENbA .anchor-3Z-8Bb:before,
.metadataDownload-1fk90V:before,
.tipsy-inner,
.regionSelectModal-12e-57,
.regionSelectModal-12e-57 .regionSelectModalOption-2DSIZ3,
.popoutList-T9CKZQ,
.quickswitcher-3JagVE,
.wrapper-O5i5-0,
.wrapper-35wsBm,
.gamePreview-4pQzIA,
.buttonBrandInverted-VFL7Yc,
.buttonGreenFilled-6QHNrw,
.form-deprecated .btn-primary,
.form.deprecated .btn-primary,
#autocomplete-popout,
#autocomplete-popout header,
.bd-plugin-container,
.bda-slist li,
.user-settings-games .not-detected, .user-settings-games .now-playing,
.unreadBar-3lDSDn,
.clipboardInputInner-1EXMA3 .copy-3nFbq8,
.incomingCallInner-2rV0UJ,
.selectorButtonSelected-3ApyX9,
.imageSelected-4Kl81J,
#pubslayer .bd-server-card.bd-server-card,
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc .bgScale-1otPtc,
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc .inner-1JeGVc,
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc.error-kKl9o2,
.gifTag-2VwDRa,
.headerSpotify-zpWxgT .activity-11LB_k button,
.headerStreaming-2FjmGz .activity-11LB_k button,
.invite-CTGItT,
.side-2nYO0F .item-3879bf,
.dragged-mHQEE6,
.container-2oeFrl,
.group-2dAfBy,
.theme-dark .modal-3HOjGZ,
.inviteModal-34DdOm,
.userPopout-3XzG_A,
.themedPopout-1uUNjn,
.integration-3kMeY4,
.attachPopout-1n-ZKM,
.copyInputDefault-36NOFa,
.button-1MICoQ,
.keybind-shortcut.dark span,
.input-3_iTLI,
.connection-1fbD7X,
.card-3DrRmC,
.card-3Qj_Yx,
.authedApp-mj2Hmd,
.formNotice-2tZsrh,
.gameSelector-24sFfz,
.gameSelected-31teRt,
.gameDefault-2SBp6B,
.card-11ynQk:before,
.pictureInPictureVideo-2w62Uz,
.messagesPopoutWrap-1MQ1bW,
.messagesPopoutWrap-1MQ1bW .header-y_zptc,
.popout-3sVMXz,
.embed-IeVjo6,
.attachment-33OFj0,
.radioGroup-1GBvlr,
.emojiPicker-3m1S-j,
.emojiPicker-3m1S-j .dimmer-3iH-5D,
.imageWrapper-2p5ogY,
.card-FDVird:before,
.lookOutlined-3sRXeN.colorWhite-rEQuAQ,
.lookOutlined-3sRXeN.colorGreen-29iAKY,
.lookOutlined-3sRXeN.colorBrand-3pXr91,
.ui-standard-sidebar-view .bda-slist li button,
.callAvatar-v-u4BM.video-3GgX2M .callAvatarVideo-YkbHae,
.clipboardInputInner-1EXMA3,
.Select .Select-control,
.containerUserOver-1U5YnL:after,
.isMentioned-N-h9aa,
.markup-2BOw-j .mention,
.wrapper-3WhCwL,
.message-group .mentioned .message-text,
.chat-3bRxxu .messages-3amgkR .textArea-2Spzkt,
.botTag-2WPJ74,
.pluginrepo-modal .pluginEntry.downloadable .btn-download,
.pluginrepo-modal .pluginEntry.updated .btn-download,
.pluginrepo-modal .pluginEntry.outdated .btn-download,
.themerepo-modal .themeEntry.downloadable .btn-download,
.themerepo-modal .themeEntry.updated .btn-download,
.themerepo-modal .themeEntry.outdated .btn-download,
.embedVideoActions-O6vR7W,
.lookFilled-1Gx00P.colorRed-1TFJan,
.regionSelect-3lf4eE,
.invite-18yqGF,
.search-l1Wz-Q,
.form.deprecated .btn-default,
.create-guild-container.deprecated .form-actions .btn-default,
.carousel-JbsNzL,
.article-FleDq5,
.pagination-1kSokq,
.dockItem-2kQDqg,
.dock-10JPBX,
.card-7JP0BX,
.emptyState-2-sT0o,
.news-1uHrMX,
.streamerModeEnabledBtn-2ZJ2eq,
.messages-wrapper .messages .message-group-blocked,
.messages-wrapper .messages .message-group-blocked.revealed,
.messages-wrapper .messages .message-group-blocked .message-group-blocked-btn,
.keybindShortcut-1BD6Z1 span,
.resultDefault-1ymv3u,
.resultFocused-3aIoYe,
#bd-settingspane-container .bda-slist .plugin-settings button,
.defaultIndicator-G3c16x,
.wrapper-3jrx9n,
.option-n0icdO,
.membershipDialog-rVL-t_,
.rowWrapper-2fB6P0,
.rowBackground-3MeNoN {
	border-radius: var(--border-radius) !important;
}

#bda-qem,
.radioGroup-1GBvlr .item-26Dhrx:first-child,
.guild-settings-audit-logs .auditLog-3jNbM6:nth-child(2),
.themedPopout-25DgLi .header-SsaQ8X,
.paginationItem-3-MBTL:first-child,
.messages-wrapper .messages .message-group-blocked.revealed .message-group-blocked-btn {
	border-radius: var(--border-radius) var(--border-radius) 0 0 !important;
}

.regionSelect-3lf4eE button,
.coverImageWrapper-22d5LB {
	border-radius: 0 var(--border-radius) var(--border-radius) 0 !important;
}

.radioGroup-1GBvlr .item-26Dhrx:last-child,
.guild-settings-audit-logs .auditLog-3jNbM6:last-child,
#bda-qem-twitch-container,
#bda-qem-favourite-container,
.paginationItem-3-MBTL:last-child {
	border-radius: 0 0 var(--border-radius) var(--border-radius) !important;
}

/* BORDER RADIUS -> BIG RADIUS */

.modal-3HD5ck,
.uploadModal-2ifh8j,
.userPopout-3XzG_A,
.root-SR8cQa,
.menu-Sp6bN1,
.create-guild-container.deprecated,
.create-guild-container.deprecated .create-or-join .form-inner,
.bd-modal-wrapper .bd-modal-inner,
.popout-3sVMXz.popoutBottom-1YbShG[style*="overflow: hidden; visibility: visible;"],
.quickswitcher-3JagVE,
.gamePreview-9weYR2,
.colorPickerCustom-2CWBn2,
.contentWrapper-3WC1ID:only-child {
	border-radius: var(--border-radius-big) !important;
}

.content-2BXhLs {
	border-radius: var(--border-radius-big) var(--border-radius-big) 0 0 !important;
}

.footer-2yfCgX {
	border-radius: 0 0 var(--border-radius-big) var(--border-radius-big) !important;
}


.close-18n9bP,
.iconActiveLarge-2nzn9z,
.guildIconExpired-2Qcq05,
.uploadModal-2ifh8j .inner-3nWsbo .file-34mY5K .icon-kyxXVr.image-2yrs5j,
.artworkActionable-MpCQlA,
.privateChannels-1nO12o .search-bar .search-bar-inner input {
	border-radius: 50%;
}

.ui-checkbox-wrapper .ui-checkbox.checked polyline {
	stroke: var(--accent-color) !important;
}

.popout-3sVMXz.popoutBottomRight-2JrySt header:before,
.popout-3sVMXz.popoutBottom-1YbShG header:before,

.popout-3sVMXz.popout-bottom-right header:before,
.popout-3sVMXz.popout-bottom header:before {
	border-bottom-color: var(--accent-color);
}

/* INPUTS */

.app-19_DXt input,
.quickMessage-1yeL4E {
	height: auto !important;
	line-height: 1em !important;
	padding: 4px 0 !important;
	border-bottom: 2px solid #444 !important;
	transition: 200ms ease;
}

.app-19_DXt input:focus,
.modal-3HOjGZ .inner-3if5cm.innerAutocomplete-2qsvzH,
.quickMessage-1yeL4E:focus,
.themed-popout .header .search-bar input:focus,
.focused-xL_GX6,
.phoneField-36t5MB .inputField-3os-YM:focus {
	border-bottom: 2px solid var(--accent-color) !important;
}

.privateChannels-1nO12o .search-bar .search-bar-inner input,
.searchBar-YMJBu9 .input-yt44Uw,
.input-3ITkQf,
.inputDefault-3JxKJ2,
.user-settings-games .game-name,
.container-2YgzWd .input-3ITkQf,
.multiInputFirst-16Lbcj input,
.multiInputFirst-16Lbcj input:focus,
.multiInputLast-1aMJ4U input,
.multiInputLast-1aMJ4U input:focus,
.copyInputDefault-36NOFa input,
.copyInputDefault-36NOFa input:focus,
.lookOutlined-1c5nhl.colorWhite-1IbOTe,
.lookOutlined-3sRXeN.colorWhite-rEQuAQ,
.lookOutlined-3sRXeN.colorPrimary-3b3xI6,
.lookOutlined-1c5nhl.colorPrimary-2KuK5O,
.lookOutlined-3sRXeN.colorGreen-29iAKY,
.lookOutlined-3sRXeN.colorBrand-3pXr91,
.card-FDVird:before,
.form-deprecated .btn-default {
	border: none !important;
}

.theme-dark .checkbox-1ix_J3 {
	border-width: 2px;
}

.checked-3_4uQ9 {
	border-radius: 4px !important
}

.copyInputDefault-36NOFa {
	background: var(--popout-alt) !important;
	border: none !important;
}

.theme-dark .copyInputDefault-36NOFa .button-2wYlsU:after,
.clipboardInputInner-1EXMA3 .copy-3nFbq8:after,
.copyButton-3ElbuJ:after {
	content: " ";
	position: absolute;
	width: 24px;
	height: 24px;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE5LDIxSDhWN0gxOU0xOSw1SDhBMiwyIDAgMCwwIDYsN1YyMUEyLDIgMCAwLDAgOCwyM0gxOUEyLDIgMCAwLDAgMjEsMjFWN0EyLDIgMCAwLDAgMTksNU0xNiwxSDRBMiwyIDAgMCwwIDIsM1YxN0g0VjNIMTZWMVoiIC8+PC9zdmc+);
}

.copyInputDefault-36NOFa .contentsGhost-2Yp1r8,
.copyInputDefault-36NOFa .contents-4L4hQM {
	display: none !important;
}

.searchBar-1MOL6S input {
	padding: 0 4px !important;
}

.input-cIJ7To,
.form.deprecated .control-group input[type=text] {
	padding: 0 !important;
	background: transparent !important;
	border: none !important;
	border-bottom: 2px solid #444 !important;
	border-radius: 0 !important;
}

.create-guild-container.deprecated .join-server .link-container input {
	height: auto !important;
	padding: 4px 0 !important;
	line-height: 1em !important;
}

.input-cIJ7To:focus,
.form.deprecated .control-group input[type=text]:focus {
	border-bottom: 2px solid var(--accent-color) !important;
}

.form.deprecated .control-group input[type=text] {
	color: #999 !important;
}

.input-cIJ7To.size16-14cGz5.flexCenter-3_1bcw.flex-1O1GKY.justifyCenter-3D2jYp.alignCenter-1dQNNs,
.user-settings-games .game-name-input:focus {
	border: none !important;
}


/*
 *
 *	TITLE BAR
 *
 */

.titleBar-AC4pGV {
	z-index: 1 !important;
}

.typeWindows-1za-n7 {
	margin-top: 0;
	padding-top: 4px;
}

.base-3AoPqv {
	border-radius: 0;
}

.wordmark-2L03Wr,
.wordmark-2iDDfm {
	width: 126px;
	height: 14px;
}

.wordmark-2L03Wr:after,
.wordmark-2iDDfm:after {
	position: absolute;
	content: " ";
	width: 126px;
	height: 14px;
	top: 6px;
	background: url(data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAAKCAQAAADYmSLUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiAhoSAgtoejimAAACpElEQVRIx52V4WGjMAyFP3UDdwRuBGcEZ4TcCGSEdIRkBDJCMgKMACPACDDCux82YMi1157+gJ7tJ8mSJVRLkq5CCJ0kSSKJWkktgIL2Umy0HjKtVQBQL6nasiVLcXe5aDMST5fpRK8aQD75OeqSVoLaaHfZ6xOynl7lIQe6LHolJ96SX6f0DWQijwe8PD8VT62whWY2vmK7Y2Y0VHOQAHLUON7N+OCqC8hTM9m8N4AK2oR0VJrjuZuZcSTwSMgvjAOeFke6UckLoTHPvK5p7bq4UcacZzdbZk4mXYXGmPE88yvbF5mvomldJLk58wqrHdVqQQ/1i9VRjx1Sp2rd2E6shRByGnWNmR9S7k84hiwPJ+AGZAF+R2ygA9wO/glbQ16FA8z1Ykc7ACeey+qNDggZ0uC1t84GmWgIMfhnMuXTf9wcKJjsgwm3lNGrVHMHyMwU+OQyf2Pjc7bVOVgYbeBMqV5VtCKXdsTVm93kcCuyPQ0KlNxt2lnw85t/4vGUTDSbTD2BO3zD3ewy6HEM3Df4/7HNAd7NuFPQq37N6RdSShI1Tzu/LsbgHQ1Q4njON6aYn1LiAoRPTZ4tyrDDf+fIno1/BbDJbbqAmx35haeyiexR6aKLTUwZp2Ouu7sZ73umtGdYMz9RkhU9p42D3ynVdBnJ2PZl/5RtrpMY3jW2P7CBBg80GcPlBQl0a5HbxI0yf5ZAQeAZu30l9JA0KvVzop7Ggx5Smrev3X4/58tlnoa127+yaXu6yru9rlIcdanbFxpjuStoVAXyi0dVsrRFTsm/KtadRtVZt/dq1cu9LXcxv8foYMEJ6JLaAeH7095uDMD1K7ZPpn2JJAJnu2V8A0dgXF+vdRxxkoTnaA1Yx2FBzvbc+DPxQUhNu0e0dByY/gArcpEbE5P9QgAAAABJRU5ErkJggg==) no-repeat;
}

.wordmark-2L03Wr svg,
.wordmark-2iDDfm svg {
	display: none;
}

.iconMargin-2YXk4F {
	position: relative;
	display: inline-block;
	width: 26px;
	height: 26px;
}

/* TITLE BAR -> OldTitleBar */

.iconMargin-2YXk4F.minButtonOTB,
.iconMargin-2YXk4F.maxButtonOTB,
.iconMargin-2YXk4F.closeButtonOTB {
	margin: 0;
	cursor: pointer;
}

.iconMargin-2YXk4F.minButtonOTB {
	margin: 0 0 0 4px;
}

.iconMargin-2YXk4F.minButtonOTB:hover,
.iconMargin-2YXk4F.maxButtonOTB:hover {
	background-color: rgba(255,255,255,0.05);
}

.iconMargin-2YXk4F.closeButtonOTB:hover {
	background: var(--alert-color);
}

.iconMargin-2YXk4F.minButtonOTB:before,
.iconMargin-2YXk4F.maxButtonOTB:before,
.iconMargin-2YXk4F.closeButtonOTB:before {
	content: " ";
	position: absolute;
	width: 26px;
	height: 26px;
	top: 0;
	bottom: 0;
	margin: auto 0;
	background-position: 35% 50%;
	background-repeat: no-repeat;
	opacity: 0.59;
}

.iconMargin-2YXk4F.minButtonOTB:hover:before,
.iconMargin-2YXk4F.maxButtonOTB:hover:before,
.iconMargin-2YXk4F.closeButtonOTB:hover:before {
	opacity: 1;
}

.iconMargin-2YXk4F.minButtonOTB:before {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIj4KCTxyZWN0IGZpbGw9IiNmZmZmZmYiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxIiB4PSIxIiB5PSI2Ij48L3JlY3Q+Cjwvc3ZnPiA=);
}

.iconMargin-2YXk4F.maxButtonOTB:before {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIj48cmVjdCB3aWR0aD0iOSIgaGVpZ2h0PSI5IiB4PSIxLjUiIHk9IjEuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIj48L3JlY3Q+PC9zdmc+);
}

.iconMargin-2YXk4F.closeButtonOTB:before {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIj48cG9seWdvbiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHBvaW50cz0iMTEgMS41NzYgNi41ODMgNiAxMSAxMC40MjQgMTAuNDI0IDExIDYgNi41ODMgMS41NzYgMTEgMSAxMC40MjQgNS40MTcgNiAxIDEuNTc2IDEuNTc2IDEgNiA1LjQxNyAxMC40MjQgMSI+PC9wb2x5Z29uPjwvc3ZnPg==);
}

.iconMargin-2YXk4F.minButtonOTB:after,
.iconMargin-2YXk4F.maxButtonOTB:after,
.iconMargin-2YXk4F.closeButtonOTB:after {
	display: none;
}


/*
 *
 *	NOTIFICATION/NOTICE AND ERROR BAR
 *
 */

.notice-2FJMB4,
.noticeDanger-7u-yT9,
.noticeDefault-362Ko2,
.notice-3I4-y_,
.noticeInfo-3_iTE1,
.noticeFacebook-3equ5g,
.noticeSpotify-27dhr0,
.noticeStreamerMode-2TSQpg,
.DevilBro-notice {
	border-radius: 0 !important;
}

.noticeDanger-7u-yT9 .button-1MICoQ,
.noticeDefault-362Ko2 .button-1MICoQ,
.noticeInfo-3_iTE1 .button-1MICoQ,
.noticeFacebook-3equ5g .button-1MICoQ,
.noticeSpotify-27dhr0 .button-1MICoQ,
.noticeStreamerMode-2TSQpg .button-1MICoQ,
.noticePremium-12Zvj9 .button-1MICoQ {
	background: #fff !important;
	border: none;
	color: #444 !important;
}

.noticeDanger-7u-yT9 {
	background: var(--alert-color) !important;
}

.noticeDanger-7u-yT9 .button-1MICoQ {
	color: var(--alert-color) !important;
}

.noticeDefault-362Ko2 .button-1MICoQ,
.noticeInfo-3_iTE1 .button-1MICoQ {
	color: var(--accent-color) !important;
}

.noticeFacebook-3equ5g .button-1MICoQ {
	color: #355089 !important;
}

.noticeSpotify-27dhr0 .button-1MICoQ {
	color: var(--spotify-color) !important;
}

.noticeStreamerMode-2TSQpg .button-1MICoQ {
	color: var(--stream-color) !important;
}

.notice-3I4-y_ {
	padding: 0 10px;
	font-size: 14px;
	line-height: 34px;
	color: #fff;
	text-align: center;
}

.dismiss-1QjyJW {
	position: absolute;
	width: 36px;
	height: 36px;
	top: -1px;
	right: 2px;
	-webkit-app-region: no-drag;
	-webkit-transition: opacity 200ms;
	background: url(https://discordapp.com/assets/7731c77d99babca1a8faec204d98c380.svg) no-repeat;
	background-position: 50% 50%;
	background-size: 10px 10px;
	cursor: pointer;
	opacity: 0.5;
	transition: opacity 200ms;
}

.dismiss-SCAH9H {
	background-position: 50% 50%;
}

.channelNotices-41mJbj .channelNotice-1-XFjC.invite-OjTXrW,
.channelNotices-3AUnoM .channelNotice-cQsVXw.lfg-3h9KFj {
	background: #16171a url(https://discordapp.com/assets/bf625d222187f542b9d7179109422e2c.svg) no-repeat center 20px !important;
}

.channelNotices-3AUnoM .channelNotice-cQsVXw.quickswitcher-3-ck0i,
.channelNotices-41mJbj .channelNotice-1-XFjC.quickswitcher-35bYg4 {
	background: #16171a url(https://discordapp.com/assets/8fdb69b7684b8e1ecb3fdde909daca41.svg) no-repeat center 35px !important;
	border-bottom: 1px solid #222 !important;
}

.channelNotices-41mJbj .channelNotice-1-XFjC,
.channelNotices-3AUnoM,
.channelNotices-41mJbj .channelNotice-1-XFjC .close-relY5R {
	box-shadow: none !important;
	border: none !important;
	opacity: 1 !important;
}

.btn-11C5_u {
	border: none !important;
}


/*
 *
 *	MODAL
 *
 */

.modal-2LIEKY,
.modal-1UGdnR,
.bd-modal-wrapper .bd-modal {
	z-index: 999999;
}

.backdrop-1ocfXc {
	z-index: 1001;
}

.footer-2yfCgX,
.header-1R_AjF {
	padding: 20px 16px;
}

.footer-2yfCgX {
	justify-content: flex-start;
}

.footer-2yfCgX .lookFilled-1Gx00P.colorBrand-3pXr91 {
	margin: 0 0 0 8px;
}

.minorAction-OVxOke {
	position: absolute;
	left: 8px;
}

.header-1R_AjF h2.title-3sZWYQ {
	padding: 0 !important;
}

.inner-3wn6Q5 {
	padding: 0 16px;
}

.theme-dark .footer-1PYmcw {
	background: #212226;
	border-top: none;
}

.tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP:hover,
.tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP.selected {
	position: relative !important;
	border-bottom-color: transparent !important;
}

.message-2qRu38 {
	background: transparent !important;
	box-shadow: none !important;
}

.uploadModal-2ifh8j .inner-1JeGVc,
.uploadModal-2ifh8j .inner-3nWsbo {
	border: none;
}

.uploadModal-2ifh8j .inner-3nWsbo .file-34mY5K .icon-kyxXVr.image-2yrs5j {
	border: none;
}

.uploadModal-2ifh8j .textArea-2Spzkt {
	padding: 8px !important;
}

.uploadModal-2ifh8j .emojiButton-2wRZts {
	top: 0;
	right: 0;
}

.uploadModal-2ifh8j .footer-3mqk7D {
	border-top: 1px solid #444;
}

.uploadModal-2ifh8j .footer-3mqk7D .button {
	background: transparent;
}

.uploadModal-2ifh8j .footer-3mqk7D .button:hover {
	text-decoration: none;
}

.uploadModal-2ifh8j .footer-3mqk7D .button-primary {
	margin: 0 0 0 8px !important;
	color: #fff;
}

.uploadModal-2ifh8j .inner-3nWsbo .file-34mY5K .icon-kyxXVr.video-27RLEH {
	height: 100px;
	margin: -42px 16px 0 0;
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTAsMTYuNVY3LjVMMTYsMTJNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaIiAvPg0KPC9zdmc+);
	background-size: 118%;
	border-radius: 50%;
}

.footer-1PYmcw,
.bd-modal-wrapper .header,
.bd-modal-wrapper .tab-bar-container,
.bd-modal-wrapper .bd-modal-body {
	background: var(--popout-color) !important;
}

.bd-modal-wrapper .tab-bar-container {
	box-shadow: none !important;
}

.close-18n9bP {
	width: 34px;
	height: 34px;
	padding: 8px;
	opacity: 1;
	box-shadow: none !important;
	transition: 200ms ease all;
}

.close-18n9bP:hover {
	background-color: rgba(255,255,255,0.1) !important;
}

.close-18n9bP:active {
	background-color: rgba(255,255,255,0.2) !important;
}

/* MODAL -> SERVER INVITE */

.inviteModal-34DdOm .inviteTitle-2-D7Bk {
	color: #eee;
}

.inviteModal-34DdOm .inviteBody-1Y3j7y,
.inviteModal-34DdOm .inviteCancel-3lWPwu {
	color: #aaa;
}

/* MODAL -> SPOTIFY INVITE */

.modal-3HOjGZ .inner-3if5cm {
	background: transparent !important;
	border-bottom: 2px solid #444 !important;
}

.innerAutocomplete-2qsvzH {
	border-radius: 0 !important;
}

.modal-3HOjGZ .textArea-2Spzkt {
	width: calc(100% - 32px) !important;
	padding: 4px 0 !important;
}

.modal-1UGdnR {
	z-index: 1001 !important;
}

.modal-3HD5ck .emojiButton-2wRZts {
	width: 32px !important;
	top: 2px !important;
	right: 4px !important;
}

.popout-3sVMXz.popoutTopRight-3BzFIE.noArrow-3BYQ0Z
.popout-3sVMXz.popout-top-right.noArrow-3BYQ0Z {
	z-index: 9999999 !important;
}

/* MODAL -> UPLOAD MODAL */

.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc .inner-3nWsbo,
.uploadModalIn-1z07Bv .uploadDropModal-2kTwbc .inner-1JeGVc {
	border: none;
}


/*
 *
 *	BORDERS
 *
 */

/* BORDERS -> REMOVE BOTTOM BORDER */

.DevilBro-modal .tab.selected,
.DevilBro-modal .tab:hover,
.search-results-wrap .search-header .tab.selected,
.search-results-wrap .search-header .tab:hover,
.item-1TLUig.selected-P8xTeN {
	border-bottom-color: transparent !important;
}

/* BORDERS -> ADD NEW BOTTOM BORDER */

#friends .tab-bar .tab-bar-item.selected,
#friends .tab-bar .tab-bar-item.tab-bar-item-primary.selected,
.DevilBro-modal .tab.selected,
.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq.selected-39BZ4S,
.tab-bar.TOP .tab-bar-item.selected,
.search-results-wrap .search-header .tab.selected,
.item-1TLUig.selected-P8xTeN {
	position: relative !important;
}

.tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP.selected:after,
#friends .tab-bar .tab-bar-item.selected:after,
#friends .tab-bar .tab-bar-item.tab-bar-item-primary.selected:after,
.DevilBro-modal .tab.selected:after,
.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq.selected-39BZ4S:after,
.tab-bar.TOP .tab-bar-item.selected:after,
.search-results-wrap .search-header .tab.selected:after,
.item-1TLUig.selected-P8xTeN:after {
	position: absolute;
	content: " ";
	width: 90%;
	height: 3px;
	left: 0;
	right: 0;
	bottom: -2px;
	margin: 0 auto;
	background: #fff;
	border-radius: var(--border-radius-bar) var(--border-radius-bar) 0 0;
	transition: 250ms ease all;
}

.tab-bar.tabBar-2MuP6- .tabBarItem-1b8RUP.selected:after {
	width: 100%;
}

.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq:last-child {
	margin: 0;
}

.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq.selected-39BZ4S:after {
	bottom: 0;
}


/*
 *
 *	CARDS
 *
 */

.theme-dark .cardPrimary-ZVL9Jr,
.theme-dark .cardPrimaryEditable-3KtE4g,
.theme-dark .headerClickable-1jGUp8,
.theme-dark .headerDefault-1ajMkj,
.theme-dark .cardPrimaryOutline-29Ujqw,
.theme-dark .cardPrimary-1Hv-to,
.bd-plugin-container,
.bda-slist li,
#pubslayer .bd-server-card.bd-server-card,
.radioGroup-1GBvlr,
.card-FDVird:before {
	background: var(--card-color);
	border: none !important;
}

.card-FDVird:before {
	background: var(--card-color) !important;
}

.cardWarning-2yPNAa {
	background: var(--alert-color) !important;
	border: none;
}

.formNotice-2_hHWR,
.accountList-33MS45,
.card-VoqMMK {
	padding: 0;
}

.formNotice-2_hHWR .formNoticeTitle-2KGjDe,
.accountList-33MS45 .h5-18_1nd,
.card-VoqMMK div:not([class]):first-child {
	margin: 0;
	padding: 16px;
	border-bottom: 1px solid #444;
	font-size: 1em;
	color: #dcddde;
}

.formNotice-2_hHWR .formNoticeBody-M4JFHP,
.accountList-33MS45 .primary-jw0I4K {
	margin: 0;
	padding: 16px;
}

.accountList-33MS45 .connectedAccounts-2-XP1G {
	padding: 0 16px 16px 16px;
}

.theme-dark .select-2TCrqx .Select-control {
	border: none;
}

.Select .Select-menu {
	padding: 8px 0 !important;
}

.Select .Select-option {
	padding: 10px !important;
}

.Select .Select-option:last-child {
	border-radius: 0 !important;
}

.Select .Select-input input {
	border: none !important;
}

.Select-menu-outer {
	animation: opacity 100ms linear, open-context-menu 300ms var(--default-animation);
	transform-origin: top;
}

.Select-menu-outer,
.ui-select > .Select .Select-menu-outer {
	box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2) !important;
	border: none !important;
}

.cardPrimaryEditable-3KtE4g[style="padding: 10px; border-color: rgb(114, 137, 218); background-color: rgb(114, 137, 218);"] {
	background: var(--accent-color) !important;
}

.footer-2yfCgX {
	padding: 8px;
	box-shadow: inset 0 1px 0 #444 !important;
}

.footer-2yfCgX .lookLink-9FtZy-.colorPrimary-3b3xI6,
.footer-2yfCgX .lookLink-9FtZy-.colorBrand-3pXr91,
.add-game-popout .lookLink-9FtZy-.colorGrey-2DXtkV {
	margin: 0 8px 0 0 !important;
}


/*
 *
 *	BUTTONS
 *
 */

.appMount-3VJmYg button,
.streamerModeEnabledBtn-2ZJ2eq {
	transition: 200ms ease all;
}

.lookInverted-2D7oAl.colorBrand-3pXr91,
.buttonRedOutlined-2t9fm_,
.form-deprecated .btn-default,
.lookLink-9FtZy-.colorBrand-3pXr91 {
	color: #fff !important;
}

.lookFilled-1Gx00P,
.sizeXlarge-2yFAlZ,
.sizeLarge-1vSeWK,
.sizeMin-1mJd1x,
.sizeMedium-1AC_Sl,
.modal-1UGdnR .button-3k0cO7,
.gamePreview-9weYR2 .sizeLarge-1vSeWK,
.iconButtonSize-U9SCYe,
.button-3To2tQ.buttonSize-DbrWhv,
.uploadModal-2ifh8j .footer-3mqk7D .button,
.create-guild-container.deprecated .action.create .btn,
.create-guild-container.deprecated .action.join .btn,
.create-guild-container.deprecated .join-server .btn,
.create-guild-container.deprecated .form-actions .btn {
	width: auto !important;
	min-width: 36px !important;
	max-width: auto !important;
	min-height: 36px;
	height: 36px !important;
	padding: 0 16px !important;
	font-size: 16px !important;
	text-transform: capitalize !important;
	flex: 0 1 auto !important;
}

.sizeXlarge-2yFAlZ {
	font-size: 14px !important;
}

.contents-18-Yxp,
.buttonText-13IoY7 {
	width: auto !important;
	margin: 0 !important;
	padding: 0 !important;
}

.modal-1UGdnR .button-3k0cO7 {
	min-width: 0 !important;
	max-width: 100% !important;
	width: auto !important;
	left: 0;
	right: 0;
	margin: 0 auto;
	padding: 0 16px !important;
}

.streamerModeEnabledBtn-2ZJ2eq {
	padding: 8px 16px;
	line-height: 1em;
	font-size: 1em;
	font-weight: 500;
	text-transform: none;
}

.form.deprecated .btn-primary {
	line-height: 24px !important;
}

.sizeSmall-2cSMqn,
.sizeMedium-1AC_Sl {
	width: auto !important;
	min-width: 36px !important;
	height: 36px !important;
	min-height: 36px !important;
	padding: 0 16px !important;
	flex: 0 1 auto !important;
}

/* BUTTONS -> TRANSPARENT */

.action-yrVND8.sizeLarge-1vSeWK:first-child {
	background: transparent !important;
}

.lookLink-9FtZy-:hover,
.form.deprecated .btn-default:hover,
.create-guild-container.deprecated .form-actions .btn-default:hover,
.uploadModal-2ifh8j .footer-3mqk7D .button:not(.colorBrand-3pXr91):first-child:hover,
.uploadModal-2ifh8j .footer-3mqk7D .button:not(.colorBrand-3pXr91):hover,
.action-yrVND8.sizeLarge-1vSeWK:first-child:hover {
	background: rgba(255,255,255,0.025) !important;
}

.lookLink-9FtZy-:active,
.form.deprecated .btn-default:active,
.create-guild-container.deprecated .form-actions .btn-default:active,
.uploadModal-2ifh8j .footer-3mqk7D .button:not(.colorBrand-3pXr91):first-child:active:hover,
.action-yrVND8.sizeLarge-1vSeWK:first-child:hover:active {
	background: rgba(255,255,255,0.075) !important;
}

/* BUTTONS -> ACCENT */

.lookFilled-1Gx00P.colorBrand-3pXr91,
.lookFilled-1Gx00P.colorBrand-3pXr91:hover {
	background: var(--accent-color) !important;
	opacity: 1 !important;
}

.lookFilled-1Gx00P.colorBrand-3pXr91:active {
	background: var(--accent-color-high) !important;
	opacity: 1 !important;
}

.lookLink-9FtZy- .contents-18-Yxp {
	margin: 0 !important;
}

.lookLink-9FtZy-.colorBrand-3pXr91:hover .contents-18-Yxp,
.lookLink-9FtZy-.colorPrimary-3b3xI6:hover .contents-18-Yxp,
.lookLink-9FtZy-.colorRed-1TFJan:hover .contents-18-Yxp,
.lookLink-9FtZy-.colorGrey-2DXtkV:hover .contents-18-Yxp,
.lookLink-9FtZy-.colorWhite-rEQuAQ:hover .contents-18-Yxp {
	background-image: none !important;
}

.lookOutlined-1c5nhl.colorWhite-1IbOTe,
.lookOutlined-1c5nhl.colorPrimary-2KuK5O,
.lookFilled-1Gx00P.colorGrey-2DXtkV,
#pubslayer button[style*="background-color: rgb(58, 193, 92);"],
.bda-slist .bda-footer button:disabled,
.button-38aScr:disabled {
	background: rgba(255,255,255,0.05) !important;
	color: #888 !important;
	box-shadow: none !important;
	cursor: auto;
}

.button-38aScr:disabled {
	background: rgba(255,255,255,0.1) !important;
}

.topSectionSpotify-1lI0-P .lookOutlined-3sRXeN.colorWhite-rEQuAQ,
.topSectionStreaming-1Tpf5X .lookOutlined-3sRXeN.colorWhite-rEQuAQ {
	background: #fff !important;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}

.topSectionSpotify-1lI0-P .lookOutlined-3sRXeN.colorWhite-rEQuAQ {
	color: var(--spotify-color) !important;
}

.topSectionStreaming-1Tpf5X .lookOutlined-1c5nhl.colorWhite-1IbOTe {
	color: var(--stream-color) !important;
}

.topSectionSpotify-3744IX .lookOutlined-1c5nhl.colorWhite-1IbOTe.disabled-uc2Cqc,
.topSectionStreaming-1Tpf5X .lookOutlined-1c5nhl.colorWhite-1IbOTe.disabled-uc2Cqc {
	box-shadow: none !important;
}

button[disabled],
.buttonGreyFilled-3qPP_J {
	box-shadow: none !important;
}

.buttonGreyFilled-3qPP_J {
	background: #444;
	color: #888;
}

.buttonRedOutlined-2t9fm_,
.lookOutlined-1c5nhl.colorRed-3HTNPV,
.lookOutlined-3sRXeN.colorRed-1TFJan,
.lookFilled-1Gx00P.colorRed-1TFJan,
.lookFilled-1Gx00P.colorRed-1TFJan:hover {
	background: var(--alert-color);
	border: none;
}

.lookOutlined-3sRXeN.colorRed-1TFJan:active,
.lookFilled-1Gx00P.colorRed-1TFJan:active {
	background: var(--alert-color-high);
}

.accountBtnInner-sj5jLs {
	border: none; !ime-mode: 
}

.closeButton-1tv5uR {
	position: relative !important;
	width: 36px !important;
	height: 36px !important;
	border: none !important;
}

.closeButton-1tv5uR:hover {
	background: transparent !important;
}

.closeButton-1tv5uR:active {
	transform: translateY(0) !important;
}

.horizontal-1ae9ci > .flex-1xMQg5,
.horizontal-1ae9ci > .flexChild-faoVW3 {
	margin-left: 4px;
	margin-right: 5px;
}


/*
 *
 *	MD RIPPLE
 *
 */

.button-2b6hmh:after,
.attachButton-Di6YUh:after,
.buttonInfo-3nkbOt:after,
.buttonDisconnect-3W_SJc:after,
.dismiss-SCAH9H:after,
.dismiss-1QjyJW:after,
.iconSpacing-3JkGQO:after,
.privateChannels-1nO12o .channel-2QD9_O .close:after,
.iconMargin-2YXk4F:after,
.jumpToPresentBar-9P20AM:before,
.connectionDelete-2Odoln:after,
.wrapper-O5i5-0 .instantInviteModal-3vhcvC .form-actions .advanced-26tKjg:after,
.closeButton-1tv5uR:after,
.guilds-wrapper .guilds-add-inner:after,
.iconButtonStatic-2cPMA6:after,
.iconButtonDefault-2cKx7-:not(.unavailable):after,
.attachment-33OFj0 a:not(.fileNameLink-9GuxCo):after,
.checkbox-1ix_J3:after,
.overlay-toggle-icon:after,
.button-mM-y8i:after,
.bf-toolbar .format:after,
.arrowContainer-10m4Cy:after,
.arrowHitbox-2_hxtQ:after,
.channelNotices-41mJbj .channelNotice-1-XFjC .close-relY5R:after,
#friends .friends-table .friends-row .friends-column-actions .friends-action:after,
.operations-36ENbA .anchor-3Z-8Bb:after,
.addButton-1BORro:after,
.header-bZdm0X .button-38aScr:not(.lookFilled-1Gx00P):after,
.headerActions-3w_xT- .button-38aScr:not(.lookFilled-1Gx00P):after,
.metadataDownload-1fk90V:after,
.image-gallery .imageWrapper-2p5ogY.prev:after,
.image-gallery .imageWrapper-2p5ogY.next:after {
	content: " ";
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	border-radius: 50%;
	background: rgba(255,255,255,0.1);
	opacity: 0 !important;
	pointer-events: none;
	transform: scale(1.2);
	transition: 300ms ease;
	z-index: 4;
}

.platform-web .base-3AoPqv {
	border-radius: 0 !important;
}

/* MD RIPPLE -> HOVER */

.button-2b6hmh:hover:after,
.iconButtonStatic-2cPMA6:hover:after,
.closeButton-1tv5uR:hover:after,
.attachment-33OFj0 a:not(.fileNameLink-9GuxCo):hover:after,
.connectionDelete-2Odoln:hover:after,
.iconSpacing-3JkGQO:hover:after,
.privateChannels-1nO12o .channel-2QD9_O .close:hover:after,
.iconMargin-2YXk4F:hover:after,
.buttonInfo-3nkbOt:hover:after,
.buttonDisconnect-3W_SJc:hover:after,
.dismiss-SCAH9H:hover:after,
.iconButtonDefault-2cKx7-:not(.unavailable):hover:after,
.overlay-toggle-icon:hover:after,
.button-mM-y8i:hover:after,
.bf-toolbar .format:hover:after,
.channelNotices-41mJbj .channelNotice-1-XFjC .close-relY5R:hover:after,
#friends .friends-table .friends-row .friends-column-actions .friends-action:hover:after,
.operations-36ENbA .anchor-3Z-8Bb:hover:after,
.addButton-1BORro:hover:after,
.header-bZdm0X .button-38aScr:not(.lookFilled-1Gx00P):hover:after,
.headerActions-3w_xT- .button-38aScr:not(.lookFilled-1Gx00P):hover:after,
.metadataDownload-1fk90V:hover:after {
	opacity: 1 !important;
	transform: scale(1.2);
	animation: scale 150ms var(--default-animation), opacity 150ms ease;
}

.button-2b6hmh:active:after,
.iconButtonStatic-2cPMA6:active:after,
.closeButton-1tv5uR:active:after,
.attachment-33OFj0 a:not(.fileNameLink-9GuxCo):active:after,
.connectionDelete-2Odoln:active:after,
.iconSpacing-3JkGQO:active:after,
.privateChannels-1nO12o .channel-2QD9_O .close:active:after,
.iconMargin-2YXk4F:active:after,
.buttonInfo-3nkbOt:active:after,
.buttonDisconnect-3W_SJc:active:after,
.iconButtonDefault-2cKx7-:not(.unavailable):active:after,
.overlay-toggle-icon:active:after,
.button-mM-y8i:active:after,
.bf-toolbar .format:active:after,
#friends .friends-table .friends-row .friends-column-actions .friends-action:active:after,
.operations-36ENbA .anchor-3Z-8Bb:active:after,
.addButton-1BORro:active:after,
.header-bZdm0X .button-38aScr:not(.lookFilled-1Gx00P):active:after,
.headerActions-3w_xT- .button-38aScr:not(.lookFilled-1Gx00P):active:after,
.metadataDownload-1fk90V:active:after {
	background: rgba(255,255,255,0.2);
}

.dismiss-SCAH9H:active:after {
	background: rgba(255,255,255,0.35);
}

/* MD RIPPLE -> CLICK */

.attachButton-Di6YUh:active:after,
.dismiss-1QjyJW:active:after,
.jumpToPresentBar-9P20AM:active:before,
.wrapper-O5i5-0 .instantInviteModal-3vhcvC .form-actions .advanced-26tKjg:active:after,
.guilds-wrapper .guilds-add-inner:active:after,
.radioGroup-1GBvlr .item-26Dhrx:active .checkbox-1ix_J3:after,
.arrowContainer-10m4Cy:active:after,
.arrowHitbox-2_hxtQ:active:after,
.channelNotices-41mJbj .channelNotice-1-XFjC .close-relY5R:active:after,
.image-gallery .imageWrapper-2p5ogY.prev:active:after,
.image-gallery .imageWrapper-2p5ogY.next:active:after {
	opacity: 1 !important;
	transform: scale(1.2);
	animation: scale 150ms var(--default-animation), opacity 150ms ease;
}

.privateChannels-1nO12o .channel-2QD9_O .close:after,
.privateChannels-1nO12o .channel-2QD9_O .close:hover:after {
	top: 0;
	left: 0;
	transform: scale(1.75);
}

.iconMargin-2YXk4F:after,
.iconMargin-2YXk4F:hover:after {
	left: -1px;
	transform: scale(1.4);
}

.button-mM-y8i:after,
.button-mM-y8i:hover:after {
	top: 0;
	left: 0;
	transform: scale(1);
}

.jumpToPresentBar-9P20AM:before,
.jumpToPresentBar-9P20AM:active:before {
	transform: scale(1);
}

.dismiss-SCAH9H:after,
.dismiss-1QjyJW:after {
	background: rgba(255,255,255,0.25);
}

.dismiss-SCAH9H:after,
.dismiss-SCAH9H:hover:after,
.dismiss-1QjyJW:after,
.dismiss-1QjyJW:active:after,
.guilds-wrapper .guilds-add-inner:after,
.guilds-wrapper .guilds-add-inner:active:after,
.attachment-33OFj0 a:not(.fileNameLink-9GuxCo):after,
.attachment-33OFj0 a:not(.fileNameLink-9GuxCo):active:after,
.overlay-toggle-icon:after,
.overlay-toggle-icon:hover:after {
	left: 0;
	transform: scale(1);
}

.dismiss-SCAH9H:after,
.dismiss-SCAH9H:hover:after {
	transform: scale(0.9);
}

.attachment-33OFj0 a:not(.fileNameLink-9GuxCo):after,
.attachment-33OFj0 a:not(.fileNameLink-9GuxCo):hover:after,
.metadataDownload-1fk90V:after,
.metadataDownload-1fk90V:hover:after {
	transform: scale(1.3);
}

.overlay-toggle-icon:after,
.overlay-toggle-icon:hover:after {
	transform: scale(1.3332);
}

.bf-toolbar .format:after,
.bf-toolbar .format:hover:after {
	left: 3px;
	transform: scale(1.2);
}

.arrowContainer-10m4Cy:after,
.arrowContainer-10m4Cy:active:after,
.arrowHitbox-2_hxtQ:after,
.arrowHitbox-2_hxtQ:active:after,
.image-gallery .imageWrapper-2p5ogY.prev:after,
.image-gallery .imageWrapper-2p5ogY.prev:active:after,
.image-gallery .imageWrapper-2p5ogY.next:after,
.image-gallery .imageWrapper-2p5ogY.next:active:after,
#friends .friends-table .friends-row .friends-column-actions .friends-action:after,
#friends .friends-table .friends-row .friends-column-actions .friends-action:hover:after {
	top: 0;
	left: 0;
	transform: scale(1);
}

.iconSpacing-3JkGQO:after,
.iconSpacing-3JkGQO:hover:after,
.checkbox-1ix_J3:after,
.radioGroup-1GBvlr .item-26Dhrx:active .checkbox-1ix_J3:after,
.addButton-1BORro:after,
.addButton-1BORro:hover:after {
	top: 0 !important;
	transform: scale(1.8);
}

.wrapper-O5i5-0 .instantInviteModal-3vhcvC .form-actions .advanced-26tKjg:after,
.wrapper-O5i5-0 .instantInviteModal-3vhcvC .form-actions .advanced-26tKjg:active:after {
	top: 0;
	left: 0;
	transform: scale(2);
}

.iconButtonStatic-2cPMA6:after,
.iconButtonStatic-2cPMA6:active:after,
.iconButtonDefault-2cKx7-:not(.unavailable):after,
.iconButtonDefault-2cKx7-:not(.unavailable):active:after {
	top: 0;
	left: 0;
}

.channelNotices-41mJbj .channelNotice-1-XFjC .close-relY5R:after,
.channelNotices-41mJbj .channelNotice-1-XFjC .close-relY5R:hover:after {
	left: 0;
	background: rgba(255,255,255,0.2);
	transform: scale(1.75);
}

.channelNotices-41mJbj .channelNotice-1-XFjC .close-relY5R:active:after {
	background: rgba(255,255,255,0.35);
}

.operations-36ENbA .anchor-3Z-8Bb:after,
.operations-36ENbA .anchor-3Z-8Bb:hover:after {
	transform: scale(1.4);
}

.header-bZdm0X .button-38aScr:not(.lookFilled-1Gx00P):after,
.header-bZdm0X .button-38aScr:not(.lookFilled-1Gx00P):hover:after,
.headerActions-3w_xT- .button-38aScr:not(.lookFilled-1Gx00P):after,
.headerActions-3w_xT- .button-38aScr:not(.lookFilled-1Gx00P):hover:after {
	top: -1px;
	left: 4px;
}

.headerActions-3w_xT- .button-38aScr:not(.lookFilled-1Gx00P):after,
.headerActions-3w_xT- .button-38aScr:not(.lookFilled-1Gx00P):hover:after {
	left: 0;
}

.actions-2vadYq .iconButtonDefault-2cKx7-:not(.unavailable):after {
	transform: scale(1.5);
}


/*
 *
 *	TOAST
 *
 */

.toast,
.bd-toast {
	padding: 12px 16px !important;
	background: rgba(60,60,60,0.9) !important;
	box-shadow: none !important;
	border-radius: 18px !important;
	font-size: 1em !important;
	font-weight: 400 !important;
	color: #fff !important;
}


/*
 *
 *	CONTEXT/RIGHT CLICK MENU
 *
 */

.contextMenu-HLZMGh {
	padding: 8px 0 !important;
	border: none !important;
	z-index: 9999999 !important;
	box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2) !important;
	animation: opacity 100ms ease, open-context-menu 300ms var(--default-animation) !important;
	transform-origin: top !important;
}

.itemSubMenu-1vN_Yn,
.item-1Yvehc,
.item-1Yvehc.itemSubMenu-1vN_Yn,
.item-1Yvehc.itemSubMenu-1vN_Yn .item-1Yvehc {
	margin: 0 !important;
	padding: 10px 12px !important;
	border-radius: 0 !important;
	cursor: pointer !important;
}

.item-1Yvehc.itemSlider-2A_I4n,
.item-1Yvehc.itemSubMenu-1vN_Yn {
	cursor: default;
}

.item-1Yvehc.disabled-2xniQf {
	color: #555 !important;
	cursor: default !important;
}

.item-1Yvehc.brand-3igrJY,
.item-1Yvehc.brand-3igrJY:hover {
	color: #aaa !important;
}

.itemGroup-1tL0uz:last-child .item-1Yvehc:last-child {
	border: none !important;
}

.itemGroup-1tL0uz {
	padding: 8px 0;
	border-top: 1px solid #444 !important;
}

.itemGroup-1tL0uz:empty,
.item-1Yvehc:empty,
.itemSubMenu-1vN_Yn:empty {
	display: none !important;
}

.itemGroup-1tL0uz:first-child {
	padding: 0 0 8px 0 !important;
	border-top: none !important;
}

.itemGroup-1tL0uz:last-child {
	padding: 8px 0 0 0 !important;
}

.itemGroup-1tL0uz:only-child {
	padding: 0 !important;
}

.itemGroup-1tL0uz .itemGroup-1tL0uz {
	padding: 0 !important;
	border-top: none !important;
}

.item-1Yvehc.itemSubMenu-1vN_Yn {
	background: transparent url(https://discordapp.com/assets/1988164a7c55346d32117b151f4e319d.svg) no-repeat 155px 50% !important;
}

.item-1Yvehc.itemSubMenu-1vN_Yn:hover{
	background: rgba(255,255,255,0.05) url(https://discordapp.com/assets/e4afe52f6863408a35654a6e5fd69ba9.svg) no-repeat 155px 50% !important;
}

.item-1Yvehc,
.item-1GzJrl,
.itemDefault-3NDwnY,
.attachPopoutRow-elxASe div {
	color: #aaa !important;
	transition: 200ms ease all !important;
}

.attachPopoutRow-elxASe svg {
	fill: #000 !important;
}

.attachPopoutIcon-37fHgm path[d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z"] {
	d: path('M7.5,18A5.5,5.5 0 0,1 2,12.5A5.5,5.5 0 0,1 7.5,7H18A4,4 0 0,1 22,11A4,4 0 0,1 18,15H9.5A2.5,2.5 0 0,1 7,12.5A2.5,2.5 0 0,1 9.5,10H17V11.5H9.5A1,1 0 0,0 8.5,12.5A1,1 0 0,0 9.5,13.5H18A2.5,2.5 0 0,0 20.5,11A2.5,2.5 0 0,0 18,8.5H7.5A4,4 0 0,0 3.5,12.5A4,4 0 0,0 7.5,16.5H17V18H7.5Z') !important;
}

.attachPopoutIcon-37fHgm path[d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"] {
	d: path('M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z') !important;
}


/*
 *
 *	PUBLIC SERVERS
 *
 */

#pubslayerroot {
	width: 100%;
	height: 100%;
}

#pubslayerroot .platform-win .layer-kosS71 {
	width: 100%;
	height: 100%;
	top: 0;
}

#pubslayerroot .ui-standard-sidebar-view {
	top: 0;
}

#pubslayerroot .ui-standard-sidebar-view .tools {

}

#pubslayerroot .ui-standard-sidebar-view .sidebar-region .sidebar {
	width: 100% !important;
	padding: 0 !important
}

#pubslayerroot .ui-standard-sidebar-view .sidebar-region .sidebar .ui-tab-bar {
	width: 218px !important;
	margin: 0 0 0 104px !important;
	padding: 60px 0 60px 26px !important;
}

#pubslayer .ui-tab-bar-header,
#pubslayer .ui-tab-bar-item,
#pubslayer .ui-tab-bar-separator,
#pubslayer .ui-form-item {
	width: 100% !important;
}

#pubslayer .ui-tab-bar-header,
#bd-settings-sidebar .ui-tab-bar-header {
	padding: 6px 10px !important;
	font-size: 12px !important;
	line-height: 16px !important;
	font-weight: 700 !important;
	text-transform: uppercase !important;
}

#pubslayer .ui-standard-sidebar-view .content-column.default .content-column.default {
	padding: 0 !important;
}

#pubslayer .bd-server-card {
	margin: 8px 0 0 0 !important;
	padding: 16px !important;
	border: none !important;
}

#pubslayer .bd-server-card .bd-pubs-server-icon {
	border-radius: 50% !important;
}

#pubslayer .bd-server-card.bd-server-card-pinned:after {
	display: none !important
}

.ui-standard-sidebar-view .sidebar-region .scroller-wrap .scroller {
	background: var(--main-color);
}

#pubslayer input {
	padding: 4px 0;
	background: transparent;
	border: none;
	border-radius: 0;
	font-size: 1em;
}

#pubslayer button {
	padding: 0 16px !important;
}

.bd-server-image {
	border-radius: 4px;
}

.bd-server-header {
	margin: 0 0 8px 0 !important;
}

.bd-server-card button {
	padding: 8px 12px !important;
}

.bd-server-card button.lookFilled-luDKDo {
	background: rgba(255,255,255,0.05) !important;
	box-shadow: none !important;
	color: #aaa !important;
}

.bd-server-description-container {
	min-height: 52px;
	background: transparent !important;
	border: none !important;
}

.bd-server-footer {
	margin: 0 0 -8px 0 !important;
}


/*
 *
 *	GAME CENTER
 *
 */

.activityFeed-28jde9 {
	position: relative;
	padding: 0;
	background: var(--chat-color) !important;
}

/* GAME CENTER -> CAROUSEL */

.carousel-JbsNzL {
	height: 364px;
}

.article-3kb3qm {
	background: var(--card-games) !important;
}

.background-1ri_HN {
	-webkit-mask: linear-gradient(to top, transparent 10%, #000 70%);
}

.gameArea-Lbc4xZ {

}

@media(max-height: 680px) {
	.gameName-2XIejT {
		position: relative;
		top: 36px;
	}

	.simpleTitle-1om7yj {
		top: 32px;
	}
}

/* GAME CENTER -> CAROUSEL -> PAGINATION */

.pagination-1kSokq {
	height: 364px;
}

.paginationItem-3-MBTL {
	margin: 0;
	border-radius: 0;
}

.paginationItem-3-MBTL:before {
	width: 3px;
	height: 80%;
	left: 0;
	border-radius: 0 var(--border-radius-bar) var(--border-radius-bar) 0 !important;
}

.paginationItem-3-MBTL:after {
	background: linear-gradient(270deg,transparent 0, var(--main-color));
}

.paginationItem-3-MBTL.selectedPage-2JQS2s:after {
	background: transparent !important;
}

.paginationItem-3-MBTL .paginationTitle-1XtEga {
	color: #777;
}

.paginationItem-3-MBTL .paginationGameName-3Fd-qy {
	color: #444;
}

.paginationItem-3-MBTL.selectedPage-2JQS2s .paginationTitle-1XtEga {
	color: #fff;
}

.paginationItem-3-MBTL.selectedPage-2JQS2s .paginationGameName-3Fd-qy {
	color: #999;
}

.splashArt-1anaP9,
.coverArtPosition-1EkmxA,
.paginationItem-3-MBTL:after {
	border-radius: 0 !important;
}

.dot-22bIa4,
.dot-2Q_mMZ {
	border-radius: 50%;
}

.dot-22bIa4:last-child {
	margin: 0;
}

.dotNormal-3_wb_A,
.dotNormal-9wUKKy {
	opacity: 0.15;
}

.dotSelected-Prpk_a,
.dotSelected-3RYKgX {
	opacity: 0.75;
}

.pagination-2t8HBX {
	width: 100%;
	height: 100%;
	pointer-events: none;
}

.horizontalPaginationItemContainer-26FwrR {
	position: relative;
	max-width: 56px;
	height: 32px;
	top: calc(100% - 32px);
	pointer-events: auto;
	text-align: center;
}

.arrowContainer-10m4Cy {
	width: 48px;
	height: 48px;
	background: var(--popout-alt);
	border-radius: 50%;
	transition: 200ms var(--default-animation);
}

.arrow-2ZP1wS {
	width: 48px;
	height: 48px;
	padding: 12px;
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgIDxwYXRoIGZpbGw9IiNjY2NjY2MiIGQ9Ik0xNS40MSwxNi41OEwxMC44MywxMkwxNS40MSw3LjQxTDE0LDZMOCwxMkwxNCwxOEwxNS40MSwxNi41OFoiIC8+Cjwvc3ZnPg==);
	background-size: 65%;
	background-repeat: no-repeat;
	background-position: 50%;
}

.arrow-2ZP1wS polygon {
	display: none;
}

.prevButtonContainer-Rc83MJ .arrow-2ZP1wS {
	transform: rotate(0deg) translateX(-2px);
}

.nextButtonContainer-30eXDb .arrow-2ZP1wS {
	transform: rotate(180deg) translateX(-2px);
}

/* GAME CENTER -> POPOUT CAROUSEL */

.carousel-1j_QfQ {
	height: 270px;
	margin: 0;
}

.carousel-1j_QfQ .news-1uHrMX,
.carousel-1j_QfQ .gamePreviewTrailer-3ZmZKP,
.carousel-1j_QfQ .embedVideoActions-O6vR7W,
.gamePreview-9weYR2 .news-1uHrMX {
	margin: 0;
	border-radius: 0 var(--border-radius-big) 0 0 !important;
}

.gamePreview-9weYR2 .sizeLarge-1vSeWK {
	width: 80px !important;
	transform: translateX(calc(50% + 10px));
}

.body-1SVoBw {
	min-height: 270px;
	background: var(--popout-alt) !important;
}

.playersSections-1EnWZ8 {
	margin: 0;
}

.playersHeader-3xUYAQ {
	margin: 16px 0;
	padding: 0 0 0 16px;
}

.playersHeaderLine-2luL7r {
	background-color: #444 !important;
}

.container-1qJFPO {
	padding: 0 16px 16px 16px;
}

/* GAME CENTER -> POPOUT CAROUSEL -> PAGINATION */

.carouselPagination-30iWH5 {
	position: relative;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
}

.arrowHitbox-2_hxtQ {
	position: relative;
	width: 36px;
	height: 36px;
	margin: 0 16px;
	border-radius: 50%;
	background: #35383d;
	transition: 200ms ease all;
}

.arrow-vOpU7R {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjY2NjY2NjIiBkPSJNOC41OSwxNi41OEwxMy4xNywxMkw4LjU5LDcuNDFMMTAsNkwxNiwxMkwxMCwxOEw4LjU5LDE2LjU4WiIgLz4NCjwvc3ZnPg==);
	opacity: 1 !important;
	transform: rotate(360deg) translate(1px, 1px);
}

.arrow-vOpU7R.left-1sNJYj {
	transform: rotate(360deg) translate(-1px, 1px);
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjY2NjY2NjIiBkPSJNMTUuNDEsMTYuNThMMTAuODMsMTJMMTUuNDEsNy40MUwxNCw2TDgsMTJMMTQsMThMMTUuNDEsMTYuNThaIiAvPg0KPC9zdmc+);
	background-position: 50%;
}

.arrow-vOpU7R polygon {
	display: none !important;
	fill: #ccc !important;
}

.dots-3VxbPX {
	position: relative;
	bottom: calc(-50% + 16px);
}

/* GAME CENTER -> QUICK LAUNCHER */

.dock-10JPBX {
	padding: 8px;
	overflow-x: auto;
}

.dock-10JPBX::-webkit-scrollbar {
	height: 6px !important;
}

.dockItem-2kQDqg {
	position: relative;
	height: 90px;
	margin: 0 4px;
	padding: 8px;
	transition: 200ms ease all;
}

.dockItem-2kQDqg:hover {
	background-color: rgba(255,255,255,0.05) !important;
}

.dockItem-2kQDqg:first-child {
	margin: 0 4px 0 0;
}

.dockItem-2kQDqg:last-child {
	margin: 0 0 0 4px;
}

.dockItemText-3qYREY,
.dockItemPlay-3TGCWr {
	transition: 200ms ease all !important;
}

.dockItemText-3qYREY {
	position: absolute;
	display: block;
	bottom: 4px;
	opacity: 1;
}

.dockItem-2kQDqg:hover .dockItemText-3qYREY {
	display: block;
	opacity: 0;
}

.dockItemPlay-3TGCWr {
	position: absolute;
	display: flex;
	width: 85%;
	bottom: 8px;
	opacity: 0;
}

.dockItem-2kQDqg:hover .dockItemPlay-3TGCWr {
	opacity: 1;
}

/* GAME CENTER -> CARDS */

.dock-10JPBX,
.card-7JP0BX,
.emptyState-2-sT0o {
	background: var(--card-games) !important;
	border: none !important;
}

.header-1RC2Wb {
	background-color: var(--main-color) !important;
}

.splashArt-3yFzRe {
	filter: grayscale(0) !important;
}

.body-SKIE6r {
	background: transparent !important;
}

.headerActions-2l3Hou,
.headerActions-3w_xT- {
	display: flex;
	opacity: 0;
	transition: 200ms ease all !important;
}

.cardHeader-ey0m8X:hover .headerActions-2l3Hou,
.cardHeader-3nTWsD:hover .headerActions-3w_xT- {
	opacity: 1;
}

.cardBody-3_HhbX,
.cardBody-3kgGGF {
	padding: 0;
}

.player-1kJMbj {
	border-bottom-color: #444 !important;
}

.player-1kJMbj,
.player-1kJMbj+.player-1kJMbj,
.game-O3OBNh {
	padding: 16px;
}

.game-O3OBNh {
	position: relative;
}

.section-2UZnnA .sectionTitle-1snBOS {
	padding: 8px 0 8px 16px;
}

.sectionLine-JjseS9 {
	background-color: #444 !important;
}

.overflownPlayers-3YVOuE {
	margin: 8px 0 0 0;
}

.news-1uHrMX {
	margin: 8px 16px 0 16px;
}

.headerText-2niCs_ {
	border-top-color: #444 !important;
}

.playerBottomPadding-3mLPAq {
	padding: 0 0 8px 0;
}

.voiceChannel-3uy4i9 {
	padding: 16px;
}

.header-bZdm0X .button-38aScr:not(.lookFilled-1Gx00P),
.headerActions-3w_xT- .button-38aScr:not(.lookFilled-1Gx00P) {
	width: 28px;
	height: 28px;
	top: 2px;
	margin: 0 0 0 8px;
	box-shadow: none !important;
}

.header-bZdm0X .status-oxiHuE,
.card-7JP0BX .status-oxiHuE {
	width: 12px;
	height: 12px;
}

/* GAME CENTER -> ACTIVITY */

/* Removed until Twitch streaming activity is fixed */

/*.game-O3OBNh .richActivity-20JO62.marginTop20-3TxNs6 {
	margin: 0;
}

.game-O3OBNh .activity-12-S1I {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	pointer-events: none;
}

.game-O3OBNh .assets-VMAukC {
	position: absolute;
	top: 16px;
	right: 16px;
	pointer-events: auto;
	transition: 200ms ease all;
}

.game-O3OBNh:hover .assets-VMAukC {
	right: 16px;
}

.game-O3OBNh .assetsLargeImageActivityFeed-25vA7H {
	width: 40px;
	height: 40px;
	border-radius: 50%;
}

.game-O3OBNh .contentImagesActivityFeed-2f9veg {
	margin: 12px 36px 0 0;
	text-align: right;
	opacity: 0;
	transition: 200ms ease all;
}

.game-O3OBNh:hover .contentImagesActivityFeed-2f9veg {
	margin: 12px 68px 0 0;
	opacity: 1;
}

.game-O3OBNh .contentImagesActivityFeed-2f9veg .textRow-19NEd_ {
	margin: 0;
}*/


/*
 *
 *	LIBRARY
 *
 */

.gameLibrary-TTDw4Y {
	background: var(--chat-color) !important;
}

.header-39GIC8 {
	margin: 0 0 8px 0;
	padding: 8px 30px;
	background: #2a2c30 !important;
	border-bottom: none;
}

.headerCell-3L6rFG {
	border: none;
}

.headerCellContent-1pLtOr {
	font-weight: 500;
}

/* LIBRARY -> CARDS */

.rowWrapper-2fB6P0 {
	display: inline-block;
	height: 180px;
	margin: 8px;
	background: var(--card-games) !important;
}

.rowWrapperActive-2L7i9f {
	padding: 0;
}

@media(min-width: 940px) and (max-width: 959px) {
	.rowWrapper-2fB6P0 {
		width: calc(100% - 16px);
	}
}

@media(min-width: 960px) and (max-width: 1199px) {
	.rowWrapper-2fB6P0 {
		width: calc(50% - 16px);
	}
}

@media(min-width: 1200px) and (max-width: 1659px) {
	.rowWrapper-2fB6P0 {
		width: calc(33.33% - 16px);
	}
}

@media(min-width: 1680px) and (max-width: 1919px) {
	.rowWrapper-2fB6P0 {
		width: calc(25% - 16px);
	}
}

@media(min-width: 1920px) and (max-width: 2559px) {
	.rowWrapper-2fB6P0 {
		width: calc(20% - 16px);
	}
}

@media(min-width: 2560px) and (max-width: 3839px) {
	.rowWrapper-2fB6P0 {
		width: calc(16.6666% - 16px);
	}
}

@media(min-width: 3840px) {
	.rowWrapper-2fB6P0 {
		width: calc(14.2857% - 16px);
	}
}

.row-ZLfFhY {
	position: relative;
	height: 100%;
}

.rowWrapper-2fB6P0 + .rowWrapper-2fB6P0 .row-ZLfFhY {
	border: none;
}

.bodyCell-9xKjWE {
	position: absolute;
	/*width: 100%;
	height: 100%;*/
	width: 0;
	height: 0;
	padding: 0;
	pointer-events: none;
	cursor: auto;
}

.rowBackground-3MeNoN {
	width: 100%;
	background-color: transparent !important;
	-webkit-mask: radial-gradient(100% 100% at top left,var(--card-games) 0,transparent 100%);
	filter: grayscale(0);
	opacity: 1;
	animation: show-background 500ms var(--default-animation);
	transition: all 500ms ease;
}

@keyframes show-background {
	from {
		opacity: 0;
		transition: 500ms ease all;
	}
}

/* LIBRARY -> CARDS -> GAME */

.bodyCell-9xKjWE.nameBodyCell-3JOlnK {
	width: 100%;
	height: 100%;
	padding: 8px;
	pointer-events: none;
}

.bodyCell-9xKjWE.nameBodyCell-3JOlnK .gameIcon-gg34Dz {
	position: absolute;
	width: 42px;
	height: 42px;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
}

.bodyCell-9xKjWE.nameBodyCell-3JOlnK .nameCellInfo-11WjkQ {
	position: absolute;
	width: 80%;
	min-height: 20px;
	top: 120px;
	left: 0;
	right: 0;
	padding: 0;
	margin: 0 auto;
	text-align: center;
	overflow: hidden;
}

.bodyCell-9xKjWE.nameBodyCell-3JOlnK .nameCellText-1mpqtF {
	text-align: center;
}

/* LIBRARY -> CARDS -> LAST PLAYED */

.bodyCell-9xKjWE.lastPlayedCell-2arbtc {
	width: 100%;
	height: 20px;
	top: 42px;
	pointer-events: none;
	font-size: 14px;
	color: #999;
	opacity: 1;
	transition: 250ms ease all;
}

.bodyCell-9xKjWE.lastPlayedCell-2arbtc .flex-1xMQg5 {
	justify-content: center;
}

.rowWrapper-2fB6P0:hover .bodyCell-9xKjWE.lastPlayedCell-2arbtc {
	color: #eee;
	text-shadow: 0 0 3px rgba(0,0,0,1);
}

/* LIBRARY -> CARDS -> PLATFORM */

.bodyCell-9xKjWE.platformCell-XyBBs6 {
	width: 100%;
	height: auto;
	top: 24px;
	color: #999;
	opacity: 1;
	transition: 250ms ease all;
}

.bodyCell-9xKjWE.platformCell-XyBBs6 .flex-1xMQg5 {
	justify-content: center;
}

.rowWrapper-2fB6P0:hover .bodyCell-9xKjWE.platformCell-XyBBs6 {
	color: #eee;
	text-shadow: 0 0 3px rgba(0,0,0,1);
}

/* LIBRARY -> CARDS -> ACTIONS */

.bodyCell-9xKjWE.actionsCell-1awtNi {
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 2;
	pointer-events: all;
}

.bodyCell-9xKjWE.actionsCell-1awtNi .settingIcons-3QYa5E {
	position: absolute;
	width: 24px;
	min-width: 24px;
	height: 24px;
	top: -1px;
	left: 0;
	margin: 0;
}

.bodyCell-9xKjWE.actionsCell-1awtNi .actionIcon-2EtGTr {
	position: absolute;
	right: 0;
	top: 8px;
	margin: 0;
	opacity: 0;
}

.bodyCell-9xKjWE.actionsCell-1awtNi .lookFilled-1Gx00P {
	position: relative;
	left: 0;
	right: 0;
	bottom: -66px;
	margin: 0 auto;
	opacity: 0;
}

.rowWrapper-2fB6P0:hover .actionIcon-2EtGTr,
.rowWrapper-2fB6P0:hover .bodyCell-9xKjWE.actionsCell-1awtNi .lookFilled-1Gx00P {
	opacity: 1;
}


/*
 *
 *	FRIENDS
 *
 */

#friends .friends-table {
	margin: 0 !important;
}

#friends .friends-table .friends-table-header {
	background: #2a2c30 !important;
	border: none !important;
}

#friends .friends-table .friends-table-header .friends-column-name {
	width: 210px !important;
}

#friends .friends-table .friends-table-header .friends-column-separator {
	opacity: 0;
}

#friends .friends-table .friends-row {
	position: relative;
	margin: 0;
	border-radius: 0 !important;
	overflow: visible;
}

#friends .friends-table .friends-row:hover {
	margin: 0 !important;
	padding: 16px 0px 16px 0 !important;
	background: transparent !important;
}

#friends .friends-table .friends-row:hover,
#friends .friends-table .friends-row:hover + .friends-row {
	border-color: #36383a !important;
}

#friends .friends-table .friends-row .friends-column-name {
	width: 220px !important;
	margin: 0 0 0 16px !important;
	overflow: visible;
	transition: 200ms ease all;
}

#friends .friends-table .friends-row .friends-column-actions {
	transition: 200ms ease all;
	opacity: 0;
}

#friends .friends-table .friends-row .friends-column-actions {
	transform: translateX(48px);
	opacity: 0;
}

#friends .friends-table .friends-row:hover .friends-column-actions {
	transform: translateX(0);
	opacity: 1;
}

#friends .friends-table .friends-row:hover .friends-column-actions {
	padding: 0 !important;
}

#friends .friends-table .friends-row .friends-column-name .avatar-small {
	width: 40px !important;
	height: 40px !important;
	background-size: 40px 40px !important;
}

#friends .friends-table .friends-row .friends-column-name .avatar-small:after {
	content: " ";
	position: absolute;
	width: 76px;
	height: 2px;
	left: -26px;
	bottom: -12px;
	background: var(--popout-color);
	z-index: 2;
}

#friends .friends-table .friends-row .friends-column-status .status {
	position: absolute !important;
	width: 12px !important;
	height: 12px !important;
	top: 11px !important;
	left: 46px !important;
}

#friends .friends-table .friends-row .friends-column-status .status-text {
	margin: 0 0 0 4px;
}

#friends .friends-table .friends-row .friends-column-actions {
	margin: 0 8px 0 0;
	padding: 0;
}

#friends .friends-table .friends-row .friends-column-actions .friends-action {
	position: relative;
	margin: 0 !important;
	background-color: transparent !important;
	border-radius: 50%;
}

#friends .friends-table .friends-row .friends-column-actions .friends-action+div {
	margin: 0 0 0 4px !important;
}

#friends .friends-table .friends-row .friends-column-actions .friends-action.friends-action-video-call {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE3LDEwLjVWN0ExLDEgMCAwLDAgMTYsNkg0QTEsMSAwIDAsMCAzLDdWMTdBMSwxIDAgMCwwIDQsMThIMTZBMSwxIDAgMCwwIDE3LDE3VjEzLjVMMjEsMTcuNVY2LjVMMTcsMTAuNVoiIC8+PC9zdmc+) !important;
}

#friends .friends-table .friends-row .friends-column-actions .friends-action.friends-action-voice-call {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuNjIsMTAuNzlDOC4wNiwxMy42MiAxMC4zOCwxNS45NCAxMy4yMSwxNy4zOEwxNS40MSwxNS4xOEMxNS42OSwxNC45IDE2LjA4LDE0LjgyIDE2LjQzLDE0LjkzQzE3LjU1LDE1LjMgMTguNzUsMTUuNSAyMCwxNS41QTEsMSAwIDAsMSAyMSwxNi41VjIwQTEsMSAwIDAsMSAyMCwyMUExNywxNyAwIDAsMSAzLDRBMSwxIDAgMCwxIDQsM0g3LjVBMSwxIDAgMCwxIDguNSw0QzguNSw1LjI1IDguNyw2LjQ1IDkuMDcsNy41N0M5LjE4LDcuOTIgOS4xLDguMzEgOC44Miw4LjU5TDYuNjIsMTAuNzlaIiAvPjwvc3ZnPg==) !important;
}

#friends .friends-table .friends-row .friends-column-actions .friends-action.friends-action-remove {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE5LDRIMTUuNUwxNC41LDNIOS41TDguNSw0SDVWNkgxOU02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlaIiAvPjwvc3ZnPg==) !important;
}

#friends .tab-bar {
	height: 48px;
}

#friends .tab-bar .tab-bar-item,
#friends .tab-bar .tab-bar-item.tab-bar-item-primary,
#friends .tab-bar .tab-bar-item.tab-bar-item-primary:hover,
#friends .tab-bar .tab-bar-item.tab-bar-item-primary.selected {
	background: transparent !important;
}

#friends .tab-bar .tab-bar-item {
	line-height: 42px;
	background: transparent !important;
	border-radius: 0 !important;
	border-bottom: 2px solid transparent !important;
}

#friends .tab-bar .tab-bar-item.tab-bar-item-primary {
	background: transparent !important;
	color: hsla(0,0%,100%,.6) !important;
}

#friends .tab-bar .tab-bar-item:hover {
	/*border-bottom: 2px solid #555 !important;*/
}

/* FRIENDS -> FRIENDS LIST */

.privateChannels-1nO12o .channel-2QD9_O:first-child {
	margin: 16px 0 0 0;
}

.privateChannels-1nO12o .channel-2QD9_O:last-child {
	margin: 0 0 16px 0;
}

.privateChannels-1nO12o .channel-2QD9_O a,
.privateChannels-1nO12o .channel-2QD9_O.selected a {
	height: 42px;
	margin: 0 !important;
	padding: 0 16px;
	border-radius: 0 21px 21px 0;
}

.linkButtonIcon-Mlm5d6 {
	opacity: 0.25;
}

.linkButtonIcon-Mlm5d6 path[fill="currentColor"] {
	fill: #fff !important;
}

.privateChannels-1nO12o .channel-2QD9_O,
.privateChannels-1nO12o .channel-2QD9_O a,
.content-20Aix8 {
	transition: 200ms ease all;
}

.content-20Aix8:hover,
.privateChannels-1nO12o .channel-2QD9_O:hover a {
	background: rgba(255,255,255,0.125);
}

.content-20Aix8:active,
.privateChannels-1nO12o .channel-2QD9_O:active a {
	background: rgba(255,255,255,0.175);
}

.content-20Aix8.contentSelectedText-3wUhMi,
.privateChannels-1nO12o .channel-2QD9_O.selected a {
	background: #26292e;
}

.privateChannels-1nO12o .channel-2QD9_O .status,
.privateChannels-1nO12o .channel-2QD9_O:hover .status,
.privateChannels-1nO12o .channel-2QD9_O.selected .status,
.channel-members .avatar-small .status {
	top: 0;
	border: none;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.privateChannels-1nO12o .channel-2QD9_O:hover .close {
	position: relative;
}

/* FRIENDS -> FRIENDS POPOUT */

.themed-popout .header .search-bar .search-bar-inner,
.themed-popout .header .search-bar input {
	background: var(--popout-alt) !important;
	border: 1px solid var(--popout-alt) !important;
}

.themed-popout .header .search-bar input {
	padding: 4px 0 !important;
	border: none !important;
	border-bottom: 2px solid #666 !important;
	font-size: 0.9em !important;
}

.private-channel-recipients-invite .friend.selected,
.private-channel-recipients-invite .friend:hover {
	background: rgba(255,255,255,0.2) !important;
}

.themed-popout .footer,
.private-channel-recipients-invite .body {

}

/* FRIENDS -> SEARCH */

.privateChannels-1nO12o .scroller-2FKFPG {
	margin: 0;
	padding: 8px 8px 8px 0 !important;
}

.privateChannels-1nO12o .search-bar {
	width: 100% !important;
	height: 100% !important;
	padding: 0 !important;
	background: transparent !important;
	border-radius: 0 !important;
	pointer-events: none;
}

.privateChannels-1nO12o .search-bar .search-bar-inner {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	padding: 0;
	background: transparent;
	border: none;
	z-index: 3;
}

.privateChannels-1nO12o .search-bar .search-bar-inner:before {
	content: " ";
	position: relative;
	width: 240px;
	height: 48px;
	background: var(--main-color);
	box-shadow: 0 1px 1px #101113;
}

.privateChannels-1nO12o .search-bar .search-bar-inner:after {
	content: "Home";
	position: absolute;
	top: 16px;
	left: 16px;
	font-size: 1em;
	font-weight: 700;
	color: #fff;
}

.privateChannels-1nO12o .search-bar .search-bar-inner input {
	position: absolute;
	width: 56px;
	height: 56px !important;
	right: 8px;
	bottom: 8px;
	background-image: url('https://discordapp.com/assets/4d254296157bb8927b7d53ed59beb0d8.svg');
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 40%;
	pointer-events: initial;
	cursor: pointer;
	border: none !important;
}

.privateChannels-1nO12o .search-bar .search-bar-inner input::-webkit-input-placeholder {
	font-size: 0;
}

.quickswitcher-3JagVE {
	padding: 0;
}

.quickswitcher-3JagVE .input-2VB9rf {
	height: 40px;
	margin: 8px 16px 0px 16px;
	padding: 0;
	line-height: 40px;
	border-radius: 0;
	background: transparent !important;
	box-shadow: none !important;
	border-bottom: 2px solid #666;
}

.scrollerOuter-3FLELE {
	margin: 0 16px;
}

.resultFocused-3aIoYe {
	background-color: rgba(255,255,255,0.075) !important;
}

.tipsWithResults-HhTE9b,
.tipsWithoutResults-lGY-De {
	padding: 8px;
	border-color: #444 !important;
}

.keybindShortcut-1BD6Z1 span {
	line-height: 18px;
	border: none !important;
	box-shadow: none !important;
	cursor: pointer;
}

.keybindShortcut-1BD6Z1 span:active {
	height: 23px;
	border: none;
	box-shadow: none;
	transform: translateY(0);
}

.keybindShortcutTipsSelect-HDyfe8:last-of-type:before {
	display: none;
}

/* FRIENDS -> ADD FRIEND */

#friends .friends-table .friend-table-add-wrapper .friend-table-add-header {
	background: #29292e !important;
	border-bottom: none !important;
}

.wrapper-1cBijl {
	position: relative !important;
	margin: 8px 0 0 0;
	padding: 0 !important;
	background: #29292e !important;
	border-radius: 0 !important;
	border: none !important;
}

.wrapper-1cBijl .addFriendInput-4bcerK {
	margin: 0 !important;
	padding: 4px 0 4px 30px !important;
}

.addFriendHint-3Y70FX {
	top: 0 !important;
	left: 30px !important;
}

.wrapper-1cBijl .lookFilled-1Gx00P {
	position: absolute;
	width: 0 !important;
	min-width: 0 !important;
	max-width: 0 !important;
	left: 0;
	padding: 0;
	background: transparent !important;
	box-shadow: none !important;
	z-index: 2;
	font-size: 0;
	pointer-events: none;
}

.wrapper-1cBijl .lookFilled-1Gx00P:after {
	content: " ";
	position: absolute;
	width: 24px !important;
	height: 24px !important;
	top: 4px;
	left: 0;
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTkuNSwzQTYuNSw2LjUgMCAwLDEgMTYsOS41QzE2LDExLjExIDE1LjQxLDEyLjU5IDE0LjQ0LDEzLjczTDE0LjcxLDE0SDE1LjVMMjAuNSwxOUwxOSwyMC41TDE0LDE1LjVWMTQuNzFMMTMuNzMsMTQuNDRDMTIuNTksMTUuNDEgMTEuMTEsMTYgOS41LDE2QTYuNSw2LjUgMCAwLDEgMyw5LjVBNi41LDYuNSAwIDAsMSA5LjUsM005LjUsNUM3LDUgNSw3IDUsOS41QzUsMTIgNywxNCA5LjUsMTRDMTIsMTQgMTQsMTIgMTQsOS41QzE0LDcgMTIsNSA5LjUsNVoiIC8+PC9zdmc+);
	background-repeat: no-repeat;
	background-size: 80%;
	background-position: 50%;
	border-radius: 50%;
	cursor: pointer;
	pointer-events: auto;
}

.wrapper-1cBijl .lookFilled-1Gx00P[disabled]:after {
	box-shadow: none !important;
	opacity: 0.4;
	cursor: auto;
	pointer-events: none;
}

#friends .friends-table .friend-table-add-wrapper .friend-table-add-header .friends-table-add,
#friends .friends-table .friend-table-add-wrapper .friend-table-suggestions-header {
	padding: 16px;
}

/*#friends .friends-table .friend-table-add-wrapper .friend-table-add-header .friends-table-add .lookFilled-1Gx00P {
	min-width: 36px !important;
	height: 36px !important;
	border-radius: 50% !important;
}*/

/* FRIENDS -> BLOCK USER */

.wrapper-39oAo3 button {

}

/* FRIENDS -> MESSAGES */

/* FRIENDS -> MESSAGES -> SELECT FRIENDS */

.modal-3HD5ck .search-bar {
	background: transparent !important;
}

.modal-3HD5ck .search-bar .search-bar-inner {
	padding: 2px 0 !important;
}

.searchBarTag-2xRzm8 {
	height: 32px;
	padding: 0 12px;
	line-height: 32px;
	border-radius: 16px;
}

.searchBarTag-2xRzm8 .close-3WVtCL {
	width: 24px;
	height: 24px;
	margin: 0 -6px 0 8px;
	background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTIsMkMxNy41MywyIDIyLDYuNDcgMjIsMTJDMjIsMTcuNTMgMTcuNTMsMjIgMTIsMjJDNi40NywyMiAyLDE3LjUzIDIsMTJDMiw2LjQ3IDYuNDcsMiAxMiwyTTE1LjU5LDdMMTIsMTAuNTlMOC40MSw3TDcsOC40MUwxMC41OSwxMkw3LDE1LjU5TDguNDEsMTdMMTIsMTMuNDFMMTUuNTksMTdMMTcsMTUuNTlMMTMuNDEsMTJMMTcsOC40MUwxNS41OSw3WiIgLz4NCjwvc3ZnPg==);
	border-radius: 50%;
	opacity: 0.4;
	transition: 250ms ease all;
}

.searchBarTag-2xRzm8:hover .close-3WVtCL,
.search-bar-tag:hover .close {
	opacity: 0.8;
}

.footerSeparator-Zin1Mp {
	margin: 0;
	background: #444;
	box-shadow: none !important;
}


/*
 *
 *	USER SETTINGS
 *
 */

.side-8zPYf6 .item-PXvHYJ {
	border-radius: var(--border-radius);
	/*border-radius: 0 16px 16px 0;*/
}

.side-8zPYf6 .item-PXvHYJ[style*="color: rgb(114, 137, 218);"] {
	color: #b9bbbe !important;
}

.side-8zPYf6 .itemSelected-1qLhcL[style*="color: rgb(255, 255, 255); background-color: rgb(114, 137, 218);"] {
	color: #fff !important;
}

.side-8zPYf6 .item-PXvHYJ[style*="color: rgb(114, 137, 218);"]:hover {
	background: var(--hover-color) !important;
}

.side-8zPYf6 .item-PXvHYJ[style*="color: rgb(255, 255, 255); background-color: rgb(114, 137, 218);"]:hover {
	background: var(--accent-color) !important;
}

/* 	USER SETTINGS -> MY ACCOUNT */

.userSettingsAccount-2eMFVR .userInfoEditing-1CEzdT {
	padding: 0;
}

.userSettingsAccount-2eMFVR .userInfoViewing-16kqK3,
.userSettingsAccount-2eMFVR .userInfoEditing-1CEzdT .justifyStart-2NDFzi:first-child {
	padding: 16px;
}

.userSettingsAccount-2eMFVR .userInfoEditing-1CEzdT .divider-3573oO {
	margin: 0;
}

.userSettingsAccount-2eMFVR .userInfoEditing-1CEzdT .justifyEnd-2E6vba {
	padding: 8px;
}

.multiInputLast-1aQ3YA:before {
	height: 22px;
	margin: 5px 0 0 0;
	border-width: 2px;
	border-right-color: #444 !important;
	opacity: 1 !important;
}

.inputPrefix-2VAOGg {
	height: 29px;
	padding: 6px 0 0 20px;
}

.input-cIJ7To.disabled-2BKQFm {
	border-color: #666 !important;
}

.input-cIJ7To.disabled-2BKQFm[name="discriminator"] {
	padding: 6px 0 2px 32px !important;
}

.input-cIJ7To.multiInput-1e2xJ7 {
	border: none !important;
}

.questionMark-CWEQZn {
	position: relative;
	width: 24px;
	height: 24px;
	top: -2px !important;
	right: -2px !important;
}

/* USER SETTINGS -> MY ACCOUNT -> SMS AUTHENTICATION */

.phoneField-36t5MB {
	background: transparent !important;
	border-radius: 0 !important;
	box-shadow: none !important
}

.phoneField-36t5MB .countryButton-wNQiPa {
	margin: 0 4px 0 0 !important;
	padding: 0 !important;
	background: transparent !important;
}

.phoneField-36t5MB .countryCode-1zgH0u {
	color: #aaa !important;
}

.phoneField-36t5MB .countryCodeContainer-3Xjnrz {
	margin: 0 !important;
}

.phoneField-36t5MB .inputField-3os-YM {
	margin: 0 8px 0 0 !important;
	padding: 0 !important;
	background: transparent !important;
	border-bottom: 2px solid #444 !important;
	color: #aaa !important;
	transition: 200ms ease all !important;
}

.phoneField-36t5MB .smallGrow-2_7ZaC {
	min-width: 32px !important;
	min-height: 32px !important;
	border-radius: 50% !important;
}

.phoneField-36t5MB .sendButton-35vEUT:after {
	content: " ";
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiAgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yLDIxTDIzLDEyTDIsM1YxMEwxNywxMkwyLDE0VjIxWiIgLz48L3N2Zz4=);
	background-repeat: no-repeat;
	background-position: center;
}

.phoneField-36t5MB .sendButton-35vEUT .contentsFilled-3M8HCx {
	display: none !important;
}

.selectableItem-3PW5_y {
	background: transparent !important;
}

.phoneFieldPopout-ix8zib .phoneFieldScroller-Ze3whx {
	background: var(--popout-alt) !important;
}

.selectableItem-3PW5_y:hover {
	background: rgba(255,255,255,0.1) !important;
}

.input-3_iTLI {
	background: var(--main-color) !important;
	color: #aaa !important;
}

/* USER SETTINGS -> AUTHORIZED APPS */

.cardPrimaryOutline-29Ujqw.authedApp-mj2Hmd {
	padding: 0 !important;
}

.cardPrimaryOutline-29Ujqw.authedApp-mj2Hmd .marginBottom20-32qID7 {
	margin: 0 !important;
	padding: 16px !important;
	border-bottom: 1px solid #444;
}

.cardPrimaryOutline-29Ujqw.authedApp-mj2Hmd .marginTop20-3TxNs6 {
	margin: 0 !important;
	padding: 16px !important;
}

.cardPrimaryOutline-29Ujqw.authedApp-mj2Hmd div:not([class]) {
	padding: 16px 16px 0px 16px !important;
}

/* USER SETTINGS -> CONNECTIONS */

.accountBtn-2Nozo3 {
	margin: 0 4px 0 0;
	padding: 2px 0;
}

.accountBtn-2Nozo3:first-child {
	margin: 0 4px 0 8px;
}

.accountBtn-2Nozo3 button {
	box-shadow: none !important;
}

.accountBtnInner-sj5jLs {
	background-color: transparent !important;
}

.accountBtnInner-sj5jLs:hover {
	background-color: rgba(255,255,255,0.05) !important;
}

.accountBtnInner-sj5jLs:active {
	background-color: rgba(255,255,255,0.075) !important;
}

.connection-1fbD7X {
	border: none !important;
}

.connectionHeader-2MDqhu {
	padding: 16px;
	border: none;
}

.connectionHeader-2MDqhu.marginBottom20-32qID7 {
	margin: 0 !important;
}

.connectionOptionsWrapper-3KIj1Z {
	padding: 16px;
}

.connectionOptionSwitch-3KNn-E.marginBottom20-32qID7:last-child {
	margin: 0 !important;
}

.connectionDelete-2Odoln {
	top: 16px;
	right: 16px;
	border-radius: 50% !important;
	border: none;
}

.connectionDelete-2Odoln:before {
	content: " ";
	position: absolute;
	width: 24px;
	height: 24px;
	top: 4px;
	left: 4px;
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE5LDYuNDFMMTcuNTksNUwxMiwxMC41OUw2LjQxLDVMNSw2LjQxTDEwLjU5LDEyTDUsMTcuNTlMNi40MSwxOUwxMiwxMy40MUwxNy41OSwxOUwxOSwxNy41OUwxMy40MSwxMkwxOSw2LjQxWiIgLz48L3N2Zz4=) !important;
	background-color: transparent;
	transform: rotate(0deg);
}

.connectionDelete-2Odoln:after {
	width: 32px;
	height: 32px;
	top: 0;
	left: 0;
	background-color: transparent;
	background: rgba(255,255,255,0.1);
	border-radius: 50%;
	transform: rotate(0deg);
}

.integration-3kMeY4 {
	background: rgba(0,0,0,0.15) !important;
	border: none !important;
}

/* USER SETTINGS -> AUTHORIZED APPS */

.card-3DrRmC,
.card-3Qj_Yx,
.authedApp-mj2Hmd,
.formNotice-2tZsrh {
	background: var(--card-color);
}

/* USER SETTINGS -> BILLING */

.divider-3WKGWk {
	display: none !important;
}

.measurement-36xDqs div:not([class]) {
	margin: 0 0 24px 0;
}

.cardIconSmall-2gJ6xX {
	left: 0;
}

.measurement-36xDqs .cardIconSmall-2gJ6xX + .inputWrapper-31_8H8 .input-cIJ7To {
	padding: 0 0 0 42px !important;
}

/* USER SETTINGS -> BILLING -> PAYMENT METHODS -> EDIT */

.defaultIndicator-G3c16x {
	position: relative;
	height: auto;
	top: -2px;
	padding: 4px 8px !important;
}

.addressSection-3LwW_f,
.defaultSection-2hDX5u {
	margin: 0;
}

.addressSection-3LwW_f {
	margin: 0;
	padding: 16px 16px 0 16px;
}

.defaultSection-2hDX5u {
	height: 60px !important;
	padding: 16px;
}

.formActions-34l65m {
	margin: 0;
	padding: 8px;
}

.formActions-34l65m .lookFilled-1Gx00P.colorGreen-29iAKY {
	margin: 0 0 0 8px;
}

.addressSection-3LwW_f .width25-3DEhbv .select-2TCrqx {
	
}

/* USER SETTINGS -> VOICE AND VIDEO */

.container-1nZlH6 {
	background: transparent !important;
	border-radius: 0 !important;
	border: none !important;
	border-bottom: 2px solid #444 !important;
}

.container-1nZlH6 .input-1UhAnY {
	border: none !important;
}

.cardPrimary-1Hv-to .icon-4lJsMQ[src="/assets/e8b66317ab0dc9ba3bf8d41a4f3ec914.png"] {
	margin: auto 16px;
}

/* USER SETTINGS -> OVERLAY */

.wrapper-3jrx9n {
	border: 2px solid var(--accent-color);
}

.button-3tQuzi {
	margin: 0;
}

.selected-mKYnfr.option-n0icdO,
.option-n0icdO:hover {
	background-color: var(--accent-color);
	border-color: var(--accent-color);
}

/* USER SETTINGS -> GAMES */

.card-FDVird.active-nvdKfC:before,
.card-FDVird:hover:before {
	opacity: 0;
}

.user-settings-games .game-name-input {
	margin: 0 0 2px -8px;
	padding: 4px 8px !important;
}

.user-settings-games .not-detected {
	background: var(--card-color) !important;
}

.user-settings-games .game-verified-icon {
	position: relative;
	width: 24px;
	height: 24px;
	top: -5px;
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEwLDE3TDYsMTNMNy40MSwxMS41OUwxMCwxNC4xN0wxNi41OSw3LjU4TDE4LDlNMTIsMUwzLDVWMTFDMywxNi41NSA2Ljg0LDIxLjc0IDEyLDIzQzE3LjE2LDIxLjc0IDIxLDE2LjU1IDIxLDExVjVMMTIsMVoiIC8+PC9zdmc+);
	transform: scale(0.75);
}

.user-settings-games .overlay-warning-icon,
.user-settings-games .game .overlay-status-text,
.user-settings-games .game .overlay-toggle-icon {
	transition: 200ms ease all;
}

.user-settings-games .overlay-warning-icon,
.user-settings-games .game .overlay-status-text,
.user-settings-games .game .overlay-toggle-icon {
	position: absolute;
}

.user-settings-games .overlay-warning-icon {
	right: 116px;
}

.user-settings-games .game .overlay-status-text {
	right: 24px;
}

.user-settings-games .game .overlay-toggle-icon,
.user-settings-games .now-playing .overlay-toggle-icon {
	position: relative !important;
	width: 27px !important;
	top: 1px;
	right: 0;
	text-align: center;
}

.user-settings-games .game:hover .overlay-warning-icon,
.user-settings-games .game:hover .overlay-status-text,
.user-settings-games .game:hover .overlay-toggle-icon {
	transform: translateX(-42px) !important;
}

.user-settings-games .last-played {
	max-width: 468px !important;
}

.user-settings-games .now-playing .overlay-warning-icon {
	right: 175px;
}

.connectedAccountVerifiedIcon-1Ms4J8 path,
.connectedAccountVerifiedIcon-3aZz_K path {
	fill: #aaa !important;
	d: path('M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z') !important;
	transform: scale(0.75) !important;
}

/* USER SETTINGS -> KEYBINDS */

.container-3mpa-y.recording-1Ne76k {
	box-shadow: 0 0 6px rgba(63,81,181,0.4) !important;
}

.keybindGroup-JQs9x_ .removeKeybind-39dSFj {
	top: 0;
	bottom: 0;
	right: -42px;
	margin: auto 0;
	background-color: transparent !important;
}

/* USER SETTINGS -> LANGUAGE */

.icon-4lJsMQ[src="/assets/e36c44f9a7dc47665d98d2f2736ee218.svg"] {
	position: absolute !important;
	top: 6px;
	right: 0;
}

.formNotice-2_hHWR .horizontal-1ae9ci>.flexChild-faoVW3:last-child {
	margin: 0;
}

.checked-3_4uQ9[style="flex: 1 1 auto; background-color: rgb(67, 181, 129); border-color: rgb(67, 181, 129);"],
.checked-3_4uQ9[style*="background-color: rgb(67, 181, 129);"],
.friend-2PO6ke .checked-3_4uQ9 {
	background: var(--accent-color) !important;
}

.friend-2PO6ke .checked-3_4uQ9 svg polyline {
	stroke: #fff !important;
}


/*
 *
 *	LFG
 *
 */

.gameSelector-24sFfz,
.gameSelected-31teRt,
.gameDefault-2SBp6B {
	border: none;
}

.gameSelector-24sFfz .gameDefault-2SBp6B,
.tabBar-PTjkZh .gameDefault-2SBp6B {
	border: none !important;
}

.gameSelected-31teRt {
	background: #33363b !important; 
}

.top-2qoLb2 .itemSelected-3XxAMf {
	border-bottom-color: transparent !important;
}

.pill-1nbD-Z {
	height: auto;
	padding: 0 16px;
}

.lfg-3xoFkI .scrollerWrap-2uBjct {

}

.card-11ynQk:hover {
	border-bottom: 1px solid #2e3135 !important;
}

.card-11ynQk:before {
	display: none !important;
}

.wrapperDefault-NeXRmD,
.wrapperFull-2_7g2- {
	border: none !important;
}

.wrapperDefault-NeXRmD .count-25CzCS,
.wrapperDefault-NeXRmD .max-mvI_jT {
	line-height: 2em !important;
}


/*
 *
 *	GAME INVITE
 *
 */

.invite-CTGItT {

}


/*
 *
 *	SERVER SETTINGS
 *
 */

.buttonWhiteOutlined-2KwPTg {
	border: none !important;
}

.container-2YgzWd {
	border: none !important;
}

.regionSelectModal-12e-57 .regionSelectModalOption-2DSIZ3 {
	background: var(--input-color) !important;
	border: none;
	transition: 200ms ease-in-out;
}

.regionSelectModal-12e-57 .regionSelectModalOption-2DSIZ3:hover {
	background: rgba(255,255,255,0.1) !important;
}

.searchBar-YMJBu9,
.searchBar-1MOL6S {
	padding: 2px !important;
	background: rgba(255,255,255,0.05) !important;
	border-radius: 2px !important;
	border-bottom: 0px solid #444 !important;
}

.searchBar-1MOL6S .input-3Xdcic,
.searchBar-1MOL6S .input-3Xdcic:focus {
	border: none !important;
}

.popoutList-T9CKZQ {
	padding: 8px 0 !important;
}

.popoutList-T9CKZQ .searchBar-1MOL6S {
	margin: 0 !important;
	border-bottom: none !important;
}

.popoutList-T9CKZQ .selectableItem-1MP3MQ {
	margin: 0 !important;
	padding: 0 12px !important;
	border-radius: 0 !important;
}

.popoutList-T9CKZQ .selectableItem-1MP3MQ[style="flex: 1 1 auto; color: rgb(255, 255, 255); background: rgb(114, 137, 218);"],
.popoutList-T9CKZQ .selectableItem-1MP3MQ:hover {
	background: rgba(255,255,255,0.1) !important;
}

.popoutList-T9CKZQ .divider-3573oO {
	width: 92.5% !important;
	margin: 8px 0 8px 8px !important;
}

/* SERVER SETTINGS -> NOTIFICATION AREA */

.ui-standard-sidebar-view .notice-region {
	padding: 0;
}

.container-2VW0UT {
	background-color: var(--popout-color) !important;
	border-radius: 0;
}

.container-2VW0UT .colorPrimary-3b3xI6,
.container-2VW0UT .colorGreen-29iAKY {
	background: transparent !important;
	box-shadow: none !important;
}

.container-2VW0UT .colorPrimary-3b3xI6:hover,
.container-2VW0UT .colorGreen-29iAKY:hover {
	background: rgba(255,255,255,0.025) !important;
}

.container-2VW0UT .colorPrimary-3b3xI6:active,
.container-2VW0UT .colorGreen-29iAKY:active {
	background: rgba(255,255,255,0.05) !important;
}

.container-2VW0UT .colorPrimary-3b3xI6 .contents-18-Yxp,
.container-2VW0UT .colorPrimary-3b3xI6 .contents-18-Yxp span,
.container-2VW0UT .colorGreen-29iAKY {
	color: var(--accent-color) !important;
}

/* SERVER SETTINGS -> MODERATION */

.radioGroup-1GBvlr {

}

.radioGroup-1GBvlr .item-26Dhrx {
	margin: 0 !important;
	padding: 16px !important;
	border-radius: 0 !important;
	transition: 250ms ease all !important;
}

.radioGroup-1GBvlr .item-26Dhrx,
.radioGroup-1GBvlr .item-26Dhrx:first-child {
	border-bottom: 1px solid #444 !important;
}

.radioGroup-1GBvlr .item-26Dhrx:last-child {
	border-bottom: none !important;
}

.radioGroup-1GBvlr .checkboxWrapper-SkhIWG {
	position: absolute !important;
	top: 0;
	bottom: 0;
	margin: auto 0;
}

.radioGroup-1GBvlr .info-3LOr12 {
	margin: 0 8px 0 42px !important;
}

/* SERVER SETTINGS -> AUDIT LOG */

.auditLog-3jNbM6 {
	background: var(--card-color) !important;
	border: none !important;
}

.headerClickable-2IVFo9 {
	background: transparent !important;
}

.guild-settings-audit-logs .auditLog-3jNbM6 {
	min-height: 72px !important;
	margin: 0 !important;
	border-radius: 0 !important;
	border-bottom: 1px solid #444 !important;
}

.guild-settings-audit-logs .auditLog-3jNbM6:last-child {
	border-bottom: none !important;
}

.guild-settings-audit-logs .auditLog-3jNbM6 .headerExpanded-CUEwZ5 {
	min-height: 71px !important;
}

.guild-settings-audit-logs .auditLog-3jNbM6 .changeDetails-bk98pu {
	padding: 0 8px 16px !important;
}

.icon-RTGJu3.targetMember-2iuwxX {
	background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjYTVhNmE3IiBkPSJNMTYsMTNDMTUuNzEsMTMgMTUuMzgsMTMgMTUuMDMsMTMuMDVDMTYuMTksMTMuODkgMTcsMTUgMTcsMTYuNVYxOUgyM1YxNi41QzIzLDE0LjE3IDE4LjMzLDEzIDE2LDEzTTgsMTNDNS42NywxMyAxLDE0LjE3IDEsMTYuNVYxOUgxNVYxNi41QzE1LDE0LjE3IDEwLjMzLDEzIDgsMTNNOCwxMUEzLDMgMCAwLDAgMTEsOEEzLDMgMCAwLDAgOCw1QTMsMyAwIDAsMCA1LDhBMywzIDAgMCwwIDgsMTFNMTYsMTFBMywzIDAgMCwwIDE5LDhBMywzIDAgMCwwIDE2LDVBMywzIDAgMCwwIDEzLDhBMywzIDAgMCwwIDE2LDExWiIgLz4NCjwvc3ZnPg==) !important;
}

.icon-RTGJu3.targetMessage-2kBYMT {
	background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjYTVhNmE3IiBkPSJNMjAsMkg0QTIsMiAwIDAsMCAyLDRWMjJMNiwxOEgyMEEyLDIgMCAwLDAgMjIsMTZWNEMyMiwyLjg5IDIxLjEsMiAyMCwyWiIgLz4NCjwvc3ZnPg==) !important;
}

.icon-RTGJu3.targetInvite-1RQBlr {
	background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjYTVhNmE3IiBkPSJNMTUsMTRDMTIuMzMsMTQgNywxNS4zMyA3LDE4VjIwSDIzVjE4QzIzLDE1LjMzIDE3LjY3LDE0IDE1LDE0TTYsMTBWN0g0VjEwSDFWMTJINFYxNUg2VjEySDlWMTBNMTUsMTJBNCw0IDAgMCwwIDE5LDhBNCw0IDAgMCwwIDE1LDRBNCw0IDAgMCwwIDExLDhBNCw0IDAgMCwwIDE1LDEyWiIgLz4NCjwvc3ZnPg==) !important;
}

.icon-RTGJu3.targetChannel-TrRFlx {
	background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjYTVhNmE3IiBkPSJNMywxM0gxNVYxMUgzTTMsNlY4SDIxVjZNMywxOEg5VjE2SDNWMThaIiAvPg0KPC9zdmc+) !important;
}

.icon-RTGJu3.targetRole-2MoUny {
	background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjYTVhNmE3IiBkPSJNMTQuNCw2TDE0LDRINVYyMUg3VjE0SDEyLjZMMTMsMTZIMjBWNkgxNC40WiIgLz4NCjwvc3ZnPg==) !important;
}

.icon-RTGJu3.targetGuild-mDWfAV {
	background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjYTVhNmE3IiBkPSJNMTMsOUgxMVY3SDEzTTEzLDE3SDExVjExSDEzTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWiIgLz4NCjwvc3ZnPg==) !important;
}

.icon-RTGJu3.targetWebhook-1xS7Z7 {
	background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjYTVhNmE3IiBkPSJNMTAuNDYsMTlDOSwyMS4wNyA2LjE1LDIxLjU5IDQuMDksMjAuMTVDMi4wNCwxOC43MSAxLjU2LDE1Ljg0IDMsMTMuNzVDMy44NywxMi41IDUuMjEsMTEuODMgNi41OCwxMS43N0w2LjYzLDEzLjJDNS43MiwxMy4yNyA0Ljg0LDEzLjc0IDQuMjcsMTQuNTZDMy4yNywxNiAzLjU4LDE3Ljk0IDQuOTUsMTguOTFDNi4zMywxOS44NyA4LjI2LDE5LjUgOS4yNiwxOC4wN0M5LjU3LDE3LjYyIDkuNzUsMTcuMTMgOS44MiwxNi42M1YxNS42MkwxNS40LDE1LjU4TDE1LjQ3LDE1LjQ3QzE2LDE0LjU1IDE3LjE1LDE0LjIzIDE4LjA1LDE0Ljc1QzE4Ljk1LDE1LjI3IDE5LjI2LDE2LjQzIDE4LjczLDE3LjM1QzE4LjIsMTguMjYgMTcuMDQsMTguNTggMTYuMTQsMTguMDZDMTUuNzMsMTcuODMgMTUuNDQsMTcuNDYgMTUuMzEsMTcuMDRMMTEuMjQsMTcuMDZDMTEuMTMsMTcuNzMgMTAuODcsMTguMzggMTAuNDYsMTlNMTcuNzQsMTEuODZDMjAuMjcsMTIuMTcgMjIuMDcsMTQuNDQgMjEuNzYsMTYuOTNDMjEuNDUsMTkuNDMgMTkuMTUsMjEuMiAxNi42MiwyMC44OUMxNS4xMywyMC43MSAxMy45LDE5Ljg2IDEzLjE5LDE4LjY4TDE0LjQzLDE3Ljk2QzE0LjkyLDE4LjczIDE1Ljc1LDE5LjI4IDE2Ljc1LDE5LjQxQzE4LjUsMTkuNjIgMjAuMDUsMTguNDMgMjAuMjYsMTYuNzZDMjAuNDcsMTUuMDkgMTkuMjMsMTMuNTYgMTcuNSwxMy4zNUMxNi45NiwxMy4yOSAxNi40NCwxMy4zNiAxNS45NywxMy41M0wxNS4xMiwxMy45N0wxMi41NCw5LjJIMTIuMzJDMTEuMjYsOS4xNiAxMC40NCw4LjI5IDEwLjQ3LDcuMjVDMTAuNSw2LjIxIDExLjQsNS40IDEyLjQ1LDUuNDRDMTMuNSw1LjUgMTQuMzMsNi4zNSAxNC4zLDcuMzlDMTQuMjgsNy44MyAxNC4xMSw4LjIzIDEzLjg0LDguNTRMMTUuNzQsMTIuMDVDMTYuMzYsMTEuODUgMTcuMDQsMTEuNzggMTcuNzQsMTEuODZNOC4yNSw5LjE0QzcuMjUsNi43OSA4LjMxLDQuMSAxMC42MiwzLjEyQzEyLjk0LDIuMTQgMTUuNjIsMy4yNSAxNi42Miw1LjZDMTcuMjEsNi45NyAxNy4wOSw4LjQ3IDE2LjQyLDkuNjdMMTUuMTgsOC45NUMxNS42LDguMTQgMTUuNjcsNy4xNSAxNS4yNyw2LjIyQzE0LjU5LDQuNjIgMTIuNzgsMy44NSAxMS4yMyw0LjVDOS42Nyw1LjE2IDguOTcsNyA5LjY1LDguNkM5LjkzLDkuMjYgMTAuNCw5Ljc3IDEwLjk3LDEwLjExTDExLjM2LDEwLjMyTDguMjksMTUuMzFDOC4zMiwxNS4zNiA4LjM2LDE1LjQyIDguMzksMTUuNUM4Ljg4LDE2LjQxIDguNTQsMTcuNTYgNy42MiwxOC4wNUM2LjcxLDE4LjU0IDUuNTYsMTguMTggNS4wNiwxNy4yNEM0LjU3LDE2LjMxIDQuOTEsMTUuMTYgNS44MywxNC42N0M2LjIyLDE0LjQ2IDYuNjUsMTQuNDEgNy4wNiwxNC41TDkuMzcsMTAuNzNDOC45LDEwLjMgOC41LDkuNzYgOC4yNSw5LjE0WiIgLz4NCjwvc3ZnPg==) !important;
}

.icon-RTGJu3.targetEmoji-3vhPhM {
	background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjYTVhNmE3IiBkPSJNNS41LDJDMy41NiwyIDIsMy41NiAyLDUuNVYxOC41QzIsMjAuNDQgMy41NiwyMiA1LjUsMjJIMTZMMjIsMTZWNS41QzIyLDMuNTYgMjAuNDQsMiAxOC41LDJINS41TTUuNzUsNEgxOC4yNUExLjc1LDEuNzUgMCAwLDEgMjAsNS43NVYxNUgxOC41QzE2LjU2LDE1IDE1LDE2LjU2IDE1LDE4LjVWMjBINS43NUExLjc1LDEuNzUgMCAwLDEgNCwxOC4yNVY1Ljc1QTEuNzUsMS43NSAwIDAsMSA1Ljc1LDRNMTQuNDQsNi43N0MxNC4yOCw2Ljc3IDE0LjEyLDYuNzkgMTMuOTcsNi44M0MxMy4wMyw3LjA5IDEyLjUsOC4wNSAxMi43NCw5QzEyLjc5LDkuMTUgMTIuODYsOS4zIDEyLjk1LDkuNDRMMTYuMTgsOC41NkMxNi4xOCw4LjM5IDE2LjE2LDguMjIgMTYuMTIsOC4wNUMxNS45MSw3LjMgMTUuMjIsNi43NyAxNC40NCw2Ljc3TTguMTcsOC41QzgsOC41IDcuODUsOC41IDcuNyw4LjU1QzYuNzcsOC44MSA2LjIyLDkuNzcgNi40NywxMC43QzYuNSwxMC44NiA2LjU5LDExIDYuNjgsMTEuMTZMOS45MSwxMC4yOEM5LjkxLDEwLjExIDkuODksOS45NCA5Ljg1LDkuNzhDOS42NCw5IDguOTUsOC41IDguMTcsOC41TTE2LjcyLDExLjI2TDcuNTksMTMuNzdDOC45MSwxNS4zIDExLDE1Ljk0IDEyLjk1LDE1LjQxQzE0LjksMTQuODcgMTYuMzYsMTMuMjUgMTYuNzIsMTEuMjZaIiAvPg0KPC9zdmc+) !important;
}

.icon-RTGJu3:after {
	position: absolute;
	width: 10px;
	height: 10px;
	left: calc(100% - 10px);
	border-radius: 50%;
}

.typeCreate-1kfBMl:after {
	background: #43b581;
}

.typeUpdate-2bwuHy:after {
	background: #faa61a;
}

.typeDelete-bTXOuk:after {
	background: #f04747;
}

/* SERVER SETTINGS -> ROLES */

.dragged-mHQEE6 {
	background: rgba(255,255,255,0.05);
	border: none !important;
}

.colorPickerCustom-2CWBn2 {
	border: none !important;
}

.saturation-1FDvtn > div,
.saturation-1FDvtn > div > div,
.hue-13HAGb > div > div {
	border-radius: 0 !important;
}

.hue-13HAGb > div > div > div > div {
	width: 16px !important;
	margin: -4px 0 0 0 !important;
	border-radius: 50% !important;
	cursor: pointer;
}

/* SERVER SETTINGS -> EMOJI */

.emoji-alias-placeholder {
	top: 0px;
	left: -8px;
	color: #444 !important;
}

/* SERVER SETTINGS -> WEBHOOKS */

.copyInput-2rOSt7 {
	background: var(--main-color) !important;
	border: none !important;
}

.copyInput-2rOSt7 .button-38qaLQ {
	width: 40px !important;
	min-width: 40px !important;
}

.copyInput-2rOSt7 .button-38qaLQ .contents-18-Yxp {
	display: none;
	font-size: 0;
}

.copyInput-2rOSt7 .button-38qaLQ:after {
	content: " ";
	position: absolute;
	width: 24px;
	height: 24px;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE5LDIxSDhWN0gxOU0xOSw1SDhBMiwyIDAgMCwwIDYsN1YyMUEyLDIgMCAwLDAgOCwyM0gxOUEyLDIgMCAwLDAgMjEsMjFWN0EyLDIgMCAwLDAgMTksNU0xNiwxSDRBMiwyIDAgMCwwIDIsM1YxN0g0VjNIMTZWMVoiIC8+PC9zdmc+);
}

/* SERVER SETTINGS -> MEMBERS */

.guild-settings-members-member {
	box-shadow: none !important;
}

.guild-settings-members-member:after,
.invite-settings-invite-row:after,
.guild-settings-banned-user:after {
	position: absolute;
	content: " ";
	display: block;
	width: 50px;
	height: 4px;
	left: 0;
	bottom: -1px;
	background: var(--main-color);
	transition: 100ms ease all;
}

.card-FDVird:hover.guild-settings-members-member:after,
.card-FDVird:hover.invite-settings-invite-row:after,
.card-FDVird:hover.guild-settings-banned-user:after {
	background: var(--main-color);
}

.card-FDVird:before {
	background: #26292e !important;
	border-color: #26292e !important;
}

.guild-settings-members-member,
.guild-settings-members-member:hover,
.guild-settings-banned-user,
.guild-settings-banned-user:hover {
	border: none !important;
	box-shadow: 0 1px 0 0 #333 !important;
}

.guild-settings-members-member .roleCircleButton-377y0l:after,
.guild-settings-members-member .actionButton-VzECiy:after {
	top: 1px;
	left: 34px;
	z-index: 999;
}

.guild-settings-members-member .actionButton-VzECiy {
	border-radius: 50% !important;
}

.invite-settings-invite-row {
	min-height: 72px !important;
}

.invite-settings-invite-row,
.invite-settings-invite-row:hover {
	border-bottom: 1px solid #333 !important;
	box-shadow: none !important;
}

.guild-settings-members-member .avatar-1BXaQj {
	position: relative !important;
}

.overflowRolesPopout-140n9i {
	box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2) !important;
}

.overflowRolesPopoutArrowWrapper-2Dx30g {
	position: absolute;
	left: 0;
	right: 0;
	bottom: -7px;
	margin: 0 auto;
}

.overflowRolesPopoutArrow-2O66oH {
	box-shadow: none !important;
}

/* SERVER SETTINGS -> INVITES */

.card-11ynQk:before {
	border: none !important;
}

.ui-standard-sidebar-view .custom-container .avatar-xsmall,
.guild-settings-banned-user .banned-user-avatar {
	position: absolute;
	width: 40px !important;
	height: 40px !important;
	background-size: 40px 40px !important
}

.ui-standard-sidebar-view .custom-container .username,
.ui-standard-sidebar-view .custom-container .channel-name {
	margin: 0 0 0 50px !important;
}

.invite-settings-invite-row .code-2OPlX5 .ui-countdown {
	transition: 200ms ease all !important;
}

.invite-settings-invite-row:hover .code-2OPlX5 .ui-countdown {
	opacity: 0 !important;
}

.button-mM-y8i {
	width: 36px;
	height: 36px;
	background-color: var(--card-color) !important;
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTksNEgxNS41TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5TTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOVoiIC8+DQo8L3N2Zz4=);
	box-shadow: none !important;
	overflow: visible;
}

.button-mM-y8i:active {
	transform: translateY(0) !important;
}

.invite-settings-invite-row .revoke-invite,
.emoji-row .emoji-remove,
.user-settings-games .game .remove-game {
	top: 0;
	right: -36px;
	bottom: 0;
	margin: auto 0;
	background-color: transparent !important;
	transition: 200ms ease all;
}

.invite-settings-invite-row:hover .revoke-invite,
.emoji-row:hover .emoji-remove,
.user-settings-games .game:hover .remove-game {
	right: 0;
}

.invite-settings-invite-row:hover .revoke-invite {
	border-radius: 50% !important;
	background-color: transparent !important;
}

.code-2OPlX5 {
	opacity: 1 !important;
}

/* SERVER SETTINGS -> BANS */

.guild-settings-banned-user {
	min-height: 72px !important;
}

.guild-settings-banned-user:last-child {
	box-shadow: none !important;
}

/* SERVER SETTINGS -> CHANNEL SETTINGS */

.group-2dAfBy {

}

.group-2dAfBy button {
	border: none !important;
	box-shadow: none !important;
}

.item-3T2z1R {

}


/*
 *
 *	SERVER LIST
 *
 */

.guildsWrapper-5TJh6A {
	background: var(--server-bg) !important;
	border-radius: 0;
}

.guilds-1q_RqH {
	margin: 0 0 68px 0;
	padding: 0;
}

.guildsError-3cFMtY {
	position: relative;
	top: 5px;
	margin: 0 auto;
	background: var(--alert-color) !important;
}

.homeIcon-1FoKUJ {
	background-color: var(--accent-color);
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTAsMjBWMTRIMTRWMjBIMTlWMTJIMjJMMTIsM0wyLDEySDVWMjBIMTBaIiAvPg0KPC9zdmc+);
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 60%;
}

.homeIcon-1FoKUJ g {
	display: none;
}

.friendsOnline-_wi_fM {
	width: 70px !important;
	height: 14px !important;
}

.dms-rcsEnV {
	margin-bottom: 8px;
}

.dms-rcsEnV:empty + .guildSeparator-1X4GQ1 {
	display: none;
}

.guildSeparator-1X4GQ1 {
	width: 100%;
	height: 1px;
	margin: 0;
	padding: 8px 0;
	background: transparent;
}

.guildSeparator-1X4GQ1:after {
	height: 1px;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto 0;
	background: #333;
}

.guild-1EfMGQ {
	position: relative;
	width: 70px !important;
	height: 60px !important;
	margin: 0 0 -8px 0;
	padding: 0 !important;
	overflow: visible !important;
	transition: 250ms ease all !important;
}

.guild-1EfMGQ:hover {
	background: rgba(255,255,255,0.05);
	transition: 250ms ease all !important;
}

.guilds-wrapper .guilds .guild:hover .guild-inner {
	background-color: var(--accent-color) !important;
}

.guild-1EfMGQ.selected-ML3OIq {
	background: rgba(255,255,255,0.1);
	transition: 250ms ease all !important;
}

.guild-1EfMGQ.audio-3vVhBi .guildInner-3DSoA4,
.guild-1EfMGQ.video-15yGu3 .guildInner-3DSoA4 {
	overflow: visible !important;
}

.guild-1EfMGQ.audio-3vVhBi .guildInner-3DSoA4:after,
.guild-1EfMGQ.video-15yGu3 .guildInner-3DSoA4:after {
	top: -2px;
	left: 0;
	background-color: var(--accent-color) !important;
	border-radius: 50%;
	z-index: 2;
	opacity: 1;
	animation: audio-flash 1.2s linear infinite;
}

.guild-1EfMGQ .avatar-small {
	border-radius: 50%;
}

.guildsAdd-21_IdK {
	position: fixed !important;
	width: 50px !important;
	height: 50px !important;
	left: 10px !important;
	bottom: 17px !important;
	background: var(--accent-color) !important;
	box-shadow: none !important;
	border-radius: 50% !important;
	border: 0;
}

.guildsAddInner-1KMFy- {
	position: absolute;
	display: block;
	width: 50px;
	height: 50px;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnYyeiIvPg0KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4NCjwvc3ZnPg==) !important;
	background-repeat: no-repeat !important;
	background-position: 8px 7px !important;
	background-size: 70% !important;
	border-radius: 50%;
	font-size: 0;
	transition: 300ms ease all;
}

.guild-1EfMGQ .guildIcon-CT-ZDq {
	border-radius: 50%;
}

.guild-1EfMGQ .guildIcon-CT-ZDq:not([style^="background-image:"]) {
	background-color: var(--accent-color) !important;
}

.guildPlaceholder-1ioaid {
	width: 50px !important;
	height: 50px !important;
	margin: 10px 10px 0 10px !important;
	background: #2e2e34 !important;
	border: none !important;
}

.guilds-wrapper .guilds .guild .guilds-error {
	position: absolute !important;
	top: 6px !important;
	margin: 0 10px !important;
	background: var(--alert-color) !important;
	border: none !important;
}

.badge-1GsMF2 {
	transform: translate(-12px, -6px) !important;
}

.badge-1GsMF2.folder {
	transform: translate(-12px, 4px) !important;
}

.guild-1EfMGQ.unread-qLkInr:before,
.guild-1EfMGQ.selected-ML3OIq.unread-qLkInr:before {
	width: 12px;
	height: 12px;
	top: 12px;
	left: calc(100% - 22px);
	background: #ccc !important;
	border-radius: 9px;
	z-index: 2;
	transition: none;
}

.guild-1EfMGQ.selected-ML3OIq.unread-qLkInr:before {
	top: 26px;
}

.guild-1EfMGQ .guildInner-3DSoA4 {
	position: absolute;
	width: 50px !important;
	height: 50px !important;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	background-color: #2f3136 !important;
	border-radius: 50% !important;
	transition: 200ms ease-in-out;
}

.guild-1EfMGQ#bd-pub-li {
	height: 30px !important;
}

.guild-1EfMGQ#bd-pub-li .guildInner-3DSoA4 {
	height: 20px !important;
	border-radius: 0 !important;
	background: transparent !important;
}

.guild-1EfMGQ#bd-pub-li .guildInner-3DSoA4 #bd-pub-button {
	font-size: 10px !important;
	font-weight: 500 !important;
	color: hsla(0,0%,100%,0.3) !important;
	text-transform: uppercase !important;
}

.guild-1EfMGQ#bd-pub-li:hover .guildInner-3DSoA4 {
	background: transparent !important;
}

.guild-1EfMGQ#bd-pub-li .guild-inner a {
	color: #888;
}

.unreadMentionsIndicatorTop-gA6RCh {
	padding: 0 0 8px 0;
}

.unreadMentionsIndicatorBottom-BXS58x {
	bottom: 68px;
	padding: 8px 0 0 0;
}

.bar-30k2ka {
	background: var(--alert-color);
	border-radius: 0;
	font-weight: 500;
	transition: 250ms ease all;
}

.unreadMentionsIndicatorTop-gA6RCh .bar-30k2ka {
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.unreadMentionsIndicatorBottom-BXS58x .bar-30k2ka {
	box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.14), 0 -3px 1px -2px rgba(0, 0, 0, 0.2), 0 -1px 5px 0 rgba(0, 0, 0, 0.12);
}

/* SERVER LIST -> CREATE/JOIN SERVER */

.create-guild-container.deprecated .create-or-join .actions .or {
	display: none;
}

.create-guild-container.deprecated .action {
	border: none;
}

.create-guild-container.deprecated .action.create .btn,
.create-guild-container.deprecated .action.join .btn {
	transition: 250ms ease all;
}

.create-guild-container.deprecated .action.create:hover .btn,
.create-guild-container.deprecated .action.join:hover .btn {
	background: var(--accent-color) !important;
}

.create-guild-container.deprecated .action.create .btn:active,
.create-guild-container.deprecated .action.join .btn:active {
	background: var(--accent-color-high) !important;
}

.create-guild-container.deprecated .action.create .action-icon {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTMsMTNDMTEsMTMgNywxNCA3LDE2VjE4SDE5VjE2QzE5LDE0IDE1LDEzIDEzLDEzTTE5LjYyLDEzLjE2QzIwLjQ1LDEzLjg4IDIxLDE0LjgyIDIxLDE2VjE4SDI0VjE2QzI0LDE0LjQ2IDIxLjYzLDEzLjUgMTkuNjIsMTMuMTZNMTMsMTFBMywzIDAgMCwwIDE2LDhBMywzIDAgMCwwIDEzLDVBMywzIDAgMCwwIDEwLDhBMywzIDAgMCwwIDEzLDExTTE4LDExQTMsMyAwIDAsMCAyMSw4QTMsMyAwIDAsMCAxOCw1QzE3LjY4LDUgMTcuMzcsNS4wNSAxNy4wOCw1LjE0QzE3LjY1LDUuOTUgMTgsNi45NCAxOCw4QzE4LDkuMDYgMTcuNjUsMTAuMDQgMTcuMDgsMTAuODVDMTcuMzcsMTAuOTUgMTcuNjgsMTEgMTgsMTFNOCwxMEg1VjdIM1YxMEgwVjEySDNWMTVINVYxMkg4VjEwWiIgLz4NCjwvc3ZnPg==);
	background-size: 50%;
}

.create-guild-container.deprecated .action.join .action-icon {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTUsMTRDMTIuMzMsMTQgNywxNS4zMyA3LDE4VjIwSDIzVjE4QzIzLDE1LjMzIDE3LjY3LDE0IDE1LDE0TTYsMTBWN0g0VjEwSDFWMTJINFYxNUg2VjEySDlWMTBNMTUsMTJBNCw0IDAgMCwwIDE5LDhBNCw0IDAgMCwwIDE1LDRBNCw0IDAgMCwwIDExLDhBNCw0IDAgMCwwIDE1LDEyWiIgLz4NCjwvc3ZnPg==);
}

.avatar-uploader-inner {
	border: none;
}

.regionSelect-3lf4eE .regionSelectInner-24f4Ce,
.regionSelect-3lf4eE button {
	border: none;
}

.create-guild-container.deprecated .form-actions {
	display: block;
}

.form.deprecated .btn-default,
.create-guild-container.deprecated .form-actions .btn-default {
	height: 36px !important;
	padding: 0 16px !important;
	background: transparent !important;
	border: none !important;
	color: #fff !important;
}

.create-guild-container.deprecated .form-actions .btn-default:before {
	display: none;
}

.form-deprecated .btn + .btn,
.form.deprecated .btn + .btn {
	margin: 0 0 0 8px;
}

.form.deprecated .form-actions {
	padding: 8px;
	border-top: 1px solid #444 !important;
}

.guilds-wrapper .guilds .friends-icon {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE3LDEyVjNBMSwxIDAgMCwwIDE2LDJIM0ExLDEgMCAwLDAgMiwzVjE3TDYsMTNIMTZBMSwxIDAgMCwwIDE3LDEyTTIxLDZIMTlWMTVINlYxN0ExLDEgMCAwLDAgNywxOEgxOEwyMiwyMlY3QTEsMSAwIDAsMCAyMSw2WiIgLz48L3N2Zz4=);
}

.title-3qD0b- .flex-1xMQg5 {
	position: relative !important;
}

.title-3qD0b- .flex-1xMQg5 div:not([class]) {
	height: 26px;
}

.icon-1R19_H path {
	stroke-width: 0 !important;
}

.icon-1R19_H[name="NotificationBell"] path {
	d: path('M14,20A2,2 0 0,1 12,22A2,2 0 0,1 10,20H14M12,2A1,1 0 0,1 13,3V4.08C15.84,4.56 18,7.03 18,10V16L21,19H3L6,16V10C6,7.03 8.16,4.56 11,4.08V3A1,1 0 0,1 12,2Z') !important;
}

.icon-1R19_H[name="NotificationBellOff"] {
	position: absolute !important;
	top: -2px !important;
	left: -3px !important;
	transform: translate(0, 0) !important;
}

.icon-1R19_H[name="NotificationBellOff"] path {
	d: path('M14,20A2,2 0 0,1 12,22A2,2 0 0,1 10,20H14M19.74,21.57L17.17,19H3L6,16V10C6,9.35 6.1,8.72 6.3,8.13L3.47,5.3L4.89,3.89L7.29,6.29L21.15,20.15L19.74,21.57M11,4.08V3A1,1 0 0,1 12,2A1,1 0 0,1 13,3V4.08C15.84,4.56 18,7.03 18,10V14.17L8.77,4.94C9.44,4.5 10.19,4.22 11,4.08Z') !important;
}

.icon-1R19_H[name="Pin"] {
	position: absolute !important;
	top: 2px !important;
	left: 1px !important;
}

.icon-1R19_H[name="Pin"] path {
	d: path('M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z') !important;
}

.icon-1R19_H[name="People"] path {
	d: path('M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z') !important;
}

.icon-1R19_H[name="Update"] path {
	d: path('M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z') !important;
}

.icon-1R19_H[name="Mention"] path {
	d: path('M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z') !important;
}

.icon-1R19_H[name="QuestionMark"] path {
	d: path('M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z') !important;
	transform: translate(-7px, -4px);
}

.icon-1R19_H[name="Compose"] path {
	stroke-width: 2 !important;
}

.updateIconForeground-2jeItf {
	fill: #fff !important;
}


/*
 *
 *	CHANNELS LIST
 *
 */

.containerDefault-1ZnADq {
	
}

.wrapperDefaultText-3M3F1R {

}

.wrapper-1t9ki5 .scroller-2FKFPG {
	padding: 0 8px 0 0;
}

.wrapper-2NJDcI {
	top: 8px;
	right: 0;
	margin: 0 0 0 8px;
	padding: 1px 8px;
	border-radius: 9px;
}

.scroller-2v3d_F {
	padding: 0 8px 20px 0;
}

.members-1998pB {
	padding: 0 0 16px 8px;
}

.membersGroup-v9BXpm {
	padding: 20px 8px 0 8px !important;
}

.content-20Aix8,
.content-OzHfo4,
.memberOnline-1CIh-0,
.memberOffline-2lN7gt {
	width: 100%;
	height: 40px;
	margin: 0 !important;
	padding: 0 16px;
	border-radius: 0;
}

.memberOnline-1CIh-0,
.memberOffline-2lN7gt {
	padding: 0 !important;
	overflow: visible !important;
}

.content-20Aix8 {
	height: 34px;
	border-radius: 0 17px 17px 0;
}

.content-OzHfo4 {
	padding: 0 16px;
	border-radius: 20px 0 0 20px;
	transition: 200ms ease all;
}

.content-OzHfo4:hover {
	background: rgba(255,255,255,0.075) !important;
}

.memberOnline-1CIh-0.popout-open .content-OzHfo4 {
	background: rgba(255,255,255,0.1) !important;
}

.iconSpacing-3JkGQO {
	position: relative !important;
	margin: 0 0 0 10px !important;
}

.actionIcon-2Hi9ZG:active {
	transform: translateY(0);
}

.verified-3uJH7V,
.verifiedIcon-2TCIsJ {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTAsMTdMNiwxM0w3LjQxLDExLjU5TDEwLDE0LjE3TDE2LjU5LDcuNThMMTgsOU0xMiwxTDMsNVYxMUMzLDE2LjU1IDYuODQsMjEuNzQgMTIsMjNDMTcuMTYsMjEuNzQgMjEsMTYuNTUgMjEsMTFWNUwxMiwxWiIgLz4NCjwvc3ZnPg==);
	background-repeat: no-repeat;
}

.verifiedIcon-2TCIsJ {
	top: 0;
	right: 0;
	background-size: 100%;
	border-radius: 50%;
}

.verified-3uJH7V g,
.verifiedIcon-2TCIsJ g {
	display: none;
}

.icon-1792kv:active {
	transform: none !important;
}

.avatarSpeaking-1wJCNq {
	box-shadow: inset 0 0 0 1px #888;
}

.addButton-1BORro {
	box-shadow: none !important;
}

.addButtonIcon-3u-3Hu:active {
	transform: translateX(0) !important;
}

.wrapper-232cHJ {
	border-radius: 9px;	
}

.unreadTop-2mkLbX {
	padding: 0 0 8px 0;
}

.unreadBottom-1px0d1 {
	padding: 8px 0 0 0;
}

.unreadBar-17qm9c {
	background: var(--alert-color);
	border-radius: 0;
	font-weight: 500;
	transition: 250ms ease all;
}

.unreadTop-2mkLbX .unreadBar-17qm9c {
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.unreadBottom-1px0d1 .unreadBar-17qm9c {
	box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.14), 0 -3px 1px -2px rgba(0, 0, 0, 0.2), 0 -1px 5px 0 rgba(0, 0, 0, 0.12);
}


/*
 *
 *	USER STATUS ICONS
 *
 */

.container-2Thooq .directionRow-3v3tfG div:nth-child(1) .iconButtonDefault-2cKx7-[style='background-image: url("/assets/4bc527c257233fc69b94342d77bcb9ee.svg");'] {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEyLDJBMywzIDAgMCwxIDE1LDVWMTFBMywzIDAgMCwxIDEyLDE0QTMsMyAwIDAsMSA5LDExVjVBMywzIDAgMCwxIDEyLDJNMTksMTFDMTksMTQuNTMgMTYuMzksMTcuNDQgMTMsMTcuOTNWMjFIMTFWMTcuOTNDNy42MSwxNy40NCA1LDE0LjUzIDUsMTFIN0E1LDUgMCAwLDAgMTIsMTZBNSw1IDAgMCwwIDE3LDExSDE5WiIgLz48L3N2Zz4=) !important;
}

.container-2Thooq .directionRow-3v3tfG div:nth-child(1) .iconButtonDefault-2cKx7-[style='background-image: url("/assets/896770bf2d6ed0358ed0adefdbe96a24.svg");'] {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE5LDExQzE5LDEyLjE5IDE4LjY2LDEzLjMgMTguMSwxNC4yOEwxNi44NywxMy4wNUMxNy4xNCwxMi40MyAxNy4zLDExLjc0IDE3LjMsMTFIMTlNMTUsMTEuMTZMOSw1LjE4VjVBMywzIDAgMCwxIDEyLDJBMywzIDAgMCwxIDE1LDVWMTFMMTUsMTEuMTZNNC4yNywzTDIxLDE5LjczTDE5LjczLDIxTDE1LjU0LDE2LjgxQzE0Ljc3LDE3LjI3IDEzLjkxLDE3LjU4IDEzLDE3LjcyVjIxSDExVjE3LjcyQzcuNzIsMTcuMjMgNSwxNC40MSA1LDExSDYuN0M2LjcsMTQgOS4yNCwxNi4xIDEyLDE2LjFDMTIuODEsMTYuMSAxMy42LDE1LjkxIDE0LjMxLDE1LjU4TDEyLjY1LDEzLjkyTDEyLDE0QTMsMyAwIDAsMSA5LDExVjEwLjI4TDMsNC4yN0w0LjI3LDNaIiAvPjwvc3ZnPg==) !important;
}

.container-2Thooq .directionRow-3v3tfG div:nth-child(2) .iconButtonDefault-2cKx7-[style='background-image: url("/assets/c7c47afdf35d5a3e06233319d3aa7674.svg");'] {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE0LDMuMjNWNS4yOUMxNi44OSw2LjE1IDE5LDguODMgMTksMTJDMTksMTUuMTcgMTYuODksMTcuODQgMTQsMTguN1YyMC43N0MxOCwxOS44NiAyMSwxNi4yOCAyMSwxMkMyMSw3LjcyIDE4LDQuMTQgMTQsMy4yM00xNi41LDEyQzE2LjUsMTAuMjMgMTUuNSw4LjcxIDE0LDcuOTdWMTZDMTUuNSwxNS4yOSAxNi41LDEzLjc2IDE2LjUsMTJNMyw5VjE1SDdMMTIsMjBWNEw3LDlIM1oiIC8+PC9zdmc+) !important;
}

.container-2Thooq .directionRow-3v3tfG div:nth-child(2) .iconButtonDefault-2cKx7-[style='background-image: url("/assets/c8845c514bbf3f1e5bea064c1e40b08d.svg");'] {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEyLDRMOS45MSw2LjA5TDEyLDguMThNNC4yNywzTDMsNC4yN0w3LjczLDlIM1YxNUg3TDEyLDIwVjEzLjI3TDE2LjI1LDE3LjUzQzE1LjU4LDE4LjA0IDE0LjgzLDE4LjQ2IDE0LDE4LjdWMjAuNzdDMTUuMzgsMjAuNDUgMTYuNjMsMTkuODIgMTcuNjgsMTguOTZMMTkuNzMsMjFMMjEsMTkuNzNMMTIsMTAuNzNNMTksMTJDMTksMTIuOTQgMTguOCwxMy44MiAxOC40NiwxNC42NEwxOS45NywxNi4xNUMyMC42MiwxNC45MSAyMSwxMy41IDIxLDEyQzIxLDcuNzIgMTgsNC4xNCAxNCwzLjIzVjUuMjlDMTYuODksNi4xNSAxOSw4LjgzIDE5LDEyTTE2LjUsMTJDMTYuNSwxMC4yMyAxNS41LDguNzEgMTQsNy45N1YxMC4xOEwxNi40NSwxMi42M0MxNi41LDEyLjQzIDE2LjUsMTIuMjEgMTYuNSwxMloiIC8+PC9zdmc+) !important;
}

.container-iksrDt .button-2b6hmh svg path {
	d: path('M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z') !important;
	transform: scale(0.75) !important;
}



/*
 *
 *	INVITE
 *
 */

.wrapper-O5i5-0 {
	
}

.wrapper-O5i5-0 .instantInviteModal-3vhcvC .form-header header,
.wrapper-O5i5-0 .instantInviteModal-3vhcvC .blurb-zsamaY,
.wrapper-O5i5-0 .instantInviteModal-3vhcvC .clipboardInputInner-RLx2hK input,
.checkbox .checkbox-inner+span {
	color: #aaa;
}

.clipboardInputInner-1EXMA3 {
	background: var(--main-color);
	border: none;
}

.wrapper-O5i5-0 .instantInviteModal-3vhcvC .clipboardInputInner-RLx2hK input {
	background: transparent;
}

.clipboardInputInner-1EXMA3 button {
	border: none;
}

.clipboardInputInner-1EXMA3 button:first-of-type:before {
	display: none;
}

.wrapper-O5i5-0 .instantInviteModal-3vhcvC .checkbox .checkbox-inner span,
.wrapper-O5i5-0 .instantInviteModalAdvanced-3qJETM .checkbox .checkbox-inner span {
	border-color: #56585b;
}

.form-deprecated .Select-control, .form.deprecated .Select-control,
.Select-menu-outer,
.Select-control {
	background-color: var(--popout-alt) !important;
	border: none;
}

.Select .scroller-fzNley::-webkit-scrollbar {
	width: 4px !important;
}

body .Select-option {
	background: var(--popout-alt) !important;
	color: #aaa !important;
}

body .Select-option:hover {
	background: var(--hover-color) !important;
}

.is-focused:not(.is-open) > .Select-control {
	border: none !important;
}

.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label,
.has-value.Select--single > .Select-control .Select-value .Select-value-label {
	color: #aaa;
}

.wrapper-O5i5-0 .instantInviteModal-3vhcvC .form-actions .advanced-26tKjg {
	position: relative;
}

.wrapper-O5i5-0 .instantInviteModalAdvanced-3qJETM .form-actions .btn-default {
	border: none !important;
}

.form.deprecated .btn-primary,
.form-deprecated .btn-primary {
	padding: 0 16px !important;
}

.clipboardInputInner-1EXMA3 {
	height: 48px;
}

.clipboardInputInner-1EXMA3 .copy-3nFbq8 {
	width: 36px !important;
	height: 36px !important;
	top: 6px;
	right: 6px;
	color: transparent !important;
}

.wrapper-O5i5-0 .instantInviteModal-3vhcvC .clipboardInputInner-RLx2hK input {
	width: 100%;
}

.content-18hQ5Y .guildIconImage-12ar3e {
	border-radius: 50% !important;
}

.content-2JiOY5:before {
	display: none;
}

.copyButton-3ElbuJ {
	min-width: 36px !important;
	max-width: 36px !important;
	margin: 0 0 0 8px !important;
	font-size: 0 !important;
}

.header-FNWxDI .search-bar {
	background: transparent !important;
	border-radius: 0 !important;
	border: none !important;
	box-shadow: none !important;
}

.search-bar .search-bar-inner {
	background: transparent;
	border-radius: 0;
	border: none;
	border-bottom: 2px solid #444 !important
}

.search-bar input {
	padding: 7px 0;
	font-size: 1em;
}

.inviteLargeIcon-HrAH61 {
	background-color: transparent;
	border-radius: 50%;
}


/*
 *
 *	SWITCHES AND CHECKBOXES
 *
 */

.switch-3wwwcV {
	width: 36px !important;
	height: 14px !important;
	overflow: visible !important;
}

.switch-3wwwcV:after {
	width: 20px;
	height: 20px;
	margin: 0;
	top: -3px;
}

.switch-3wwwcV:active:after {
	width: 20px !important;
}

.switch-3wwwcV.valueChecked-m-4IJZ:active:after {
	width: 20px !important;
	left: auto !important;
	right: 16px !important;
}

.checkbox-2tyjJg.valueUnchecked-2lU_20,
.themeDefault-3M0dJU.valueUnchecked-2lU_20,
.themeDefault-24hCdX {
	background-color: rgba(65,65,65,0.65);
}

.switch-3wwwcV.valueUnchecked-2lU_20:after {
	background-color: #777 !important;
}

.connection-1fbD7X .valueUnchecked-2lU_20 {
	background-color: rgba(50,50,50,0.4) !important;
	border-color: transparent;
}

.connection-1fbD7X .valueChecked-m-4IJZ {
	background-color: rgba(255,255,255,0.35) !important;
}

.connection-1fbD7X .valueUnchecked-2lU_20:after {
	background-color: #aaa !important;
}

.connection-1fbD7X .valueChecked-m-4IJZ:after {
	background-color: #fff !important;
}

.checked-3_4uQ9 {
	border: 2px solid transparent !important;
}

.themeClear-1EjkE4.valueUnchecked-2lU_20.sizeDefault-2YlOZr {
	box-shadow: none !important
}


/*
 *
 *	SPINNER
 *
 */

/*
.spinner-2enMB9
.inner-1gJC7_
.wanderingCubesItem-WPXqao
*/

._3X2_kkZ9 ._35kyMuFV,
.spinner-wandering-cubes .spinner-item {
	display: none;
	margin-top: 11px;
	background: rgba(225,225,225,0.7);
	border-radius: 50%;
	animation: none;
	transform: scale(0.8);
}

.spinner-wandering-cubes .spinner-item:last-child {
	margin-left: 22px;
}

.spinner-wandering-cubes {
	margin: 10px;
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiAgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjI1IDI1IDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgY2xhc3M9InNwaW5uZXIiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnNwaW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDttYXJnaW46YXV0bzthbmltYXRpb246cm90YXRlIDEuOHMgbGluZWFyIGluZmluaXRlO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjtzdHJva2U6IzNmNTFiNX0ucGF0aHtzdHJva2UtZGFzaGFycmF5OjEsMjAwO3N0cm9rZS1kYXNob2Zmc2V0OjA7YW5pbWF0aW9uOmRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZX1Aa2V5ZnJhbWVzIHJvdGF0ZXsxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNoYXJyYXk6MSwyMDA7c3Ryb2tlLWRhc2hvZmZzZXQ6MH01MCV7c3Ryb2tlLWRhc2hhcnJheTo4OSwyMDA7c3Ryb2tlLWRhc2hvZmZzZXQ6LTM1cHh9MTAwJXtzdHJva2UtZGFzaGFycmF5Ojg5LDIwMDtzdHJva2UtZGFzaG9mZnNldDotMTI0cHh9fTwvc3R5bGU+PGNpcmNsZSBjbGFzcz0icGF0aCIgY3g9IjUwIiBjeT0iNTAiIHI9IjIwIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2NpcmNsZT48L3N2Zz4=);
	background-repeat: no-repeat !important;
	background-position: 50% !important;
}

/*
 *
 *	TOOLTIPS
 *
 */

.tooltip,
.statusOnlineProfile-C7N-xU:before,
.statusIdleProfile-3lQI6a:before,
.statusDndProfile-33i43o:before,
.statusOfflineProfile-9tGGr-:before,
.statusInvisibleProfile-3iFEOq:before,
.downloadLink-1ywL9o:before,
.wrapper-129saQ a:before,
.newMessagesBar-mujexs button:last-child:before,
.bda-dark #bda-qem button:after,
#searchBarInner .checkbox:after,
.tipsy-inner,
.operations-36ENbA .anchor-3Z-8Bb:before,
.metadataDownload-1fk90V:before,
.bubble-3qRl2J {
	padding: 8px;
	line-height: 14px;
	background-color: rgba(97,97,97,0.9) !important;
	box-shadow: 0px 5px 15px rgba(0,0,0,0.2)!important;
	font-size: 10px;
	font-weight: 500;
}

.statusOnlineProfile-C7N-xU:before,
.statusIdleProfile-3lQI6a:before,
.statusDndProfile-33i43o:before,
.statusOfflineProfile-9tGGr-:before,
.statusInvisibleProfile-3iFEOq:before,
.downloadLink-1ywL9o:before,
.wrapper-129saQ a:before,
.newMessagesBar-mujexs button:last-child:before,
.bda-dark #bda-qem button:after,
#searchBarInner .checkbox:after,
.operations-36ENbA .anchor-3Z-8Bb:before,
.metadataDownload-1fk90V:before {
	position: absolute;
	content: " ";
	color: #d4d6d5;
	pointer-events: none;
	opacity: 0;
	transition: 250ms ease all;
}

.status-2s6iDp:hover:before,
.status-oxiHuE:hover:before,
.downloadLink-1ywL9o:hover:before,
.wrapper-129saQ a:hover:before,
.newMessagesBar-mujexs button:last-child:hover:before,
.bda-dark #bda-qem button:hover:after,
#searchBarInner .checkbox:hover:after,
.operations-36ENbA .anchor-3Z-8Bb:hover:before,
.metadataDownload-1fk90V:hover:before {
	opacity: 1;
}

.selectable-3iSmAf .statusOffline-jZXr_u:before {
	display: none !important;
}

.tooltip {
	z-index: 99999999999999;
	pointer-events: none;
	animation: opacity 250ms ease;
}

.tooltip:after {
	visibility: hidden;
}


/*
 *
 *	MAIN CHAT AREA AND MESSAGES
 *
 */

.chat-3bRxxu .messages-3amgkR {
	padding: 0 0 16px 0;
}

.chat-3bRxxu .messages-3amgkR .textArea-2Spzkt {
	margin: 2px 40px 2px 0;
	padding: 8px 72px 8px 8px;
	background: #212426 !important;
}

.chat-3bRxxu .messages-3amgkR .inner-zqa7da {
	background: transparent !important;
}

.chat-3bRxxu .messages-3amgkR .emojiButton-2wRZts {
	width: 36px;
	height: 36px;
	top: 4px;
	right: 74px;
}

.hasMore-3e72_v {
	margin: 16px 0 0 0;
}

.hasMore-3e72_v button {
	border: none !important;
	color: #fff;
	font-size: 0.85em;
}

.chat-3bRxxu .avatar-large {
	top: 2px;
}

.isMentioned-N-h9aa {
	margin: 2px 0;
}

.isMentioned-N-h9aa,
.isMentioned-N-h9aa .mention,
.wrapper-3WhCwL {
	padding: 0 2px !important;
	background: rgba(39,147,230,0.3) !important;
	color: #fff !important;
}

.markup-2BOw-j .mention {
	padding: 0 2px;
	font-weight: 700;
}

.isMentioned-N-h9aa .mention {
	display: inline-block !important;
	margin: 1px 0 0 0 !important;
	background: rgba(255,255,255,0.15) !important;
	border-radius: var(--border-radius) !important;
	font-weight: 700 !important;
}

.containerCompact-3V0ioj .isMentioned-N-h9aa .mention {
	margin: 1px 0 0 62px !important;
}

.isMentionedCozy-3isp7y:after {
	display: none !important;
}

.buttonContainer-37UsAw > * {
	visibility: visible;
	opacity: 0;
	transform: translateX(8px);
	transition: 200ms var(--default-animation);
}

.buttonContainer-37UsAw > .popout-open,
.content-3dzVd8:hover .buttonContainer-37UsAw > * {
	opacity: 1;
	transform: translateX(0);
}

.container-1YxwTf {
	overflow: visible;
}

/* MAIN CHAT AREA AND MESSAGES -> COZY */

.containerCozy-jafyvG {
	padding: 12px 8px 8px 8px;
	margin: 16px 26px 16px 80px;
	background: var(--message-color);
	border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);
	border-bottom: none !important;
	overflow: visible !important;
}

.containerCozy-jafyvG .divider-32i8lo {
	display: none;
}

.containerCozy-B4noqO > * {
	margin: 0;
}

.containerCozy-B4noqO.container-1e22Ot:not(:empty) {
	margin: 0 0 4px 0 !important;
}

.containerCozy-B4noqO.container-1e22Ot:not(:empty) div[style*="width: 400px; height: 80px"] {
	padding: 8px 0 0 0 !important;
}

.messageCozy-2JPAPA:not(:first-child) .headerCozy-2N9HOL {
	display: none;
}

.headerCozy-2N9HOL:first-child {
	position: relative;
}

.headerCozy-2N9HOL:first-child:before {
	content: " ";
	position: absolute;
	width: 0;
	height: 0;
	top: -12px;
	left: -14px;
	margin: -6px 0 0 0;
	border: 6px solid transparent;
	border-color: transparent;
	border-right-color: var(--message-color);
	pointer-events: none;
	transform: rotate(135deg);
}

.headerCozy-2N9HOL {
	position: relative;
	height: auto;
	margin: 0;
}

.avatar-17mtNa {
	position: absolute;
	top: -12px;
	left: -88px;
}

.headerCozyMeta-rdohGq {
	display: block;
	width: 100%;
	margin: 0;
	padding: 0 0 4px 0;
}

.message-1PNnaP {
	margin: 0;
}

.containerCozy-jafyvG .containerCozy-336-Cz {
	padding: 1px 0;
}

.markup-2BOw-j {
	color: #ddd !important;
}

.contentCozy-3XX413 {
	margin: 0;
	padding: 0;
}

.reactions {
	margin: 4px 0 0 -2px;
	padding: 0;
}

.isLocalBot-38G0P0 {
	padding: 0 !important;
	background: transparent !important;
	box-shadow: none !important;
}

.isLocalBot-38G0P0 .messageCozy-2JPAPA {
	padding: 12px 8px;
	background: var(--message-color) !important;
	border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);
}

.localBotMessage-1cGMdw {
	margin: 8px 0 0 0;
}

/* MAIN CHAT AREA AND MESSAGES -> COMPACT */

.containerCompact-3V0ioj {
	margin: 12px 20px;
	padding: 10px 8px;
	background: var(--message-color);
	border-radius: var(--border-radius);
}

.latin24CompactTimeStamp-3m4PhB {
	width: 56px;
	top: -2px;
}

.messageEditorCompact-2PSR3v {
	position: relative;
	top: -16px;
	margin: 0 8px -12px 61px;
	background: var(--message-color);
}

.messageEditorCompact-2PSR3v .margin-top-8 {
	margin: 0;
}

.containerCompact-3V0ioj .divider-32i8lo {
	display: none;
}

.isCompact-1hsne1 {
	margin: 0 0 0 62px;
	text-indent: -62px
}

.containerCompact-3bB5aN:not(:empty) {
	padding: 0 0 6px 62px;
}

/* MAIN CHAT AREA AND MESSAGES -> EDIT MESSAGE */

.edited-DL9ECl {
	display: inline-block;
	width: 14px;
	height: 14px;
	margin: 0 0 0 4px;
	line-height: 24px;
	background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgIDxwYXRoIGZpbGw9IiM4ODg4ODgiIGQ9Ik0yMC43MSw3LjA0QzIxLjEsNi42NSAyMS4xLDYgMjAuNzEsNS42M0wxOC4zNywzLjI5QzE4LDIuOSAxNy4zNSwyLjkgMTYuOTYsMy4yOUwxNS4xMiw1LjEyTDE4Ljg3LDguODdNMywxNy4yNVYyMUg2Ljc1TDE3LjgxLDkuOTNMMTQuMDYsNi4xOEwzLDE3LjI1WiIgLz4NCjwvc3ZnPg==) no-repeat;
	font-size: 0;
}

.contentCozy-3XX413 div:not([class]) {
	position: relative;
	margin: -6px 0 0 0;
}

.operations-36ENbA {
	height: 0;
	padding: 0 !important;
	font-size: 0;
}

.operations-36ENbA .anchor-3Z-8Bb {
	position: absolute;
	font-size: 0;
	opacity: 0.4;
	background-size: 100%;
	background-position: 50%;
	background-repeat: no-repeat;
	transition: 250ms ease all;
}

.operations-36ENbA .anchor-3Z-8Bb:hover,
.operations-36ENbA .anchor-3Z-8Bb:nth-child(1):hover:after {
	opacity: 1;
}

.operations-36ENbA .anchor-3Z-8Bb:nth-child(1) {
	width: 24px;
	height: 24px;
	top: 8px;
	right: 8px;
	background-color: var(--message-color);
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTksNi40MUwxNy41OSw1TDEyLDEwLjU5TDYuNDEsNUw1LDYuNDFMMTAuNTksMTJMNSwxNy41OUw2LjQxLDE5TDEyLDEzLjQxTDE3LjU5LDE5TDE5LDE3LjU5TDEzLjQxLDEyTDE5LDYuNDFaIiAvPg0KPC9zdmc+);
}

.message-group .edit-message.edit-first-message .edit-operation .anchor-3Z-8Bb:nth-child(1) {
	top: 38px;
}

.operations-36ENbA .anchor-3Z-8Bb:nth-child(2) {
	width: 24px;
	height: 24px;
	top: 8px;
	right: 46px;
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMiwyMUwyMywxMkwyLDNWMTBMMTcsMTJMMiwxNFYyMVoiIC8+DQo8L3N2Zz4=);
}

.message-group .edit-message.edit-first-message .edit-operation .anchor-3Z-8Bb:nth-child(2) {
	top: 38px;
}

/* MAIN CHAT AREA AND MESSAGES -> EDIT MESSAGE -> COMPACT */

/* */

.operations-36ENbA .anchor-3Z-8Bb:nth-child(1):before {
	content: "Cancel";
	left: -12px;
	bottom: 34px;
}

.operations-36ENbA .anchor-3Z-8Bb:nth-child(2):before {
	content: "Save";
	left: -7px;
	bottom: 34px;
}

.message-group .invite-CTGItT,
.invite-18yqGF {
	border: none !important;
}

.invite-18yqGF {
	background: var(--main-color) !important;
}

.artwork-1vrmJ_ {
	border-radius: 50%;
}

.divider-3gKybi.dividerRed-MKoLlr > span,
.divider-3gKybi:not(.red-1YQ4s7) span {
	padding: 8px 12px 6px 12px !important;
	line-height: 1em !important;
}

/*.embedPill-1Zntps {
	display: none;
}*/

.embedInner-1-fpTo {
	border: none !important;
}

.embed-IeVjo6 {
	margin: 0;
}

.embedVideoActions-O6vR7W,
.wrapper-129saQ,
.embed-IeVjo6,
.attachment-33OFj0 {
	background: rgba(0,0,0,0.5) !important;
	border: none !important;
}

.attachment-33OFj0 a {
	position: relative !important;
	width: 27px !important;
	height: 27px !important;
	text-align: center !important;
}

.downloadButton-23tKQp {
	color: #999;
	transition: 250ms ease all;
}

.downloadButton-23tKQp:hover {
	color: #eee;
}

.downloadButton-23tKQp {
	position: relative !important;
	margin: 0 !important;
	top: 1px;
	left: 0px !important;
}

.metadata-3WGS0M {
	font-weight: 500;
}

.icon-1kp3fr[src="/assets/73d212e3701483c36a4660b28ac15b62.svg"],
.icon-1kp3fr[src="/assets/985ea67d2edab4424c62009886f12e44.svg"],
.icon-1kp3fr[src="/assets/a11e895b46cde503a094dd31641060a6.svg"] {
	content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTMsOVYzLjVMMTguNSw5TTYsMkM0Ljg5LDIgNCwyLjg5IDQsNFYyMEEyLDIgMCAwLDAgNiwyMkgxOEEyLDIgMCAwLDAgMjAsMjBWOEwxNCwySDZaIiAvPg0KPC9zdmc+) !important;
}

.small-1CUeBa,
.progressBar-3u8FBM.small-1CUeBa {
	border-radius: 0;
}

.progress-3Rbvu0[style="background-color: rgb(233, 231, 231);"] {
	background: rgba(255,255,255,0.1) !important;
}

.embedVideoActionsInner-24mu2S,
.wrapper-129saQ {
	width: 100%;
	height: 100%;
}

.wrapper-129saQ {
	background: transparent !important;
}

.wrapper-129saQ,
.embedVideoActionsInner-2reMo2 {
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}

.wrapper-129saQ a {
	position: absolute;
	display: block;
	width: 28px;
	height: 28px;
	top: 4px;
	right: 0;
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4Ij4NCiAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xNCwzVjVIMTcuNTlMNy43NiwxNC44M0w5LjE3LDE2LjI0TDE5LDYuNDFWMTBIMjFWM00xOSwxOUg1VjVIMTJWM0g1QzMuODksMyAzLDMuOSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjEySDE5VjE5WiIgLz4NCjwvc3ZnPg==);
	background-repeat: no-repeat;
	opacity: 0.75;
	transition: 200ms ease all;
}

.wrapper-129saQ a:hover {
	opacity: 1;
}

.wrapper-129saQ a:before {
	content: "Open externally";
	width: auto;
	top: -2px;
	left: -90px;
}

.iconWrapper-21idzA {
	width: 100%;
}

.iconWrapper-21idzA:active {
	transform: translateY(0);
}

.embedVideoPlay-1r-B3h,
.iconPlay-2kgvwV {
	width: 100%;
	height: 100%;
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEwLDE2LjVWNy41TDE2LDEyTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWiIgLz48L3N2Zz4=);
	background-repeat: no-repeat;
	background-size: 20%;
	background-position: 50%;
	border-radius: 0;
	transition: 200ms ease;
}

.iconPlay-2kgvwV {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
}

.iconPlay-2kgvwV polygon {
	display: none;
}

.embedVideoPlay-1r-B3h:hover,
.iconPlay-2kgvwV:hover {
	transform: scale(1.25);
}

.wrapper-129saQ .iconWrapper-21idzA[role="button"] {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}

.iconExternalMargins-2v2mzg {
	display: none !important;
}

.embedVideoPopout-304geM {
	position: absolute;
	top: 8px;
	right: 8px;
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE0LDNWNUgxNy41OUw3Ljc2LDE0LjgzTDkuMTcsMTYuMjRMMTksNi40MVYxMEgyMVYzTTE5LDE5SDVWNUgxMlYzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWMTJIMTlWMTlaIiAvPjwvc3ZnPg==) !important;
}

.imageWrapper-2p5ogY {
	margin: 4px 0;
}

.gifTag-31zFY8 {
	background: none;
}

.gifTag-31zFY8:after {
	position: absolute;
	content: "GIF";
	top: 0;
	left: -4px;
	padding: 4px 8px;
	background: rgba(0,0,0,0.5);
	border-radius: 11px;
	color: #fff;
	font-weight: 400;
}

/*.inner-1JeGVc {
	position: relative;
}*/

.inner-1JeGVc div:not([class]):first-child {
	position: relative;
}

.downloadLink-1ywL9o {
	display: block;
	width: 0;
	height: 0;
	pointer-events: none;
	font-size: 0;
}

.downloadLink-1ywL9o:before {
	content: "Open externally";
	top: -4px;
	right: -122px;
}

.downloadLink-1ywL9o:after {
	position: absolute;
	content: " ";
	width: 25px;
	height: 25px;
	top: 0;
	right: -30px;
	background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xNCwzVjVIMTcuNTlMNy43NiwxNC44M0w5LjE3LDE2LjI0TDE5LDYuNDFWMTBIMjFWM00xOSwxOUg1VjVIMTJWM0g1QzMuODksMyAzLDMuOSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjEySDE5VjE5WiIgLz4NCjwvc3ZnPg==) no-repeat;
	pointer-events: auto;
}

.divider-3gKybi > span {
	padding: 2px 10px;
	background: #2b2f33 !important;
	border-radius: 14px;
	color: #999 !important;
}

.divider-3gKybi {
	width: calc(100% - 46px);
	padding: 16px 0;
	background: transparent;
}

.markup-2BOw-j pre,
.markup-2BOw-j pre *,
.markup-2BOw-j pre code,
.markup-2BOw-j pre code *,
.markup-2BOw-j code.inline {
	font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif !important;
}

.markup-2BOw-j code.inline,
.markup-2BOw-j pre,
.markup-2BOw-j pre code {
	background: #1d1e21 !important;
	border: none !important;
}

.markup-2BOw-j pre,
.markup-2BOw-j code.inline {
	margin: 4px 0 !important;
}

.markup-2BOw-j code.inline {
	display: inline-block !important;
}

.wrapper-35wsBm {
	background: #1d1e21 !important;
	border: none;
}

.guildInfo-1STtYi {
	max-width: 100%;
}

.buttonPrimaryOutlinedDefault--H0hhk,
.buttonPrimaryOutlinedSubmitting-3m3eFx {
	border: none !important;
}

.newMessagesBar-mujexs {
	width: 100%;
	left: 0;
	border-radius: 0;
}

.newMessagesBar-mujexs:active {
	padding: 0 !important;
}

.newMessagesBar-mujexs button:last-child {
	width: 32px;
	height: 26px;
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMC40MSwxMy40MUw2LDE5TDcuNDEsMTcuNThMMS44MywxMk0yMi4yNCw1LjU4TDExLjY2LDE2LjE3TDcuNSwxMkw2LjA3LDEzLjQxTDExLjY2LDE5TDIzLjY2LDdNMTgsN0wxNi41OSw1LjU4TDEwLjI0LDExLjkzTDExLjY2LDEzLjM0TDE4LDdaIiAvPg0KPC9zdmc+) !important;
	background-position: 6px 3px;
	background-repeat: no-repeat;
	border-radius: 0 !important;
	font-size: 0;
}

.newMessagesBar-mujexs button:last-child:before {
	content: "Mark as read";
	top: 30px;
	right: 4px;
	text-transform: none;
}

.jumpToPresentBar-9P20AM {
	width: 56px;
	height: 56px;
	border-radius: 50%;
	left: auto;
	bottom: 20px;
	background: var(--accent-color) !important;
}

.jumpToPresentBar-9P20AM:active {
	margin: 0 !important;
}

.jumpToPresentBar-9P20AM:after {
	content: " ";
	position: absolute;
	width: 56px;
	height: 56px;
	bottom: 0;
	right: 0;
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTcuNDEsOC41OEwxMiwxMy4xN0wxNi41OSw4LjU4TDE4LDEwTDEyLDE2TDYsMTBMNy40MSw4LjU4WiIgLz48L3N2Zz4=);
	background-repeat: no-repeat;
	background-size: 75%;
	background-color: transparent;
	background-position: 7px 7px;
	border-radius: 50%;
}

.jumpToPresentBar-9P20AM button {
	opacity: 0;
	z-index: 2;
}

.jumpToPresentBar-9P20AM button:first-child {
	width: 56px;
}

.jumpToPresentBar-9P20AM button:last-child {
	display: none;
}

.container-3-pyIM {
	padding: 0;
}

.containerCompact-3V0ioj .icon-2Po-VO {

}

.icon-2Po-VO[style='background-image: url("/assets/4e4e1d9c907a3dc53d68f34e868fcb12.svg");'] {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgIDxwYXRoIGZpbGw9IiNhYWFhYWEiIGQ9Ik0xNiwxMlY0SDE3VjJIN1Y0SDhWMTJMNiwxNFYxNkgxMS4yVjIySDEyLjhWMTZIMThWMTRMMTYsMTJaIiAvPg0KPC9zdmc+) !important;
	transform: rotate(45deg) scale(1.25);
}

/* MAIN CHAT AREA AND MESSAGES -> BLOCKED MESSAGES */

.message-group-blocked {
	margin: 8px 26px 8px 20px;
	padding: 0 0 1px 0;
}

.messages-wrapper .messages .message-group-blocked {
	border: none;
}

.messages-wrapper .messages .message-group-blocked.revealed {
	background: #25282b !important;
}

.messages-wrapper .messages .message-group-blocked .message-group-blocked-btn {
	font-weight: 700;
}

.message-group-blocked .message-group-blocked-btn {
	background: var(--message-color) !important;
	padding: 10px 0;
}

.message-group-blocked.revealed .message-group-blocked-btn {

}

.message-group-blocked .message-group {
	padding: 16px 0 !important;
}

.message-group-blocked .containerCozy-jafyvG {
	background: var(--message-alt);
}

.message-group-blocked .headerCozy-2N9HOL:first-child:before {
	border-right-color: var(--message-alt);
}


/*
 *
 *	VIDEO PLAYER
 *
 */

.metadata-13NcHb {
	background: -webkit-linear-gradient(bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 1%,rgba(0,0,0,0.4) 67%,rgba(0,0,0,0.4) 100%);
	z-index: 2;
	pointer-events: none;
}

.metadata-13NcHb .anchor-3Z-8Bb {
	pointer-events: all;
	opacity: 1;
}

.metadataDownload-1fk90V {
	position: relative;
	height: 24px;
}

.metadataDownload-1fk90V:before {
	content: "Download";
	top: 19px;
	right: 42px;
}

/*.playCenter-Fe8u3X .iconPlay-2kgvwV {
	background-size: 35%;
}*/

.playCenter-Fe8u3X .iconWrapper-21idzA {
	background: rgba(0,0,0,0.5);
	transition: 250ms ease all;
}

.playCenter-Fe8u3X .iconWrapper-21idzA:hover {

}

/* VIDEO PLAYER -> CONTROLS */

.videoControls-2kcYic {
	height: 60px;
	bottom: 0;
	padding: 0;
	background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 1%,rgba(0,0,0,0.4) 67%,rgba(0,0,0,0.4) 100%);
}

.durationTimeWrapper-OugPFt {
	position: absolute;
	top: 32px;
	left: 72px;
}

.durationTimeDisplay-jww5fr, .durationTimeSeparator-2_xpJ7 {
	font-size: 14px;
}

.mediaBarInteraction-37i2O4,
.mediaBarInteractionDragging-2QurIZ {
	position: relative;
	height: 24px;
	top: 8px;
	margin: 0 8px;
}

.videoVolumeWrapper-3syuC- {
	left: 0;
}

.mediaBarWrapper-3D7r67 {
	height: 4px;
}

.mediaBarProgress-1xaPtl,
.mediaBarProgress-1xaPtl:before,
.mediaBarProgress-1xaPtl:after,
.mediaBarGrabber-1FqnbN,
.mediaBarInteraction-37i2O4:hover .mediaBarGrabber-1FqnbN,
.mediaBarInteraction-37i2O4:active .mediaBarGrabber-1FqnbN {
	background-color: var(--accent-color);
}

.mediaBarProgress-1xaPtl,
.mediaBarProgress-1xaPtl:before,
.mediaBarProgress-1xaPtl:after,
.mediaBarPreview-1jfyFs,
.mediaBarPreview-1jfyFs:after,
.mediaBarPreview-1jfyFs:before,
.mediaBarWrapper-3D7r67,
.mediaBarWrapper-3D7r67:after,
.mediaBarWrapper-3D7r67:before,
.buffer-26XPkd,
.buffer-26XPkd:after,
.buffer-26XPkd:before {
	border-radius: 0;
}

.mediaBarInteractionVolume-3QZqYd {
	top: -46px;
	left: 2px;
	margin: 0;
	padding: 0 12px;
	border-radius: 3px;
}

.mediaBarInteractionVolume-3QZqYd .mediaBarWrapper-3D7r67 {

}

.bubble-3qRl2J {
	top: -34px;
	padding: 8px 8px 0 8px;
	line-height: 12px;
	z-index: 1;
}

.bubble-3qRl2J:before {
	display: none;
}

.controlIcon-3cRbti {
	position: absolute;
	top: 0;
	opacity: 1;
}

.controlIcon-3cRbti:active {
	transform: translateX(0);
}

.controlIcon-3cRbti[name="Play"],
.controlIcon-3cRbti[name="Pause"],
.controlIcon-3cRbti[name="Replay"] {
	left: 4px;
}

.controlIcon-3cRbti[name="Speaker"],
.controlIcon-3cRbti[name="SpeakerOff"] {
	left: 36px;
}

.controlIcon-3cRbti[name="FullScreen"] {
	right: 4px;
}

.videoControls-2kcYic .flex-1O1GKY {
	position: absolute;
	display: block;
	top: 33px;
	left: 0;
}


/*
 *
 *	AUDIO PLAYER
 *
 */

.wrapperAudio-1jDe0Q {
	padding: 0;
	background: rgba(0,0,0,0.5) !important;
	border: none;
}

.audioMetadata-3zOuGv {
	padding: 8px;
}

.audioMetadata-3zOuGv:before {
	content: " ";
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik00LDZIMlYyMEEyLDIgMCAwLDAgNCwyMkgxOFYyMEg0TTE4LDdIMTVWMTIuNUEyLjUsMi41IDAgMCwxIDEyLjUsMTVBMi41LDIuNSAwIDAsMSAxMCwxMi41QTIuNSwyLjUgMCAwLDEgMTIuNSwxMEMxMy4wNywxMCAxMy41OCwxMC4xOSAxNCwxMC41VjVIMThNMjAsMkg4QTIsMiAwIDAsMCA2LDRWMTZBMiwyIDAgMCwwIDgsMThIMjBBMiwyIDAgMCwwIDIyLDE2VjRBMiwyIDAgMCwwIDIwLDJaIiAvPgo8L3N2Zz4=);
	background-repeat: no-repeat;
	background-position: 50%;
}

.audioMetadata-3zOuGv .metadataContent-3c_ZXw {
	padding: 0 8px;
}

.audioMetadata-3zOuGv .metadataName-14STf- {
	display: inline-block;
}

.audioMetadata-3zOuGv .metadataDownload-1fk90V {
	transform: translateY(8px);
}

.audioMetadata-3zOuGv .metadataDownload-1fk90V:before {
	top: -3px;
	right: 32px;
}

.audioControls-2HsaU6 {
	position: relative;
	height: 50px;
	margin: 0;
	background: rgba(0,0,0,0.25);
	border-radius: 0;
}

.audioControls-2HsaU6 .mediaBarInteraction-37i2O4,
.audioControls-2HsaU6 .mediaBarInteractionDragging-2QurIZ {
	height: 16px;
	top: 4px;
	border-radius: 0;
}

.audioControls-2HsaU6 .durationTimeWrapper-OugPFt {
	top: 23px;
	left: 36px;
}

.audioControls-2HsaU6 .controlIcon-3cRbti[name="Play"],
.audioControls-2HsaU6 .controlIcon-3cRbti[name="Pause"],
.audioControls-2HsaU6 .controlIcon-3cRbti[name="Replay"] {
	top: -6px;
}

.audioControls-2HsaU6 .controlIcon-3cRbti[name="Speaker"],
.audioControls-2HsaU6 .controlIcon-3cRbti[name="SpeakerOff"] {
	top: -3px;
	left: -36px;
}

.audioVolumeWrapper-2t9juP {
	transform: translate(0px, -52px);
}

.audioControls-2HsaU6 .vertical-1gJnJQ {
	position: relative;
	width: 96px;
	height: 40px;
	top: 0px;
	left: 8px;
}

.audioControls-2HsaU6 .mediaBarInteractionVolume-3QZqYd {
	top: -2px;
	left: 0;
}


/*
 *
 * NSFW WARNING
 *
 */

.image-2LqJex {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZjA0NzQ3IiBkPSJNMTMsMTRIMTFWMTBIMTNNMTMsMThIMTFWMTZIMTNNMSwyMUgyM0wxMiwyTDEsMjFaIiAvPg0KPC9zdmc+) !important;
}


/*
 *
 *	CHAT FORM
 *
 */

.chat-3bRxxu form {
	display: block !important;
	position: relative !important;
	margin: 0 !important;
	padding: 0 !important;
	bottom: 0 !important;
	background: var(--input-color) !important;
}

.channelTextArea-rNsIhG {
	margin: 0;
	padding: 0;
	background: var(--input-color) !important;
	border: none !important;
}

.channelTextArea-os01xC .innerNoAutocomplete-kaUXJZ,
.channelTextArea-rNsIhG {
	min-height: 68px !important;
}

.channelTextArea-rNsIhG .textArea-2Spzkt {
	margin: 14px 0 !important;
	padding: 10px 64px 10px 12px !important;
}

.channelTextArea-rNsIhG .textArea-2Spzkt.textAreaDisabled-2_o-kZ {
	padding: 10px 640x 10px 12px !important;
}

.edit-message .textArea-2Spzkt {
	padding: 8px 72px 8px 8px !important;
}

.edit-message .avatar-large {
	opacity: 0;
	visibility: hidden;
}

.inner-zqa7da {
	background: var(--input-color) !important;
}

.innerNoAutocomplete-kaUXJZ {
	border-radius: 0;
}

.attachButton-1UjEWA {
	width: 44px;
	height: 50px;
	margin: 8px 0 0 12px;
	box-shadow: none !important;
	cursor: pointer;
}

.attachButton-1UjEWA[name="PlusCirclePlay"] {
	width: 24px;
	height: 24px;
	margin: 12px 0 0 12px;
}

.attachButtonPlus-rUdX-B {
	d: path('M7.5,18A5.5,5.5 0 0,1 2,12.5A5.5,5.5 0 0,1 7.5,7H18A4,4 0 0,1 22,11A4,4 0 0,1 18,15H9.5A2.5,2.5 0 0,1 7,12.5A2.5,2.5 0 0,1 9.5,10H17V11.5H9.5A1,1 0 0,0 8.5,12.5A1,1 0 0,0 9.5,13.5H18A2.5,2.5 0 0,0 20.5,11A2.5,2.5 0 0,0 18,8.5H7.5A4,4 0 0,0 3.5,12.5A4,4 0 0,0 7.5,16.5H17V18H7.5Z') !important;
}

.attachButtonDivider-3Glu60 {
	display: none !important;
}

.noArrow-3BYQ0Z.noShadow-321ZPm.popout-3sVMXz.popoutTopLeft-b5Eb3O.popouttop-left[style*="left: 310px;"] {
	left: 320px !important;
	margin: -8px 0 0 0 !important;
}

.emojiButton-2wRZts,
.channel-textarea-emoji {
	width: 56px;
	height: 100%;
	box-shadow: none !important;
}

.emojiButton-2wRZts {
	margin: -2px 0 0 0 !important;
}

.autocomplete-1TnWNR,
.autocomplete-1vrmpx {
	padding: 0 !important;
	background: #2b2f33 !important;
	border-radius: 0;
}

.autocompleteRowVertical-q1K4ky {
	padding: 0 !important;
}

.autocompleteRow-2OthDa,
.selector-2IcQBU {
	border-radius: 0 !important;
}

.selector-2IcQBU {
	padding: 8px 16px !important;
	font-weight: 500 !important;
}

/* CHAT FORM -> TYPING */

.typing-2GQL18 {
	position: absolute !important;
	width: 100% !important;
	top: -26px;
	left: 0;
	padding: 0 8px;
	background: rgba(55,55,60,0.85) !important;
	transition: 200ms ease-in-out;
}

.typing-2GQL18:hover {
	background: rgba(55,55,60,1) !important;
}


/*
 *
 *	EMOJI BUTTON/EMOJI PICKER & GOOGLE TRANSLATE BUTTON
 *
 */

.translate-button {
	top: 0 !important;
	right: 60px !important;
	bottom: 0 !important;
	margin: auto 0 !important;
	padding: 0 8px;
}

.emojiPicker-3m1S-j,
#bda-qem-twitch-container,
#bda-qem-favourite-container {
	width: 347px !important;
	height: 327px !important;
	border: none;
}

.diversitySelector-tmmMv0 .popout-2nUePc {
	border: none !important;
}

.emojiPicker-3m1S-j .stickyHeader-1SS0JU {
	width: calc(100% - 16px) !important;
}

.emojiPicker-3m1S-j .categories-1feg4n {
	margin: 0 !important;
	padding: 0 16px !important;
	background: rgba(0,0,0,0.25) !important;
	border-top: none !important;
}

.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq {
	border: none !important;
	opacity: 0.4;
	transition: 200ms ease all;
}

.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq.selected-39BZ4S {
	opacity: 1;
}

.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq.recent-rdY7_c {
	background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgaWQ9ImEiLz4NCiAgICA8L2RlZnM+DQogICAgPGNsaXBQYXRoIGlkPSJiIj4NCiAgICAgICAgPHVzZSBvdmVyZmxvdz0idmlzaWJsZSIgeGxpbms6aHJlZj0iI2EiLz4NCiAgICA8L2NsaXBQYXRoPg0KICAgIDxwYXRoIGNsaXAtcGF0aD0idXJsKCNiKSIgZD0iTTEyIDJDNi41IDIgMiA2LjUgMiAxMnM0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEwUzE3LjUgMiAxMiAyem00LjIgMTQuMkwxMSAxM1Y3aDEuNXY1LjJsNC41IDIuNy0uOCAxLjN6Ii8+DQo8L3N2Zz4=) !important;
}

.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq.custom-2TY7UZ {
	background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+DQogICAgPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTEgMTdoLTJ2LTJoMnYyem0yLjA3LTcuNzVsLS45LjkyQzEzLjQ1IDEyLjkgMTMgMTMuNSAxMyAxNWgtMnYtLjVjMC0xLjEuNDUtMi4xIDEuMTctMi44M2wxLjI0LTEuMjZjLjM3LS4zNi41OS0uODYuNTktMS40MSAwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJIOGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0YzAgLjg4LS4zNiAxLjY4LS45MyAyLjI1eiIvPg0KPC9zdmc+) !important;
}

.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq.people-2y6eof {
	background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+DQogICAgPHBhdGggZD0iTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6TTEyIDIwYy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHptMy41LTljLjgzIDAgMS41LS42NyAxLjUtMS41UzE2LjMzIDggMTUuNSA4IDE0IDguNjcgMTQgOS41cy42NyAxLjUgMS41IDEuNXptLTcgMGMuODMgMCAxLjUtLjY3IDEuNS0xLjVTOS4zMyA4IDguNSA4IDcgOC42NyA3IDkuNSA3LjY3IDExIDguNSAxMXptMy41IDYuNWMyLjMzIDAgNC4zMS0xLjQ2IDUuMTEtMy41SDYuODljLjggMi4wNCAyLjc4IDMuNSA1LjExIDMuNXoiLz4NCjwvc3ZnPg==) !important;
}

.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq.nature-WkggKK {
	background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+DQogICAgPHBhdGggZD0iTTEyIDIyYzQuOTcgMCA5LTQuMDMgOS05LTQuOTcgMC05IDQuMDMtOSA5ek01LjYgMTAuMjVjMCAxLjM4IDEuMTIgMi41IDIuNSAyLjUuNTMgMCAxLjAxLS4xNiAxLjQyLS40NGwtLjAyLjE5YzAgMS4zOCAxLjEyIDIuNSAyLjUgMi41czIuNS0xLjEyIDIuNS0yLjVsLS4wMi0uMTljLjQuMjguODkuNDQgMS40Mi40NCAxLjM4IDAgMi41LTEuMTIgMi41LTIuNSAwLTEtLjU5LTEuODUtMS40My0yLjI1Ljg0LS40IDEuNDMtMS4yNSAxLjQzLTIuMjUgMC0xLjM4LTEuMTItMi41LTIuNS0yLjUtLjUzIDAtMS4wMS4xNi0xLjQyLjQ0bC4wMi0uMTlDMTQuNSAyLjEyIDEzLjM4IDEgMTIgMVM5LjUgMi4xMiA5LjUgMy41bC4wMi4xOWMtLjQtLjI4LS44OS0uNDQtMS40Mi0uNDQtMS4zOCAwLTIuNSAxLjEyLTIuNSAyLjUgMCAxIC41OSAxLjg1IDEuNDMgMi4yNS0uODQuNC0xLjQzIDEuMjUtMS40MyAyLjI1ek0xMiA1LjVjMS4zOCAwIDIuNSAxLjEyIDIuNSAyLjVzLTEuMTIgMi41LTIuNSAyLjVTOS41IDkuMzggOS41IDhzMS4xMi0yLjUgMi41LTIuNXpNMyAxM2MwIDQuOTcgNC4wMyA5IDkgOSAwLTQuOTctNC4wMy05LTktOXoiLz4NCjwvc3ZnPg==) !important;
}

.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq.food-3vb4RY {
	background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+DQogICAgPHBhdGggZD0iTTEyIDZjMS4xMSAwIDItLjkgMi0yIDAtLjM4LS4xLS43My0uMjktMS4wM0wxMiAwbC0xLjcxIDIuOTdjLS4xOS4zLS4yOS42NS0uMjkgMS4wMyAwIDEuMS45IDIgMiAyem00LjYgOS45OWwtMS4wNy0xLjA3LTEuMDggMS4wN2MtMS4zIDEuMy0zLjU4IDEuMzEtNC44OSAwbC0xLjA3LTEuMDctMS4wOSAxLjA3QzYuNzUgMTYuNjQgNS44OCAxNyA0Ljk2IDE3Yy0uNzMgMC0xLjQtLjIzLTEuOTYtLjYxVjIxYzAgLjU1LjQ1IDEgMSAxaDE2Yy41NSAwIDEtLjQ1IDEtMXYtNC42MWMtLjU2LjM4LTEuMjMuNjEtMS45Ni42MS0uOTIgMC0xLjc5LS4zNi0yLjQ0LTEuMDF6TTE4IDloLTVWN2gtMnYySDZjLTEuNjYgMC0zIDEuMzQtMyAzdjEuNTRjMCAxLjA4Ljg4IDEuOTYgMS45NiAxLjk2LjUyIDAgMS4wMi0uMiAxLjM4LS41N2wyLjE0LTIuMTMgMi4xMyAyLjEzYy43NC43NCAyLjAzLjc0IDIuNzcgMGwyLjE0LTIuMTMgMi4xMyAyLjEzYy4zNy4zNy44Ni41NyAxLjM4LjU3IDEuMDggMCAxLjk2LS44OCAxLjk2LTEuOTZWMTJDMjEgMTAuMzQgMTkuNjYgOSAxOCA5eiIvPg0KPC9zdmc+) !important;
}

.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq.activity-2oLAbd {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMi4zNCwxNC42M0MyLjk0LDE0LjQxIDMuNTYsMTQuMyA0LjIyLDE0LjNDNS41NiwxNC4zIDYuNzMsMTQuNzIgNy43MywxNS41Nkw0LjU5LDE4LjdDMy41MywxNy41IDIuNzgsMTYuMTMgMi4zNCwxNC42M00xNS41Niw5LjhDMTcuNTMsMTEuMjcgMTkuNjYsMTEuNjMgMjEuOTQsMTAuODhDMjEuOTcsMTEuMDkgMjIsMTEuNDcgMjIsMTJDMjIsMTMuMDMgMjEuNzUsMTQuMTggMjEuMjgsMTUuNDVDMjAuODEsMTYuNzEgMjAuMjMsMTcuNzMgMTkuNTUsMTguNUwxMy4yMiwxMi4xOUwxNS41Niw5LjhNOC43NywxNi42NEM5LjgzLDE4LjE3IDEwLjA1LDE5Ljg0IDkuNDIsMjEuNjZDOCwyMS4yNSA2LjczLDIwLjYxIDUuNjcsMTkuNzNMOC43NywxNi42NE0xMi4xOSwxMy4yMkwxOC41LDE5LjU1QzE2LjMzLDIxLjQ1IDEzLjc4LDIyLjI1IDEwLjg4LDIxLjk0QzExLjA5LDIxLjI4IDExLjIsMjAuNTYgMTEuMiwxOS43OEMxMS4yLDE5LjE2IDExLjA2LDE4LjQzIDEwLjc4LDE3LjZDMTAuNSwxNi43NyAxMC4xNywxNi4wOSA5LjgsMTUuNTZMMTIuMTksMTMuMjJNOC44MSwxNC41QzcuODgsMTMuNjcgNi44LDEzLjE1IDUuNTgsMTIuOTFDNC4zNiwxMi42OCAzLjE5LDEyLjc1IDIuMDYsMTMuMTNDMi4wMywxMi45MSAyLDEyLjUzIDIsMTJDMiwxMC45NyAyLjI1LDkuODIgMi43Miw4LjU1QzMuMTksNy4yOSAzLjc3LDYuMjcgNC40NSw1LjVMMTEuMTEsMTIuMTlMOC44MSwxNC41TTE1LjU2LDcuNzNDMTQuMjIsNi4wOCAxMy45MSw0LjI4IDE0LjYzLDIuMzRDMTUuMjUsMi41IDE1Ljk2LDIuOCAxNi43NiwzLjI2QzE3LjU1LDMuNzEgMTguMiw0LjE2IDE4LjcsNC41OUwxNS41Niw3LjczTTIxLjY2LDkuMzhDMjEuMDYsOS41OSAyMC40NCw5LjcgMTkuNzgsOS43QzE4LjY5LDkuNyAxNy42NCw5LjM4IDE2LjY0LDguNzJMMTkuNzMsNS42N0MyMC42MSw2Ljc3IDIxLjI1LDggMjEuNjYsOS4zOE0xMi4xOSwxMS4xMUw1LjUsNC40NUM3LjY3LDIuNTUgMTAuMjIsMS43NSAxMy4xMywyLjA2QzEyLjkxLDIuNzIgMTIuOCwzLjQ0IDEyLjgsNC4yMkMxMi44LDQuOTQgMTIuOTYsNS43NSAxMy4yOSw2LjY2QzEzLjYyLDcuNTYgMTQsOC4yOCAxNC41LDguODFMMTIuMTksMTEuMTFaIiAvPg0KPC9zdmc+) !important;
}

.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq.travel-2FeozN {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNSwxMUw2LjUsNi41SDE3LjVMMTksMTFNMTcuNSwxNkExLjUsMS41IDAgMCwxIDE2LDE0LjVBMS41LDEuNSAwIDAsMSAxNy41LDEzQTEuNSwxLjUgMCAwLDEgMTksMTQuNUExLjUsMS41IDAgMCwxIDE3LjUsMTZNNi41LDE2QTEuNSwxLjUgMCAwLDEgNSwxNC41QTEuNSwxLjUgMCAwLDEgNi41LDEzQTEuNSwxLjUgMCAwLDEgOCwxNC41QTEuNSwxLjUgMCAwLDEgNi41LDE2TTE4LjkyLDZDMTguNzIsNS40MiAxOC4xNiw1IDE3LjUsNUg2LjVDNS44NCw1IDUuMjgsNS40MiA1LjA4LDZMMywxMlYyMEExLDEgMCAwLDAgNCwyMUg1QTEsMSAwIDAsMCA2LDIwVjE5SDE4VjIwQTEsMSAwIDAsMCAxOSwyMUgyMEExLDEgMCAwLDAgMjEsMjBWMTJMMTguOTIsNloiIC8+DQo8L3N2Zz4=) !important;
}

.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq.objects-ktZjG4 {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTIsMjJBMiwyIDAgMCwwIDE0LDIwSDEwQTIsMiAwIDAsMCAxMiwyMk0xOCwxNlYxMUMxOCw3LjkzIDE2LjM2LDUuMzYgMTMuNSw0LjY4VjRBMS41LDEuNSAwIDAsMCAxMiwyLjVBMS41LDEuNSAwIDAsMCAxMC41LDRWNC42OEM3LjYzLDUuMzYgNiw3LjkyIDYsMTFWMTZMNCwxOFYxOUgyMFYxOEwxOCwxNloiIC8+DQo8L3N2Zz4=) !important;
}

.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq.symbols-3xtDtJ {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTIsMjEuMzVMMTAuNTUsMjAuMDNDNS40LDE1LjM2IDIsMTIuMjcgMiw4LjVDMiw1LjQxIDQuNDIsMyA3LjUsM0M5LjI0LDMgMTAuOTEsMy44MSAxMiw1LjA4QzEzLjA5LDMuODEgMTQuNzYsMyAxNi41LDNDMTkuNTgsMyAyMiw1LjQxIDIyLDguNUMyMiwxMi4yNyAxOC42LDE1LjM2IDEzLjQ1LDIwLjAzTDEyLDIxLjM1WiIgLz4NCjwvc3ZnPg==) !important;
}

.emojiPicker-3m1S-j .categories-1feg4n .item-16cXuq.flags-3peqg9 {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTQuNCw2TDE0LDRINVYyMUg3VjE0SDEyLjZMMTMsMTZIMjBWNkgxNC40WiIgLz4NCjwvc3ZnPg==) !important;
}

.bda-dark #bda-qem {
	height: 36px !important;
	border: none !important;
}

.bda-dark #bda-qem:not(:empty) ~ .emojiPicker-3m1S-j {
	border-radius: 0 0 var(--border-radius) var(--border-radius) !important;
}

.bda-dark #bda-qem button {
	position: relative !important;
	background: transparent !important;
	border-radius: 0;
	box-shadow: none;
	border: none;
}

.bda-dark #bda-qem #bda-qem-twitch,
.bda-dark #bda-qem #bda-qem-favourite,
.bda-dark #bda-qem #bda-qem-emojis {
	width: 36px;
	height: 36px;
	background-position: 50% 50% !important;
	background-repeat: no-repeat !important;
	font-size: 0;
}

.bda-dark #bda-qem button:before {
	position: absolute;
	content: " ";
	width: 36px;
	height: 36px;
	top: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	opacity: 0.25;
	transition: 250ms ease all;
}

.bda-dark #bda-qem button:hover:before {
	opacity: 0.5;
}

.bda-dark #bda-qem button.active:before {
	opacity: 1;
}

.bda-dark #bda-qem #bda-qem-twitch:before {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNCwySDIyVjE0TDE3LDE5SDEzTDEwLDIySDdWMTlIMlY2TDQsMk0yMCwxM1Y0SDZWMTZIOVYxOUwxMiwxNkgxN0wyMCwxM00xNSw3SDE3VjEySDE1VjdNMTIsN1YxMkgxMFY3SDEyWiIgLz4NCjwvc3ZnPg==);
}

.bda-dark #bda-qem #bda-qem-favourite:before {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTIsMTcuMjdMMTguMTgsMjFMMTYuNTQsMTMuOTdMMjIsOS4yNEwxNC44MSw4LjYyTDEyLDJMOS4xOSw4LjYyTDIsOS4yNEw3LjQ1LDEzLjk3TDUuODIsMjFMMTIsMTcuMjdaIiAvPg0KPC9zdmc+);
}

.bda-dark #bda-qem #bda-qem-emojis:before {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTIsMTcuNUMxNC4zMywxNy41IDE2LjMsMTYuMDQgMTcuMTEsMTRINi44OUM3LjY5LDE2LjA0IDkuNjcsMTcuNSAxMiwxNy41TTguNSwxMUExLjUsMS41IDAgMCwwIDEwLDkuNUExLjUsMS41IDAgMCwwIDguNSw4QTEuNSwxLjUgMCAwLDAgNyw5LjVBMS41LDEuNSAwIDAsMCA4LjUsMTFNMTUuNSwxMUExLjUsMS41IDAgMCwwIDE3LDkuNUExLjUsMS41IDAgMCwwIDE1LjUsOEExLjUsMS41IDAgMCwwIDE0LDkuNUExLjUsMS41IDAgMCwwIDE1LjUsMTFNMTIsMjBBOCw4IDAgMCwxIDQsMTJBOCw4IDAgMCwxIDEyLDRBOCw4IDAgMCwxIDIwLDEyQTgsOCAwIDAsMSAxMiwyME0xMiwyQzYuNDcsMiAyLDYuNSAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaIiAvPg0KPC9zdmc+);
}

.bda-dark #bda-qem button:after {
	top: -34px;
	left: 0;
	right: 0;
	margin: 0 auto;
}

.bda-dark #bda-qem #bda-qem-twitch:after {
	content: "Twitch emotes";
	width: 67px;
}

.bda-dark #bda-qem #bda-qem-favourite:after {
	content: "Favorite emotes";
	width: 73px;
}

.bda-dark #bda-qem #bda-qem-emojis:after {
	content: "Emojis";
	width: 32px;
}

#bda-qem-emojis {
	border-radius: 0 !important;
}

.emojiPicker-3m1S-j .header-1nkwgG {
	position: relative;
	z-index: 99999;
}

.diversitySelector-O3ea2c .popout-2lja3I {
	border: none;
}

.emojiPicker-3m1S-j .dimmer-3iH-5D.visible-3k45bQ {
	top: 0 !important;
	background: rgba(0,0,0,0.5) !important;
	z-index: 999;
}

.emojiPicker-3m1S-j .search-bar.search-bar-light .search-bar-inner {
	background: transparent !important;
	border: none !important;
	border-bottom: 2px solid #666 !important;
	border-radius: 0 !important;
}

.emojiPicker-3m1S-j .search-bar {
	border-radius: 2px !important;
}

.emojiPicker-3m1S-j .scroller-3vODG7 .emojiItem-109bjA.selected-39BZ4S {
	background-color: rgba(255,255,255,0.1);
}


/*
 *
 *	MEMBERS LIST
 *
 */

.base-3dtUhz,
.channels-Ie2l6A {
	border-radius: 0 !important;
}

.channels-Ie2l6A .scroller-2FKFPG {
	padding: 0 8px 0 0 !important;
}

.channel-members-loading .heading {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAiIGhlaWdodD0iNTAiPjxwYXRoIGZpbGw9IiMxNjE3MWEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMGgyNDB2NTBIMFYwem0zMCAzNGMwLTMuMzE0IDIuNjktNiA2LjAwMy02aDUzLjk5NEM5My4zMTIgMjggOTYgMzAuNjkzIDk2IDM0YzAgMy4zMTQtMi42OSA2LTYuMDAzIDZIMzYuMDAzQzMyLjY4OCA0MCAzMCAzNy4zMDcgMzAgMzR6Ii8+PC9zdmc+) !important; 
}

.channel-members-loading .member {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAiIGhlaWdodD0iNDAiPjxwYXRoIGZpbGw9IiMxNjE3MWEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMGgyNDB2NDBIMFYwem0zMCAyMGMwLTguMjg0IDYuNzE0LTE1IDE1LTE1IDguMjg0IDAgMTUgNi43MTQgMTUgMTUgMCA4LjI4NC02LjcxNCAxNS0xNSAxNS04LjI4NCAwLTE1LTYuNzE0LTE1LTE1em00MCAwYzAtMi43NiAyLjIzLTUgNC45OTMtNWg5MC4wMTRjMi43NTcgMCA0Ljk5MyAyLjI0NCA0Ljk5MyA1IDAgMi43Ni0yLjIzIDUtNC45OTMgNUg3NC45OTNDNzIuMjM2IDI1IDcwIDIyLjc1NiA3MCAyMHoiLz48L3N2Zz4=) !important; 
}

.channel-members-loading .background {
	background-image: linear-gradient(90deg, #212225, rgba(35,35,35,0.7), #212225) !important;
}

.channel-members .member {
	overflow: visible;
}

.channel-members .member:hover {
	background: #26292e;
}

.channel-members .member.member-status-offline,
.memberOffline-2lN7gt {
	filter: grayscale(100%) !important;
}

.channel-members .member.member-status-offline .member-inner,
.memberOffline-2lN7gt .content-OzHfo4 {
	opacity: 0.35 !important;
}

.channel-members .avatar-small .status {
	border-color: var(--main-color);
}

.ownerIcon-uZ6mE7 path {
	fill: #aaa !important;
}

.streaming-2_dnHe {
	animation: streaming-flash 1.4s linear infinite;
}

/* MEMBERS LIST -> USER POPOUT */

.userPopout-3XzG_A {
	position: relative !important;
	width: 310px !important;
	max-height: 90vh !important;
	z-index: 99999999 !important;
}

.popout-3sVMXz.popoutTopLeft-b5Eb3O .emojiPicker-3g68GS,
.popout-3sVMXz.popout-top-left .emojiPicker-3g68GS {
	margin: 0 0 0 40px !important;
}

.popout-3sVMXz.popoutLeft-30WmrD.noArrow-3BYQ0Z.noShadow-321ZPm,
.popout-3sVMXz.popout-left.noArrow-3BYQ0Z.noShadow-321ZPm {
	transform: translateX(-111%) translateY(0%) translateZ(0px) !important;
	animation: show-user-status 350ms var(--default-animation);
	opacity: 1;
}

.headerNormal-1cioxU .avatarWrapperNormal-1wU7gX,
.headerNormal-1cioxU .headerText-3tKBWq {
	z-index: 2;
}

.avatarHintInner-2PEhr7,
.avatarHintInner-Dco91E {
	color: transparent;
}

.avatarHintInner-2PEhr7:after,
.avatarHintInner-Dco91E:after {
	position: absolute;
	content: " ";
	width: 60px;
	height: 60px;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMiw0QTQsNCAwIDAsMSAxNiw4QTQsNCAwIDAsMSAxMiwxMkE0LDQgMCAwLDEgOCw4QTQsNCAwIDAsMSAxMiw0TTEyLDE0QzE2LjQyLDE0IDIwLDE1Ljc5IDIwLDE4VjIwSDRWMThDNCwxNS43OSA3LjU4LDE0IDEyLDE0WiIgLz4NCjwvc3ZnPg==) no-repeat;
}

.headerTop-1QGMLs {
	position: relative !important;
	height: 160px !important;
}

.body-3rkFrF,
.body-3ljq11,
.body-3iLsc4 {
	position: relative !important;
	max-height: 40vh !important;
	overflow-y: scroll !important;
	overflow-x: hidden !important;
}

@media(max-height: 720px) {
	.body-3rkFrF,
	.body-3ljq11,
	.body-3iLsc4 {
		max-height: 30vh !important;
	}
}

@media(max-height: 615px) {
	.body-3rkFrF,
	.body-3ljq11,
	.body-3iLsc4 {
		max-height: 20vh !important;
	}
}

.root-SR8cQa {
	overflow-y: auto;
}

.root-SR8cQa .scroller-2FKFPG {
	overflow: hidden !important;
}

.body-3ND3kc {
	height: auto !important;
}

.listRow-hutiT_:hover {
	background: rgba(255,255,255,0.035) !important;
}

.avatar-verified {
	filter: drop-shadow(0 0 3px rgba(0,0,0,0.75));
}

.avatar-verified path {
	d: path('M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z') !important;
	transform: scale(0.8);
}

.assetsSmallImage-3WEvRP[src="https://cdn.discordapp.com/app-assets/385061381344591872/385446737927733248.png?size=64"],
.assets-30Reyb .assetsSmallImageUserPopout-dXG26U[src="https://cdn.discordapp.com/app-assets/385061381344591872/385446737927733248.png?size=64"] {
	content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEwLDE2LjVWNy41TDE2LDEyTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWiIgLz48L3N2Zz4=) !important;
	border: none !important;
}

.assetsSmallImage-3WEvRP[src="https://cdn.discordapp.com/app-assets/385061381344591872/385749346920169492.png?size=64"],
.assets-30Reyb .assetsSmallImageUserPopout-dXG26U[src="https://cdn.discordapp.com/app-assets/385061381344591872/385749346920169492.png?size=64"] {
	content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE1LDE2SDEzVjhIMTVNMTEsMTZIOVY4SDExTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWiIgLz48L3N2Zz4=) !important;
}

.assetsLargeMaskActivityFeed-o7F47L, .assetsLargeMaskProfile-2u315x {
	mask: none !important;
}

.contentImagesProfile-11JToa,
.contentImagesUserPopout-3BH9C7 {
	position: relative !important;
}

.timestamp-3IDuMO {
	position: absolute;
	top: 0;
	right: 0;
}

.assetsGameIcon-14Ewum[src="/assets/a5eba102f5b5e413df2b65c73f288afa.svg"] {
	content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE1LjA3LDExLjI1TDE0LjE3LDEyLjE3QzEzLjQ1LDEyLjg5IDEzLDEzLjUgMTMsMTVIMTFWMTQuNUMxMSwxMy4zOSAxMS40NSwxMi4zOSAxMi4xNywxMS42N0wxMy40MSwxMC40MUMxMy43OCwxMC4wNSAxNCw5LjU1IDE0LDlDMTQsNy44OSAxMy4xLDcgMTIsN0EyLDIgMCAwLDAgMTAsOUg4QTQsNCAwIDAsMSAxMiw1QTQsNCAwIDAsMSAxNiw5QzE2LDkuODggMTUuNjQsMTAuNjcgMTUuMDcsMTEuMjVNMTMsMTlIMTFWMTdIMTNNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQzIyLDYuNDcgMTcuNSwyIDEyLDJaIiAvPjwvc3ZnPg==) !important;
}

.gameIcon-_0rmMm[style='background-image: url("/assets/a5eba102f5b5e413df2b65c73f288afa.svg");'] {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE1LjA3LDExLjI1TDE0LjE3LDEyLjE3QzEzLjQ1LDEyLjg5IDEzLDEzLjUgMTMsMTVIMTFWMTQuNUMxMSwxMy4zOSAxMS40NSwxMi4zOSAxMi4xNywxMS42N0wxMy40MSwxMC40MUMxMy43OCwxMC4wNSAxNCw5LjU1IDE0LDlDMTQsNy44OSAxMy4xLDcgMTIsN0EyLDIgMCAwLDAgMTAsOUg4QTQsNCAwIDAsMSAxMiw1QTQsNCAwIDAsMSAxNiw5QzE2LDkuODggMTUuNjQsMTAuNjcgMTUuMDcsMTEuMjVNMTMsMTlIMTFWMTdIMTNNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQzIyLDYuNDcgMTcuNSwyIDEyLDJaIiAvPjwvc3ZnPg==) !important;
}

.quickMessage-1yeL4E {
	background: transparent !important;
	border: none;
	border-bottom: 2px solid #666 !important;
	border-radius: 0;
}

.connectedAccount-36nQx7 {
	width: 246px;
	margin: 16px 0 0 0;
	border: none !important;
}

#autocomplete-popout {
	border: none !important;
}

#autocomplete-popout .autocomplete-scroller {
	padding: 8px 0;
}

.quickMessage-1yeL4E {
	padding: 8px 0 !important;
	background: transparent !important;
	border: none !important;
	border-bottom: 2px solid #444 !important;
	border-radius: 0 !important;
}

.headerSpotify-zpWxgT .activity-11LB_k {
	position: relative;
	padding: 0 !important;
}

.headerSpotify-zpWxgT .headerTextNormal-2mGWX3 {
	display: none !important;
}

.headerSpotify-zpWxgT .bodyNormal-2D39hT {
	padding: 10px 10px 0 10px !important;
}

.headerSpotify-zpWxgT .contentImagesUserPopout-1vLdRA {
	margin: 6px 0 0 10px;
}

.headerSpotify-zpWxgT .timeBarUserPopout-AWPFf2 {
	position: absolute;
	width: 100%;
	top: 0;
	margin: 0;
}

.headerSpotify-zpWxgT .timeBarUserPopout-AWPFf2 .flex-1xMQg5 {
	position: absolute !important;
	flex: 0 !important;
	width: 68px !important;
	top: -14px !important;
	right: 6px !important;
	opacity: 0;
	transition: 200ms ease all;
}

.headerSpotify-zpWxgT:hover .timeBarUserPopout-AWPFf2 .flex-1xMQg5 {
	opacity: 1;
}

.headerSpotify-zpWxgT .textLeft-3EZXG6 {
	flex: 0 !important;
	margin: 0 16px 0 0;
}

.headerSpotify-zpWxgT .textLeft-3EZXG6:after {
	position: absolute;
	content: "/";
	left: 30px;
}

.headerSpotify-zpWxgT .listeningActionsUserPopout-Ga2V_N {
	padding: 0 10px 10px 10px;
}

.headerSpotify-zpWxgT .bar-3urHkF,
.headerSpotify-zpWxgT .barInner-3NDaY_ {
	border-radius: 0;
}

.listenAlongIcon-2WbU7U {
	color: var(--spotify-color);
}

.tabBarContainer-1s1u-z,
.activity-1ythUs {
	border: none !important;
}

.headerPlaying-2eYqm9,
.headerPlaying-2Q7mBy,
.headerPlaying-j0WQBV {
	background: var(--popout-color) !important;
}

.topSectionNormal-2-vo2m,
.topSectionPlaying-1J5E4n {
	background: #202225;
}

.headerTop-1QGMLs,
.headerTop-27AvhA,
.headerTop-3C2Zn0,
.header-2Lg0Oe,
.header-QKLPzZ,
.connectionHeader-2MDqhu {
	background: rgba(0,0,0,0.15);
}

.activity-11LB_k,
.topSectionSpotify-1lI0-P .headerFill-adLl4x,
.topSectionStreaming-1Tpf5X .headerFill-adLl4x {
	background: transparent !important;
}

.headerSpotify-zpWxgT .activity-11LB_k button,
.headerStreaming-2FjmGz .activity-11LB_k button {
	width: 100% !important;
	background: #fff !important;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}

.listeningActionsProfile-1fYwru .button-1Pkqso:not(:first-child),
.listeningActionsUserPopout-Ga2V_N .button-1Pkqso:not(:first-child) {
	padding: 0 !important;
}

.headerSpotify-zpWxgT .activity-11LB_k button:active,
.headerStreaming-2FjmGz .activity-11LB_k button:active {
	background: #fff !important;
	box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2) !important;
}

.headerSpotify-1fSJPO .activity-AFBUEw button.disabled-uc2Cqc,
.headerSpotify-26yUf5 .activity-3NviKQ button.disabled-uc2Cqc,
.headerStreaming-3F-wjT .activity-AFBUEw button.disabled-uc2Cqc,
.headerStreaming-lmgoma .activity-3NviKQ button.disabled-uc2Cqc {
	box-shadow: none !important;
}

.headerSpotify-zpWxgT .activity-11LB_k button {
	color: var(--spotify-color) !important;
}

.headerSpotify-zpWxgT .activity-11LB_k button use {
	fill: var(--spotify-color);
}

.headerStreaming-2FjmGz .activity-11LB_k button {
	color: var(--stream-color) !important;
}

.headerStreaming-2FjmGz .activity-11LB_k button use {
	fill: var(--stream-color);
}

.topSectionSpotify-1lI0-P button,
.topSectionStreaming-1Tpf5X button,
.headerStreaming-lmgoma button {
	background: #fff !important;
}

.topSectionSpotify-1lI0-P button {
	color: var(--spotify-color) !important;
}

.topSectionSpotify-1lI0-P use {
	fill: var(--spotify-color) !important;
}

.topSectionSpotify-1lI0-P .assetsLargeImageProfile-3YXDex,
.headerSpotify-zpWxgT .assetsLargeImageUserPopout-3Pp8BK {
	border-radius: 50%;
}

.topSectionStreaming-1Tpf5X button,
.headerStreaming-lmgoma button {
	color: var(--stream-color) !important;
}

.topSectionStreaming-1Tpf5X use,
.headerStreaming-lmgoma use {
	fill: var(--stream-color) !important;
}

.additionalActionsIcon-WiVlux {
	background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEyLDE2QTIsMiAwIDAsMSAxNCwxOEEyLDIgMCAwLDEgMTIsMjBBMiwyIDAgMCwxIDEwLDE4QTIsMiAwIDAsMSAxMiwxNk0xMiwxMEEyLDIgMCAwLDEgMTQsMTJBMiwyIDAgMCwxIDEyLDE0QTIsMiAwIDAsMSAxMCwxMkEyLDIgMCAwLDEgMTIsMTBNMTIsNEEyLDIgMCAwLDEgMTQsNkEyLDIgMCAwLDEgMTIsOEEyLDIgMCAwLDEgMTAsNkEyLDIgMCAwLDEgMTIsNFoiIC8+PC9zdmc+) !important;
}

.buttonBrandInverted-VFL7Yc {
	color: #fff;
}

/* MEMBERS LIST -> STATUS & MASK */

.maskProfile-1ObLFT,
.mask-3OgeRz {
	-webkit-mask: none !important;
	mask: none !important;
}

.status-2s6iDp,
.status-oxiHuE,
.avatarStatus-3Ay1VL,
.statusProfile-3ynqtt {
	top: 0 !important;
	border: none !important;
	box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2) !important;
}

.status-2s6iDp {
	width: 10px;
	height: 10px;
	right: -2px;
}

.status-2s6iDp:after {
	display: none;
}

.statusOnlineProfile-C7N-xU:before,
.statusIdleProfile-3lQI6a:before,
.statusDndProfile-33i43o:before,
.statusOfflineProfile-9tGGr-:before,
.statusInvisibleProfile-3iFEOq:before {
	top: -6px;
	left: 24px;
}

.statusOnlineProfile-C7N-xU:before {
	content: "Online";
}

.statusIdleProfile-3lQI6a:before {
	content: "Away";
}

.statusDndProfile-33i43o:before {
	content: "Do not disturb";
	width: 64px;
}

.statusOfflineProfile-9tGGr-:before,
.statusInvisibleProfile-3iFEOq:before {
	content: "Offline";
}

.topSectionSpotify-1lI0-P .content-3JfFJh {
	position: inherit !important;
	margin: 19px 8px 0 20px;
}

.topSectionSpotify-1lI0-P .listeningActionsProfile-1fYwru {
	width: auto;
	margin: 19px 0 0 0;
}

.topSectionSpotify-1lI0-P .timeBarProfile-10b-fm {
	position: absolute !important;
	width: 100% !important;
	top: 130px;
	left: 0;
	margin: 0 !important;
}


.topSectionSpotify-1lI0-P .timeBarProfile-10b-fm .bar-3urHkF,
.topSectionSpotify-1lI0-P .timeBarProfile-10b-fm .barInner-3NDaY_ {
	border-radius: 0 !important;
}

.topSectionSpotify-1lI0-P .timeBarProfile-10b-fm .flex-1xMQg5 {
	position: absolute !important;
	flex: 0 !important;
	width: 68px !important;
	top: -14px !important;
	right: 14px !important;
}

.topSectionSpotify-1lI0-P .timeBarProfile-10b-fm .textLeft-3EZXG6 {
	position: relative;
	flex: 0 !important;
	margin: 0 16px 0 0;
}

.topSectionSpotify-1lI0-P .timeBarProfile-10b-fm .textLeft-3EZXG6:after {
	position: absolute;
	content: " / ";
	left: 30px;
}

.topSectionSpotify-1lI0-P .activity-1ythUs {
	padding: 20px 20px 20px 20px;
}

.topSectionSpotify-1lI0-P .headerTextNormal-2mGWX3 {
	display: none;
}

/* MEMBERS LIST -> ROLES */

.guild-settings-members-member:hover {
	border: none !important;
}

.root-uMQa_6 button {
	border-radius: 16px !important;
}

.role-2irmRk {
	position: relative;
	min-width: 32px;
	height: 32px;
	padding: 0;
	border-radius: 16px;
	border: none;
	background: var(--popout-color);
	transition: 200ms ease;
}

.role-2irmRk button,
.roleCircle-3xAZ1j,
.roleCircleButton-377y0l {
	width: 32px;
	height: 32px;
	margin: 0;
	border-radius: 50% !important;
	box-shadow: none !important;
	cursor: auto;
}

.role-2irmRk button {
	cursor: pointer;
}

.roleRemoveIcon-2-TeGW {
	position: relative;
	width: 24px;
	height: 24px;
	display: block;
	transition: 200ms ease all;
	transform: scale(0.25);
	opacity: 0;
}

.roleCircleButton-377y0l {
	position: relative;
	overflow: visible;
}

.roleCircleButton-377y0l:after,
.actionButton-VzECiy:after {
	position: absolute;
	content: "Remove role";
	width: 72px;
	height: 30px;
	top: 1px;
	left: 36px;
	right: 0;
	margin: 0 auto;
	line-height: 30px;
	background-color: rgba(97,97,97,0.9) !important;
	box-shadow: 0px 5px 15px rgba(0,0,0,0.2) !important;
	color: #fff;
	font-size: 0.75em;
	border-radius: 2px;
	pointer-events: none;
	transition: 250ms ease all;
	z-index: 3;
	opacity: 0;
}

.actionButton-VzECiy:after {
	content: "Add role";
	width: 54px;
	font-size: 0.9em;
}

.roleCircleButton-377y0l:hover:after,
.actionButton-VzECiy:hover:after {
	opacity: 1;
}

.role-2irmRk:hover .roleRemoveIcon-2-TeGW {
	transform: scale(1) rotate(90deg);
	opacity: 1;
}

.roleName-32vpEy {
	position: relative;
	margin: 0 8px 0 4px;
	z-index: 2;
}

.actionButton-VzECiy {
	border-radius: 16px !important;
	box-shadow: none !important;
}

.actionButton-VzECiy:before {
	display: none !important;
}

.actionButton-VzECiy svg {
	transition: 200ms ease all;
}

.actionButton-VzECiy.popout-open svg {
	transform: rotate(45deg);
}

.member-perms .member-perm .perm-circle {
	width: 30px !important;
	height: 30px !important;
	margin-right: 2px !important;
	border-radius: 50% !important;
}
.member-perms .member-perm .name {
	margin-right: 8px !important;
}

/* MEMBERS LIST -> ROLES -> ADD ROLE */

#autocomplete-popout .autocomplete-arrow-wrapper {
	position: absolute;
	left: 0;
	right: 0;
	bottom: -6px;
	margin: 0 auto !important;
}

#autocomplete-popout .autocomplete-arrow {
	box-shadow: none !important;
}

/* MEMBERS LIST -> GAMEPLAY */

.background-cBzfUc {
	border-top-left-radius: 0 !important;
	border-top-right-radius: 2px !important;
}


/*
 *
 *	VOICE CONNECTED
 *
 */

.container-1UB9sr {
	position: relative;
	top: 1px;
	background: #111114;
	border-bottom: none;
}

.wrapper-29NfPK .actions-2vadYq .center-1Vp33r {
	height: 36px !important;
	padding: 4px 8px;
}

.iconButtonDefault-2cKx7-.unavailable-1P8t7x {
	cursor: auto;
}

.iconButtonDefault-2cKx7-.unavailable-1P8t7x:after {
	display: none;
}

.buttonInfo-3nkbOt {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTExLDlIMTNWN0gxMU0xMiwyMEM3LjU5LDIwIDQsMTYuNDEgNCwxMkM0LDcuNTkgNy41OSw0IDEyLDRDMTYuNDEsNCAyMCw3LjU5IDIwLDEyQzIwLDE2LjQxIDE2LjQxLDIwIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyTTExLDE3SDEzVjExSDExVjE3WiIgLz48L3N2Zz4=) !important;
}

.buttonDisconnect-3W_SJc {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEyLDlDMTAuNCw5IDguODUsOS4yNSA3LjQsOS43MlYxMi44MkM3LjQsMTMuMjIgNy4xNywxMy41NiA2Ljg0LDEzLjcyQzUuODYsMTQuMjEgNC45NywxNC44NCA0LjE3LDE1LjU3QzQsMTUuNzUgMy43NSwxNS44NiAzLjUsMTUuODZDMy4yLDE1Ljg2IDIuOTUsMTUuNzQgMi43NywxNS41NkwwLjI5LDEzLjA4QzAuMTEsMTIuOSAwLDEyLjY1IDAsMTIuMzhDMCwxMi4xIDAuMTEsMTEuODUgMC4yOSwxMS42N0MzLjM0LDguNzcgNy40Niw3IDEyLDdDMTYuNTQsNyAyMC42Niw4Ljc3IDIzLjcxLDExLjY3QzIzLjg5LDExLjg1IDI0LDEyLjEgMjQsMTIuMzhDMjQsMTIuNjUgMjMuODksMTIuOSAyMy43MSwxMy4wOEwyMS4yMywxNS41NkMyMS4wNSwxNS43NCAyMC44LDE1Ljg2IDIwLjUsMTUuODZDMjAuMjUsMTUuODYgMjAsMTUuNzUgMTkuODIsMTUuNTdDMTkuMDMsMTQuODQgMTguMTQsMTQuMjEgMTcuMTYsMTMuNzJDMTYuODMsMTMuNTYgMTYuNiwxMy4yMiAxNi42LDEyLjgyVjkuNzJDMTUuMTUsOS4yNSAxMy42LDkgMTIsOVoiIC8+PC9zdmc+) !important;
}


/*
 *
 *	POPOUT MENU
 *
 */

.popout-3sVMXz header {
	background-color: var(--accent-color) !important;
}

.container-3nXdBP hr {
	border: 1px solid #444;
	border-bottom: none;
}

.popout-3sVMXz.popoutTopRight-3BzFIE section:after,
.popout-3sVMXz.popoutTop-3uu9vG section:after,
.popout-3sVMXz.popout-top-right section:after,
.popout-3sVMXz.popout-top section:after {
	border-top-color: var(--popout-alt);
}

.popout-3sVMXz.popoutBottom-1YbShG,
.popout-3sVMXz.popout-bottom {
	height: auto !important;
}

.popoutLeft-30WmrD.noArrow-3BYQ0Z,
.popout-left.noArrow-3BYQ0Z {
	transform: translateX(-101%) translateY(0%) translateZ(0px) !important;
}

/* POPOUT MENU -> SERVER OPTIONS */

.menu-Sp6bN1 {
	padding: 8px 0;
}

.item-1GzJrl.invite-YM1l0n,
.item-1GzJrl:hover .invite-YM1l0n,
.item-1GzJrl.leave-2bjeRM,
.item-1GzJrl:hover {
	color: #99aab5 !important;
}

/* POPOUT MENU -> SERVER OPTIONS -> INVITE */

.icon-2doZ3q[style='background-image: url("/assets/d4ff0d2af68cd1119f0d16ef79d1369c.svg");'] {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiAgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjOTlhYWI1IiBkPSJNMTUsMTRDMTIuMzMsMTQgNywxNS4zMyA3LDE4VjIwSDIzVjE4QzIzLDE1LjMzIDE3LjY3LDE0IDE1LDE0TTYsMTBWN0g0VjEwSDFWMTJINFYxNUg2VjEySDlWMTBNMTUsMTJBNCw0IDAgMCwwIDE5LDhBNCw0IDAgMCwwIDE1LDRBNCw0IDAgMCwwIDExLDhBNCw0IDAgMCwwIDE1LDEyWiIgLz48L3N2Zz4=) !important;
}

/* POPOUT MENU -> SERVER OPTIONS -> SERVER SETTINGS */

.icon-2doZ3q[style='background-image: url("/assets/9a93097ab591379729c68f15a17b26af.svg");'] {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiAgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjOTlhYWI1IiBkPSJNMTIsMTUuNUEzLjUsMy41IDAgMCwxIDguNSwxMkEzLjUsMy41IDAgMCwxIDEyLDguNUEzLjUsMy41IDAgMCwxIDE1LjUsMTJBMy41LDMuNSAwIDAsMSAxMiwxNS41TTE5LjQzLDEyLjk3QzE5LjQ3LDEyLjY1IDE5LjUsMTIuMzMgMTkuNSwxMkMxOS41LDExLjY3IDE5LjQ3LDExLjM0IDE5LjQzLDExTDIxLjU0LDkuMzdDMjEuNzMsOS4yMiAyMS43OCw4Ljk1IDIxLjY2LDguNzNMMTkuNjYsNS4yN0MxOS41NCw1LjA1IDE5LjI3LDQuOTYgMTkuMDUsNS4wNUwxNi41Niw2LjA1QzE2LjA0LDUuNjYgMTUuNSw1LjMyIDE0Ljg3LDUuMDdMMTQuNSwyLjQyQzE0LjQ2LDIuMTggMTQuMjUsMiAxNCwySDEwQzkuNzUsMiA5LjU0LDIuMTggOS41LDIuNDJMOS4xMyw1LjA3QzguNSw1LjMyIDcuOTYsNS42NiA3LjQ0LDYuMDVMNC45NSw1LjA1QzQuNzMsNC45NiA0LjQ2LDUuMDUgNC4zNCw1LjI3TDIuMzQsOC43M0MyLjIxLDguOTUgMi4yNyw5LjIyIDIuNDYsOS4zN0w0LjU3LDExQzQuNTMsMTEuMzQgNC41LDExLjY3IDQuNSwxMkM0LjUsMTIuMzMgNC41MywxMi42NSA0LjU3LDEyLjk3TDIuNDYsMTQuNjNDMi4yNywxNC43OCAyLjIxLDE1LjA1IDIuMzQsMTUuMjdMNC4zNCwxOC43M0M0LjQ2LDE4Ljk1IDQuNzMsMTkuMDMgNC45NSwxOC45NUw3LjQ0LDE3Ljk0QzcuOTYsMTguMzQgOC41LDE4LjY4IDkuMTMsMTguOTNMOS41LDIxLjU4QzkuNTQsMjEuODIgOS43NSwyMiAxMCwyMkgxNEMxNC4yNSwyMiAxNC40NiwyMS44MiAxNC41LDIxLjU4TDE0Ljg3LDE4LjkzQzE1LjUsMTguNjcgMTYuMDQsMTguMzQgMTYuNTYsMTcuOTRMMTkuMDUsMTguOTVDMTkuMjcsMTkuMDMgMTkuNTQsMTguOTUgMTkuNjYsMTguNzNMMjEuNjYsMTUuMjdDMjEuNzgsMTUuMDUgMjEuNzMsMTQuNzggMjEuNTQsMTQuNjNMMTkuNDMsMTIuOTdaIiAvPjwvc3ZnPg==) !important;
}

/* POPOUT MENU -> SERVER OPTIONS -> CREATE CHANNEL */

.icon-2doZ3q[style='background-image: url("/assets/2fc862597335421b35a79aa9aaba4a86.svg");'] {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiAgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjOTlhYWI1IiBkPSJNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWiIgLz48L3N2Zz4=) !important;
}

/* POPOUT MENU -> SERVER OPTIONS -> CREATE CATEGORY */

.icon-2doZ3q[style='background-image: url("/assets/52bc30f8a2b1a51f808a785819ca00b5.svg");'] {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiAgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjOTlhYWI1IiBkPSJNMywzSDlWN0gzVjNNMTUsMTBIMjFWMTRIMTVWMTBNMTUsMTdIMjFWMjFIMTVWMTdNMTMsMTNIN1YxOEgxM1YyMEg3TDUsMjBWOUg3VjExSDEzVjEzWiIgLz48L3N2Zz4=) !important;
}

/* POPOUT MENU -> SERVER OPTIONS -> NOTIFICATION SETTINGS */

.icon-2doZ3q[style='background-image: url("/assets/6a711bd91522e885413464a88a4e3c69.svg");'] {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiAgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjOTlhYWI1IiBkPSJNMTQsMjBBMiwyIDAgMCwxIDEyLDIyQTIsMiAwIDAsMSAxMCwyMEgxNE0xMiwyQTEsMSAwIDAsMSAxMywzVjQuMDhDMTUuODQsNC41NiAxOCw3LjAzIDE4LDEwVjE2TDIxLDE5SDNMNiwxNlYxMEM2LDcuMDMgOC4xNiw0LjU2IDExLDQuMDhWM0ExLDEgMCAwLDEgMTIsMloiIC8+PC9zdmc+) !important;
}

.overridePlaceholder-14_rPI {
	border: 1px solid #444 !important;
}

/* POPOUT MENU -> SERVER OPTIONS -> PRIVACY SETTINGS */

.icon-2doZ3q[style='background-image: url("/assets/6afcd5d6a8c9d467e27e1bb48755dce0.svg");'] {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiAgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjOTlhYWI1IiBkPSJNMTAsMTdMNiwxM0w3LjQxLDExLjU5TDEwLDE0LjE3TDE2LjU5LDcuNThMMTgsOU0xMiwxTDMsNVYxMUMzLDE2LjU1IDYuODQsMjEuNzQgMTIsMjNDMTcuMTYsMjEuNzQgMjEsMTYuNTUgMjEsMTFWNUwxMiwxWiIgLz48L3N2Zz4=) !important;
}

/* POPOUT MENU -> SERVER OPTIONS -> CHANGE NICKNAME */

.icon-2doZ3q[style='background-image: url("/assets/bc11a9099f5729962c095cb49d5042f6.svg");'] {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiAgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjOTlhYWI1IiBkPSJNMjAuNzEsNy4wNEMyMS4xLDYuNjUgMjEuMSw2IDIwLjcxLDUuNjNMMTguMzcsMy4yOUMxOCwyLjkgMTcuMzUsMi45IDE2Ljk2LDMuMjlMMTUuMTIsNS4xMkwxOC44Nyw4Ljg3TTMsMTcuMjVWMjFINi43NUwxNy44MSw5LjkzTDE0LjA2LDYuMThMMywxNy4yNVoiIC8+PC9zdmc+) !important;
}

/* POPOUT MENU -> SERVER OPTIONS -> HIDE MUTED CHANNELS */

.icon-2doZ3q[style='background-image: url("/assets/858df73648ac3877a22156da2e69a5fd.svg");'] {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiAgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjOTlhYWI1IiBkPSJNMTEuODMsOUwxNSwxMi4xNkMxNSwxMi4xMSAxNSwxMi4wNSAxNSwxMkEzLDMgMCAwLDAgMTIsOUMxMS45NCw5IDExLjg5LDkgMTEuODMsOU03LjUzLDkuOEw5LjA4LDExLjM1QzkuMDMsMTEuNTYgOSwxMS43NyA5LDEyQTMsMyAwIDAsMCAxMiwxNUMxMi4yMiwxNSAxMi40NCwxNC45NyAxMi42NSwxNC45MkwxNC4yLDE2LjQ3QzEzLjUzLDE2LjggMTIuNzksMTcgMTIsMTdBNSw1IDAgMCwxIDcsMTJDNywxMS4yMSA3LjIsMTAuNDcgNy41Myw5LjhNMiw0LjI3TDQuMjgsNi41NUw0LjczLDdDMy4wOCw4LjMgMS43OCwxMCAxLDEyQzIuNzMsMTYuMzkgNywxOS41IDEyLDE5LjVDMTMuNTUsMTkuNSAxNS4wMywxOS4yIDE2LjM4LDE4LjY2TDE2LjgxLDE5LjA4TDE5LjczLDIyTDIxLDIwLjczTDMuMjcsM00xMiw3QTUsNSAwIDAsMSAxNywxMkMxNywxMi42NCAxNi44NywxMy4yNiAxNi42NCwxMy44MkwxOS41NywxNi43NUMyMS4wNywxNS41IDIyLjI3LDEzLjg2IDIzLDEyQzIxLjI3LDcuNjEgMTcsNC41IDEyLDQuNUMxMC42LDQuNSA5LjI2LDQuNzUgOCw1LjJMMTAuMTcsNy4zNUMxMC43NCw3LjEzIDExLjM1LDcgMTIsN1oiIC8+PC9zdmc+) !important;
}

/* POPOUT MENU -> SERVER OPTIONS -> LEAVE SERVER */

.icon-2doZ3q[style='background-image: url("/assets/00de6b3cbb5c4dbcec817c91262f5f5b.svg");'] {
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiAgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjOTlhYWI1IiBkPSJNMTksM0g1QzMuODksMyAzLDMuODkgMyw1VjlINVY1SDE5VjE5SDVWMTVIM1YxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWNUMyMSwzLjg5IDIwLjEsMyAxOSwzTTEwLjA4LDE1LjU4TDExLjUsMTdMMTYuNSwxMkwxMS41LDdMMTAuMDgsOC40MUwxMi42NywxMUgzVjEzSDEyLjY3TDEwLjA4LDE1LjU4WiIgLz48L3N2Zz4=) !important;
}

@media(max-height: 500px) {
	.menu-Sp6bN1:not(.alt-3btY0e) {
		/*height: 320px !important;
		overflow-y: scroll;*/
	}
}

.separator-2zcjq8 {
	margin: 8px 0;
	border-bottom: 1px solid #444;
}

/* POPOUT MENU -> MASK */

.backdrop-2ohBEd {
	z-index: 99999;
}

/* POPOUT MENU -> USER STATUS */

.popout-3sVMXz.popoutTop-3uu9vG,
.popout-3sVMXz.popoutTopLeft-b5Eb3O,

.popout-3sVMXz.popout-top,
.popout-3sVMXz.popout-top-left {
	overflow: visible !important;
}

.container-iksrDt,
.container-2Thooq {
	position: relative;
	height: 68px !important;
	top: 1px;
	background: #181a1d;
	z-index: 100 !important;
}

.container-iksrDt .status,
.container-2Thooq .status {
	top: 0;
	border: none;
}

/* POPOUT MENU -> AFK CHANNEL */

.modal-3HD5ck h2.title-3sZWYQ {
	margin: 0;
	padding: 20px 0;
	text-align: left;
}

.modal-3HD5ck .body-Mj9Oxz {
	text-align: left;
}

.minorAction-OVxOke {
	width: auto;
	margin: 0;
	line-height: 36px;
}


/*
 *
 *	AUDIO AND VIDEO CHAT/SCREENSHARING
 *
 */

.content-1_NQ-_ {
	padding: 0 16px 16px;
}

.wrapper-2h3Puq {
	overflow: visible;
}

.incomingCallInner-2rV0UJ {
	border: none !important;
}

.selectorButtonSelected-3ApyX9 {
	background: var(--accent-color);
}

.group-2dAfBy svg[name="Nitro"] path {
	fill: var(--accent-color) !important;
}

.modal-3HD5ck .group-2dAfBy {
	background: #2f3136 !important;
}

.tiles-2aXG_k {
	background-color: var(--popout-color) !important;
	box-shadow: none !important;
}

.wrapper-29NfPK .actions-2vadYq .center-1Vp33r,
.private-channel-call.full-screen .private-channel-call-actions .side,
.private-channel-call.no-chat .center,
.private-channel-call.no-chat .side,
.private-channel-call.normal .center,
.private-channel-call.normal .side,
.private-channel-call .icons-wrapper {
	padding: 4px 12px;
	background: var(--main-color);
	border: none;
}

.pictureInPictureVideo-2w62Uz {
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}

.callAvatarBorder-1D_KaE.video-3GgX2M.selected-2esnyn:not(.speaking-oCqYMI):not(.soundsharing-102bS9),
.callAvatarBorder-1D_KaE,
.callAvatarWrapper-TICyxO.video-3GgX2M .ripple-16ZT2p {
	border-radius: 50%;
}

@keyframes outgoing-call-pulse-MDA9-S {
	0% {transform:scale3d(0.85,0.85,1);opacity:0.6}
	11.28% {transform:scale3d(1.3,1.3,1);opacity:0}
	12% {transform:scale3d(0.85,0.85,1)}
	13% {opacity:0.6}
	28.448%{transform:scale3d(0.85,0.85,1);opacity:0.6}
	39.728% {transform:scale3d(1.3,1.3,1);opacity:0}
	40% {transform:scale3d(0.85,0.85,1)}
	41% {opacity:0.6}
	to {transform:scale3d(0.85,0.85,1);opacity:0.6}
}

.wrapper-29NfPK.fullScreen-3DKbL8 .actions-2vadYq .center-1Vp33r,
.wrapper-29NfPK.fullScreen-3DKbL8 .actions-2vadYq .side-kO0bwV,
.wrapper-29NfPK.noChat-2qlG4B .center-1Vp33r,
.wrapper-29NfPK.noChat-2qlG4B .side-kO0bwV,
.wrapper-29NfPK.normal-2GSW0u .center-1Vp33r,
.wrapper-29NfPK.normal-2GSW0u .side-kO0bwV {
	border: none !important;
}

.callAvatar-v-u4BM.voice-2D-tt_ .callAvatarStatus-3y6S04 {
	top: 0;
	border: none;
}

.callAvatarBorder-1D_KaE.voice-2D-tt_.speaking-oCqYMI {
	box-shadow: inset 0 0 0 3px #888;
}

.iconButtonStatic-2cPMA6[style='background-image: url("/assets/ea5bf2e8b48cfe21ea60588e1568aad6.svg");'] {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjYTNhM2E0IiBkPSJNMy4yNywyTDIsMy4yN0w0LjczLDZINEExLDEgMCAwLDAgMyw3VjE3QTEsMSAwIDAsMCA0LDE4SDE2QzE2LjIsMTggMTYuMzksMTcuOTIgMTYuNTQsMTcuODJMMTkuNzMsMjFMMjEsMTkuNzNNMjEsNi41TDE3LDEwLjVWN0ExLDEgMCAwLDAgMTYsNkg5LjgyTDIxLDE3LjE4VjYuNVoiIC8+DQo8L3N2Zz4=) !important;
}

.iconButtonStatic-2cPMA6[style='background-image: url("/assets/990826f372c3d1d1792e3f1df06609bb.svg");'] {
	top: 1px !important;
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjYTNhM2E0IiBkPSJNMTksMTFDMTksMTIuMTkgMTguNjYsMTMuMyAxOC4xLDE0LjI4TDE2Ljg3LDEzLjA1QzE3LjE0LDEyLjQzIDE3LjMsMTEuNzQgMTcuMywxMUgxOU0xNSwxMS4xNkw5LDUuMThWNUEzLDMgMCAwLDEgMTIsMkEzLDMgMCAwLDEgMTUsNVYxMUwxNSwxMS4xNk00LjI3LDNMMjEsMTkuNzNMMTkuNzMsMjFMMTUuNTQsMTYuODFDMTQuNzcsMTcuMjcgMTMuOTEsMTcuNTggMTMsMTcuNzJWMjFIMTFWMTcuNzJDNy43MiwxNy4yMyA1LDE0LjQxIDUsMTFINi43QzYuNywxNCA5LjI0LDE2LjEgMTIsMTYuMUMxMi44MSwxNi4xIDEzLjYsMTUuOTEgMTQuMzEsMTUuNThMMTIuNjUsMTMuOTJMMTIsMTRBMywzIDAgMCwxIDksMTFWMTAuMjhMMyw0LjI3TDQuMjcsM1oiIC8+DQo8L3N2Zz4=) !important;
}

.callAvatar-v-u4BM.video-3GgX2M:not(.disabled-29UbL1) {
	border-radius: 50% !important;
}


/*
 *
 *	POPOUTS
 *
 */

.popout-3sVMXz.popoutBottom-1YbShG,
.popout-3sVMXz.popoutBottomLeft-JehOp2,
.popout-3sVMXz.popoutBottomRight-2JrySt,
.popout-3sVMXz.popoutTop-3uu9vG,
.popout-3sVMXz.popoutTopLeft-b5Eb3O,
.popout-3sVMXz.popoutTopRight-3BzFIE,

.popout-3sVMXz.popout-bottom,
.popout-3sVMXz.popout-bottom-left,
.popout-3sVMXz.popout-bottom-right,
.popout-3sVMXz.popout-top
.popout-3sVMXz.popout-top-left,
.popout-3sVMXz.popout-top-right {
	width: auto !important;
	transition: 0ms ease !important;
}

.popout-3sVMXz.popoutTopLeft-b5Eb3O,
.popout-3sVMXz.popout-top-left {
	z-index: 99 !important;
}

.popout-3sVMXz.popoutBottomRight-2JrySt.noShadow-321ZPm[style*="z-index: 1100;"] {
	z-index: 9999999 !important;
}

.popout-3sVMXz.popoutBottom-1YbShG[style*="overflow: hidden; visibility: visible;"],
.popout-3sVMXz.popout-bottom[style*="overflow: hidden; visibility: visible;"] {
	width: 216px !important;
	height: auto !important;
	top: 84px !important;
	left: 81px !important;
	margin: 0;
	box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2) !important;
	transform: none !important;
}

.popout-3sVMXz.popoutBottom-1YbShG[style*="overflow: hidden; visibility: visible;"],
.popout-3sVMXz.popout-bottom[style*="overflow: hidden; visibility: visible;"],
.private-channel-recipients-invite,
.messagesPopoutWrap-1MQ1bW,
.searchPopout-1vUlP3 {
	animation: top-pop-out 400ms var(--default-animation) !important;
}

body:active .private-channel-recipients-invite:not(:active),
/*body:active .messagesPopoutWrap-1MQ1bW:not(:active),*/
body:active #autocomplete-popout:not(:active),
body:active .searchPopout-1vUlP3:not(:active),
body:active .userPopout-3XzG_A:not(:active),
body:active .container-1WaXoH:not(:active),
body:active .container-3cGP6G:not(:active) {
	opacity: 0;
	transition: all 200ms ease;
}

/* POPOUTS -> EMOJI POPOUT MENUS */

.popoutTopRight-3BzFIE {
	animation: emoji-open 250ms var(--default-animation);
}

body:active .popoutTopRight-3BzFIE:not(:active) {
	animation: emoji-close 250ms var(--default-animation);
}

.popoutLeft-30WmrD.noArrow-3BYQ0Z:not(.noShadow-321ZPm) {
	animation: emoji-open-alt 250ms var(--default-animation);
}

body:active .popoutLeft-30WmrD.noArrow-3BYQ0Z:not(.noShadow-321ZPm):not(:active) {
	animation: emoji-close-alt 250ms var(--default-animation);
}

/* POPOUTS -> OTHER POPOUTS */

.attachPopout-1n-ZKM {
	position: relative;
	top: -2px;
	left: -4px;
	padding: 8px 0;
	animation: bottom-pop-out 400ms var(--default-animation);
}

.attachPopoutRow-KrE-f6 {
	border-radius: 0;
}

body:active .attachPopout-1n-ZKM:not(:active) {
	animation: close-popout-bottom 250ms var(--default-animation);
}

.popout-3sVMXz.popoutBottomRight-2JrySt {
	animation: pinned-messages-open 400ms var(--default-animation);
}

body:active .popout-3sVMXz.popoutBottomRight-2JrySt:not(:active) {
	animation: pinned-messages-close 400ms var(--default-animation);
}


.themed-popout .header {
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}


/*
 *
 *	STATUS PICKER
 *
 */

.alt-3btY0e.menu-Sp6bN1 {
	position: fixed;
	width: 240px !important;
	top: initial !important;
	bottom: 68px !important;
	left: 70px;
	padding: 0;
	border-radius: 0 !important;
	box-shadow: none;
	z-index: 99 !important;
	animation: show-status 250ms var(--default-animation);
}

body:active .alt-3btY0e.menu-Sp6bN1:not(:active) {
	transform: translateY(100%);
	transition: 400ms var(--default-animation) !important;
}

.alt-3btY0e:active .item-1GzJrl .status-oxiHuE {
	opacity: 0;
	transition: all 100ms var(--default-animation);
}

body:active .alt-3btY0e.menu-Sp6bN1 .item-1GzJrl:not(:active) {
	opacity: 0;
	transition: 150ms ease all !important;
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl:active .status-oxiHuE {
	opacity: 1;
	transition: all 100ms var(--default-animation);
}

.alt-3btY0e.menu-Sp6bN1:active {
	opacity: 0;
	transform: translateY(100%);
	transition: all 100ms ease 100ms;
}

.alt-3btY0e.menu-Sp6bN1 .separator-2zcjq8 {
	display: none;
}

.alt-3btY0e.menu-Sp6bN1,
.listeningAlong-13-Udx {
	background: #111114 !important;
}

.listeningAlong-13-Udx {
	margin: 0 !important;
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl {
	position: relative;
	display: inline-block;
	width: 60px;
	height: 68px;
	padding: 0;
	vertical-align: top;
	background: transparent;
	overflow: hidden;
	animation: status 300ms var(--default-animation) backwards;
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl:nth-child(1) {
	animation-delay: 100ms !important;
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl:nth-child(3) {
	animation-delay: 140ms !important;
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl:nth-child(4) {
	animation-delay: 180ms !important;
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl:nth-child(5) {
	animation-delay: 220ms !important;
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl:hover {
	background: #111114 !important;
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl:hover .status-3fQvEa {
	transform: scale(2.25);
}


.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl .status-3fQvEa,
.alt-3btY0e .item-1GzJrl .statusIconText-3b4TkH {
	position: absolute;
	width: 40px !important;
	height: 40px !important;
	top: 0 !important;
	left: 0 !important;
	right: 0 !important;
	bottom: 0 !important;
	margin: auto !important;
	border-radius: 50%;
	transform: scale(1);
	transition: 300ms var(--default-animation);
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl .status-3fQvEa.status-oxiHuE {
	box-shadow: none !important;
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl:hover .status-3fQvEa.online-2S838R:after,
.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl:hover .status-3fQvEa.idle-3DEnRT:after,
.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl:hover .status-3fQvEa.dnd-1_xrcq:after,
.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl:hover .status-3fQvEa.invisible-1kp8Z0:after {
	opacity: 1;
	visibility: visible;
	transform: translateX(-0.5px);
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl .status-3fQvEa.online-2S838R:after,
.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl .status-3fQvEa.idle-3DEnRT:after,
.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl .status-3fQvEa.dnd-1_xrcq:after,
.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl .status-3fQvEa.invisible-1kp8Z0:after {
	content: " ";
	display: block;
	position: absolute;
	width: 15px;
	height: 15px;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto !important;
	background-size: 100%;
	background-repeat: no-repeat;
	opacity: 0;
	visibility: hidden;
	transition: 300ms var(--default-animation);
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl .status-3fQvEa.online-2S838R:after {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMmYzMTM2IiBkPSJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaIiAvPjwvc3ZnPg==);
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl .status-3fQvEa.idle-3DEnRT:after {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMmYzMTM2IiBkPSJNMTIsMjBBNyw3IDAgMCwxIDUsMTNBNyw3IDAgMCwxIDEyLDZBNyw3IDAgMCwxIDE5LDEzQTcsNyAwIDAsMSAxMiwyME0xMiw0QTksOSAwIDAsMCAzLDEzQTksOSAwIDAsMCAxMiwyMkE5LDkgMCAwLDAgMjEsMTNBOSw5IDAgMCwwIDEyLDRNMTIuNSw4SDExVjE0TDE1Ljc1LDE2Ljg1TDE2LjUsMTUuNjJMMTIuNSwxMy4yNVY4TTcuODgsMy4zOUw2LjYsMS44NkwyLDUuNzFMMy4yOSw3LjI0TDcuODgsMy4zOU0yMiw1LjcyTDE3LjQsMS44NkwxNi4xMSwzLjM5TDIwLjcxLDcuMjVMMjIsNS43MloiIC8+PC9zdmc+);
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl .status-3fQvEa.dnd-1_xrcq:after {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMmYzMTM2IiBkPSJNMTksMTNINVYxMUgxOVYxM1oiIC8+PC9zdmc+);
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl .status-3fQvEa.invisible-1kp8Z0:after {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMmYzMTM2IiBkPSJNMTEuODMsOUwxNSwxMi4xNkMxNSwxMi4xMSAxNSwxMi4wNSAxNSwxMkEzLDMgMCAwLDAgMTIsOUMxMS45NCw5IDExLjg5LDkgMTEuODMsOU03LjUzLDkuOEw5LjA4LDExLjM1QzkuMDMsMTEuNTYgOSwxMS43NyA5LDEyQTMsMyAwIDAsMCAxMiwxNUMxMi4yMiwxNSAxMi40NCwxNC45NyAxMi42NSwxNC45MkwxNC4yLDE2LjQ3QzEzLjUzLDE2LjggMTIuNzksMTcgMTIsMTdBNSw1IDAgMCwxIDcsMTJDNywxMS4yMSA3LjIsMTAuNDcgNy41Myw5LjhNMiw0LjI3TDQuMjgsNi41NUw0LjczLDdDMy4wOCw4LjMgMS43OCwxMCAxLDEyQzIuNzMsMTYuMzkgNywxOS41IDEyLDE5LjVDMTMuNTUsMTkuNSAxNS4wMywxOS4yIDE2LjM4LDE4LjY2TDE2LjgxLDE5LjA4TDE5LjczLDIyTDIxLDIwLjczTDMuMjcsM00xMiw3QTUsNSAwIDAsMSAxNywxMkMxNywxMi42NCAxNi44NywxMy4yNiAxNi42NCwxMy44MkwxOS41NywxNi43NUMyMS4wNywxNS41IDIyLjI3LDEzLjg2IDIzLDEyQzIxLjI3LDcuNjEgMTcsNC41IDEyLDQuNUMxMC42LDQuNSA5LjI2LDQuNzUgOCw1LjJMMTAuMTcsNy4zNUMxMC43NCw3LjEzIDExLjM1LDcgMTIsN1oiIC8+PC9zdmc+);
}

.colorblindMode.theme-dark .online-2S838R,
.colorblindMode.theme-dark .idle-3DEnRT,
.colorblindMode.theme-dark .dnd-1_xrcq,
.colorblindMode.theme-dark .invisible-1kp8Z0 {
	background-image: none; 
}

.colorblindMode .alt-3btY0e.menu-Sp6bN1 .item-1GzJrl .status-3fQvEa.online-2S838R:after,
.colorblindMode .alt-3btY0e.menu-Sp6bN1 .item-1GzJrl .status-3fQvEa.idle-3DEnRT:after,
.colorblindMode .alt-3btY0e.menu-Sp6bN1 .item-1GzJrl .status-3fQvEa.dnd-1_xrcq:after,
.colorblindMode .alt-3btY0e.menu-Sp6bN1 .item-1GzJrl .status-3fQvEa.invisible-1kp8Z0:after {
	visibility: visible;
	opacity: 1 !important;
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl .statusIconText-3b4TkH div:not(.status-3fQvEa) {
	display: none;
}

.alt-3btY0e.menu-Sp6bN1 .item-1GzJrl .helper-2c73HK {
	display: none;
}


/*
 *
 *	SMALL POPOUT/OPTION POPOUT
 *
 */

.popout-3sVMXz {
	box-shadow: none !important;
}

.container-3cGP6G {
	width: 128px;
	padding: 8px 0;
	border: none;
}

.container-3cGP6G .button-38aScr {
	width: 100%;
	margin: 0;
	padding: 8px 12px;
	text-align: left;
	color: #aaa;
	font-size: 0.8em;
	font-weight: 500;
	border-radius: 0 !important;
	justify-content: flex-start;
	transition: 200ms ease all;
}

.container-3cGP6G .button-38aScr:hover,
.item-2J1YMK:active {
	background: rgba(255,255,255,0.05) !important;
	color: #aaa;
}

.container-3cGP6G .button-38aScr .contents-18-Yxp {
	text-align: left !important;
}

.item-2J1YMK:active {
	box-shadow: none !important;
}


/*
 *
 *	PINNED MESSAGES
 *
 */

.iconBadge-2dji3k {
	width: 6px !important;
	height: 6px !important;
	top: -4px !important;
	right: 4px !important;
	border-color: transparent !important;
}

.messagesPopoutWrap-1MQ1bW {
	max-height: 85vh !important;
	border: none !important;
}

/* PINNED MESSAGES -> HEADER */

.header-ykumBX {
	box-shadow: none !important;
}

/* PINNED MESSAGES -> MESSAGES */

.messageGroupWrapper-o-Zw7G {
	padding: 8px 0 !important;
	background: transparent !important;
	border: none !important;
}

.messageGroupWrapper-o-Zw7G .containerCozy-jafyvG {
	position: relative !important;
	padding: 12px !important;
	background: var(--message-alt) !important;
	border-top-left-radius: 0 !important;
}

.messageGroupWrapper-o-Zw7G .contentCozy-3XX413 {
	overflow: hidden;
}

.messageGroupWrapper-o-Zw7G .headerCozy-2N9HOL:first-child:before {
	top: -12px;
	left: -18px;
	border-right-color: var(--message-alt);
}

.messageGroupWrapper-o-Zw7G .markup-2BOw-j pre code {
	background: rgba(0,0,0,0.25) !important;
}

.messagesPopoutWrap-1MQ1bW .messagesPopout-24nkyi .message-group .message:before {
	display: none !important;
	opacity: 0 !important;
}

.messageGroupWrapper-o-Zw7G .actionButtons-1sUUug {
	margin: 0;
	background: transparent !important;
	box-shadow: none !important;
}

.messageGroupWrapper-o-Zw7G .actionButtons-1sUUug .jumpButton-3DTcS_ {
	background: rgba(255,255,255,0.1) !important;
	color: #999 !important;
}

.messageGroupWrapper-o-Zw7G .actionButtons-1sUUug .jumpButton-3DTcS_:hover {
	background: rgba(255,255,255,0.15) !important;
	color: #aaa !important;
}

.themedPopout-1uUNjn .header .subtitle,
.themedPopout-1uUNjn .text {
	color: #ccc !important;
}


/*
 *
 *	SEARCH
 *
 */

.search-l1Wz-Q {
	padding: 2px;
	background: rgba(255,255,255,0.05);
}

.search .search-bar {
	background: transparent !important;
	border-bottom: 0px solid #444 !important;
	border-radius: 0 !important;
}

.searchPopout-1vUlP3 {
	border: none !important;
}

.searchPopout-1vUlP3 .option-96V44q::after {
	background: transparent !important;
}

.searchPopout-1vUlP3 .option-96V44q:hover,
.searchPopout-1vUlP3 .option-96V44q:active {
	background: var(--hover-color) !important;
}

.searchPopout-1vUlP3 .option-96V44q.selected-rZcOL-::after {
	background: transparent !important;
}

.searchPopout-1vUlP3 .searchOption-zQ-1l6 .filter-3Y_im- {
	margin: -4px 2px -4px -4px;
	padding: 4px;
}

.searchPopout-1vUlP3 .searchOption-zQ-1l6 .filter-3Y_im-,
.searchPopout-1vUlP3 .searchOption-zQ-1l6.selected-rZcOL- .filter-3Y_im- {
	color: #fff;
}

.searchPopout-1vUlP3 .resultsGroup-r_nuzN::before {
	display: none !important;
}

.searchPopout-1vUlP3 .search-query {
	border: none;
}

.search-results-wrap .search-header {
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}

.search-results-wrap .search-header .total-results {
	opacity: 1;
}

.search-results-wrap .search-header .tab {
	color: #999 !important;
	opacity: 1;
}

.search-results-wrap .search-header .tab.selected {
	color: #fff !important;
}

.search-results-wrap .search-result:before,
.search-results-wrap .search-result:after {
	background: transparent !important;
}

.search-results-wrap .search-result .hit {
	margin: 8px 0 !important;
}

.search-results-wrap .search-result .search-result-message.hit,
.search-results-wrap .search-result.expanded {
	border: none !important;
}

.search-results-wrap .search-result .search-result-message {
	border-radius: 3px !important;
	background: transparent !important;
	border: none !important;
}

.search-results-wrap .search-result .search-result-message .message-group {
	margin: 0 !important;
}


/*
 *
 *	RECENT MENTIONS
 *
 */

.themedPopout-25DgLi .header-SsaQ8X .title-23FrqZ {
	color: #eee !important;
}

.tab-bar.TOP .tab-bar-item,
.tab-bar.TOP .tab-bar-item.selected {
	border-bottom-color: transparent !important;
}

.tab-bar.TOP .tab-bar-item.selected {
	color: #ccc !important;
}


/*
 *
 *	ANIMATIONS
 *
 */

@keyframes show-user-status {
	from { transform: translateX(-119%) translateY(0%) translateZ(0px); opacity: 0; }
}

@keyframes top-pop-out {
	from { transform: translate(0, -20px); opacity: 0; }
}

@keyframes bottom-pop-out {
	from { transform: translate(0, 20px); opacity: 0; }
}

@keyframes close-popout-bottom {
	to { transform: translate(0, 16px); opacity: 0; }
}

@keyframes pinned-messages-open {
	from { transform: translate(-100%, -24px); opacity: 0; }
}

@keyframes pinned-messages-close {
	to { transform: translate(-100%, -24px); opacity: 0; }
}

@keyframes show-status {
	from { transform: translateY(100%) translateX(0%) translateZ(0px); }
}

@keyframes searchpopout {
	0% { transform:translateY(-10px); opacity: 0; }
}

@keyframes status {
	from { transform: scale(0); opacity: 0 }
}

@keyframes opacity {
	from { opacity: 0; }
}

@keyframes open-context-menu {
	from { transform: scale(1,0.5); }
}

@keyframes scale {
	from { transform: scale(0); }
}

@keyframes streaming-flash {
	0% { box-shadow: 0 0 0 0px rgba(89,54,149,0.4); }
	50% { box-shadow: 0 0 0 4px rgba(89,54,149,0.65); }
	100% { box-shadow: 0 0 0 8px rgba(89,54,149,0); }
}

@keyframes audio-flash {
	0% { box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 0 0 0px rgba(63,81,181,0.4); }
	50% { box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 0 0 6px rgba(63,81,181,0.65); }
	100% { box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 0 0 12px rgba(63,81,181,0); }
}

@keyframes shadowPulse-AwLIHr {
	0% { box-shadow: 0 0 6px rgba(63,81,181,0.3); }
	50% { box-shadow: 0 0 10px rgba(63,81,181,0.6); }
	to { box-shadow: 0 0 6px rgba(63,81,181,0.3); }
}

@keyframes emoji-open {
	from { transform: translate(-100%, calc(24px - 100%)); opacity: 0; }
}

@keyframes emoji-close {
	to { transform: translate(-100%, calc(-100% + 16px)); opacity: 0; }
}

@keyframes emoji-open-alt {
	from { transform: translate(calc(-100% - 3px), 16px); opacity: 0; }
}

@keyframes emoji-close-alt {
	to { transform: translate(calc(-100% - 3px), 16px); opacity: 0; }
}


/*
 *
 *	SLIDER
 *
 */

.bar-2Qqk5Z {
	top: 19px;
	height: 2px;
}

.grabber-3mFHz2 {
	position: absolute !important;
	width: 12px;
	height: 12px;
	top: 27px;
	border-radius: 50%;
	transition: transform 200ms ease, height 200ms ease, width 200ms ease;
	box-shadow: none;
}

.grabber-3mFHz2:active,
.item-1Yvehc .mini-dmm9yo .grabber-3mFHz2:active {
	width: 18px !important;
	height: 18px !important;
	transform: translate(-2.5px, -2.5px);
}

.bubble-3we2di {
	position: absolute !important;
	top: -36px;
	left: -22px;
}

.item-1Yvehc .mini-dmm9yo .bar-2Qqk5Z {
	height: 2px;
}

.item-1Yvehc .mini-dmm9yo .grabber-3mFHz2 {
	width: 10px;
	height: 10px;
	top: 9px;
}

.item-1Yvehc .mini-dmm9yo .grabber-3mFHz2:active {
	transform: translate(-3px, -3px);
}

.item-1Yvehc .mini-dmm9yo .bubble-3we2di {
	top: -32px;
}


/*
 *
 *	SEARCH PLUGIN
 *
 */

#searchBar {
	position: absolute !important;
	width: 100% !important;
	top: 40px;
}

#searchBarInner {
	position: relative;
	width: 100%;
	height: 48px !important;
	padding: 0 !important;
	background: var(--popout-color);
	border-radius: 0 !important;
}

#searchBarInner.search-bar .search-bar-inner {
	margin: 0 8px 0 12px !important;
	padding: 0 !important;
	border: none !important;
}

#searchBarInner.search-bar .search-bar-inner:after {
	position: absolute;
	content: " ";
	width: 1px;
	height: 100%;
	background: #666;
	right: -84px;
}

#searchBarInner #searchBarUp.btn,
#searchBarInner #searchBarDown.btn,
#searchBarInner #searchBarClose {
	min-width: 36px !important;
	max-width: 36px !important;
	height: 36px !important;
	margin: 0 !important;
	background-position: 50%;
	background-repeat: no-repeat;
	border: none !important;
	border-radius: 50% !important;
	box-shadow: none !important;
	font-size: 0 !important;
}

#searchBarInner #searchBarUp.btn:hover,
#searchBarInner #searchBarDown.btn:hover,
#searchBarInner #searchBarClose:hover {
	background-color: rgba(255,255,255,0.1) !important;
}

#searchBarInner #searchBarUp.btn:active,
#searchBarInner #searchBarDown.btn:active,
#searchBarInner #searchBarClose:active {
	background-color: rgba(255,255,255,0.2) !important;
}

#searchBarInner #searchBarDown.btn {
	margin: 0 8px 0 0 !important;
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNy40MSw4LjU4TDEyLDEzLjE3TDE2LjU5LDguNThMMTgsMTBMMTIsMTZMNiwxMEw3LjQxLDguNThaIiAvPg0KPC9zdmc+);
}

#searchBarInner #searchBarUp.btn {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNy40MSwxNS40MUwxMiwxMC44M0wxNi41OSwxNS40MUwxOCwxNEwxMiw4TDYsMTRMNy40MSwxNS40MVoiIC8+DQo8L3N2Zz4=);
}

#searchBarInner #searchBarClose {
	margin: 0 8px 0 12px !important;
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTksNi40MUwxNy41OSw1TDEyLDEwLjU5TDYuNDEsNUw1LDYuNDFMMTAuNTksMTJMNSwxNy41OUw2LjQxLDE5TDEyLDEzLjQxTDE3LjU5LDE5TDE5LDE3LjU5TDEzLjQxLDEyTDE5LDYuNDFaIiAvPg0KPC9zdmc+);
	background-size: 50% !important;
}

#searchBarInner .checkbox {
	position: relative;
	margin: 0 8px;
	overflow: visible;
}

#searchBarInner .checkbox:after {
	bottom: -36px;
}

#searchBarInner .checkbox:nth-child(4):after {
	content: "Match case";
	width: 52px;
	left: -16px;
}

#searchBarInner .checkbox:nth-child(5):after {
	content: "Names";
	left: -2px;
}

#searchBarInner .checkbox:nth-child(6):after {
	content: "Mentions";
	width: 42px;
	left: -6px;
}

#searchBarInner .checkbox:nth-child(7):after {
	content: "Code";
	left: 4px;
}

#searchBarInner .checkbox:nth-child(4) span:not(:empty),
#searchBarInner .checkbox:nth-child(5) span:not(:empty),
#searchBarInner .checkbox:nth-child(6) span:not(:empty),
#searchBarInner .checkbox:nth-child(7) span:not(:empty) {
	position: relative;
	width: 24px;
	height: 24px;
	margin: 0 0 0 4px;
	background-position: 50%;
	background-repeat: no-repeat;
	font-size: 0;
}

#searchBarInner .checkbox:nth-child(4) span:not(:empty) {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMC40MSwxMy40MUw2LDE5TDcuNDEsMTcuNThMMS44MywxMk0yMi4yNCw1LjU4TDExLjY2LDE2LjE3TDcuNSwxMkw2LjA3LDEzLjQxTDExLjY2LDE5TDIzLjY2LDdNMTgsN0wxNi41OSw1LjU4TDEwLjI0LDExLjkzTDExLjY2LDEzLjM0TDE4LDdaIiAvPg0KPC9zdmc+);
}

#searchBarInner .checkbox:nth-child(5) span:not(:empty) {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTIsNEE0LDQgMCAwLDEgMTYsOEE0LDQgMCAwLDEgMTIsMTJBNCw0IDAgMCwxIDgsOEE0LDQgMCAwLDEgMTIsNE0xMiwxNEMxNi40MiwxNCAyMCwxNS43OSAyMCwxOFYyMEg0VjE4QzQsMTUuNzkgNy41OCwxNCAxMiwxNFoiIC8+DQo8L3N2Zz4=);
}

#searchBarInner .checkbox:nth-child(6) span:not(:empty) {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTIsMTVDMTIuODEsMTUgMTMuNSwxNC43IDE0LjExLDE0LjExQzE0LjcsMTMuNSAxNSwxMi44MSAxNSwxMkMxNSwxMS4xOSAxNC43LDEwLjUgMTQuMTEsOS44OUMxMy41LDkuMyAxMi44MSw5IDEyLDlDMTEuMTksOSAxMC41LDkuMyA5Ljg5LDkuODlDOS4zLDEwLjUgOSwxMS4xOSA5LDEyQzksMTIuODEgOS4zLDEzLjUgOS44OSwxNC4xMUMxMC41LDE0LjcgMTEuMTksMTUgMTIsMTVNMTIsMkMxNC43NSwyIDE3LjEsMyAxOS4wNSw0Ljk1QzIxLDYuOSAyMiw5LjI1IDIyLDEyVjEzLjQ1QzIyLDE0LjQ1IDIxLjY1LDE1LjMgMjEsMTZDMjAuMywxNi42NyAxOS41LDE3IDE4LjUsMTdDMTcuMywxNyAxNi4zMSwxNi41IDE1LjU2LDE1LjVDMTQuNTYsMTYuNSAxMy4zOCwxNyAxMiwxN0MxMC42MywxNyA5LjQ1LDE2LjUgOC40NiwxNS41NEM3LjUsMTQuNTUgNywxMy4zOCA3LDEyQzcsMTAuNjMgNy41LDkuNDUgOC40Niw4LjQ2QzkuNDUsNy41IDEwLjYzLDcgMTIsN0MxMy4zOCw3IDE0LjU1LDcuNSAxNS41NCw4LjQ2QzE2LjUsOS40NSAxNywxMC42MyAxNywxMlYxMy40NUMxNywxMy44NiAxNy4xNiwxNC4yMiAxNy40NiwxNC41M0MxNy43NiwxNC44NCAxOC4xMSwxNSAxOC41LDE1QzE4LjkyLDE1IDE5LjI3LDE0Ljg0IDE5LjU3LDE0LjUzQzE5Ljg3LDE0LjIyIDIwLDEzLjg2IDIwLDEzLjQ1VjEyQzIwLDkuODEgMTkuMjMsNy45MyAxNy42NSw2LjM1QzE2LjA3LDQuNzcgMTQuMTksNCAxMiw0QzkuODEsNCA3LjkzLDQuNzcgNi4zNSw2LjM1QzQuNzcsNy45MyA0LDkuODEgNCwxMkM0LDE0LjE5IDQuNzcsMTYuMDcgNi4zNSwxNy42NUM3LjkzLDE5LjIzIDkuODEsMjAgMTIsMjBIMTdWMjJIMTJDOS4yNSwyMiA2LjksMjEgNC45NSwxOS4wNUMzLDE3LjEgMiwxNC43NSAyLDEyQzIsOS4yNSAzLDYuOSA0Ljk1LDQuOTVDNi45LDMgOS4yNSwyIDEyLDJaIiAvPg0KPC9zdmc+);
}

#searchBarInner .checkbox:nth-child(7) span:not(:empty) {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+DQogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTQuNiwxNi42TDE5LjIsMTJMMTQuNiw3LjRMMTYsNkwyMiwxMkwxNiwxOEwxNC42LDE2LjZNOS40LDE2LjZMNC44LDEyTDkuNCw3LjRMOCw2TDIsMTJMOCwxOEw5LjQsMTYuNloiIC8+DQo8L3N2Zz4=);
}


/*
 *
 *	SCROLLBARS
 *
 */

.scroller-fzNley::-webkit-scrollbar-track {
	border-radius: 0 !important;
}

.scroller-fzNley::-webkit-scrollbar-track,
.channels-3g2vYe .scroller-fzNley::-webkit-scrollbar-track,
.channel-members::-webkit-scrollbar-track,
.root-2sNHUF::-webkit-scrollbar-track,
.ui-standard-sidebar-view .sidebar-region .scroller-fzNley::-webkit-scrollbar-track,
.ui-standard-sidebar-view .content-region .scroller-fzNley::-webkit-scrollbar-track {
	background: transparent !important;
}

.menu-Sp6bN1:not(.alt-3btY0e)::-webkit-scrollbar-track {
	background: #2c2f33 !important;
}

.body-3rkFrF::-webkit-scrollbar,
.body-3ljq11::-webkit-scrollbar,
.root-2sNHUF::-webkit-scrollbar,
.menu-Sp6bN1:not(.alt-3btY0e)::-webkit-scrollbar,
.textArea-2Spzkt::-webkit-scrollbar {
	width: 6px !important;
}

.body-3rkFrF::-webkit-scrollbar-track,
.body-3ljq11::-webkit-scrollbar-track,
.menu-Sp6bN1:not(.alt-3btY0e)::-webkit-scrollbar-track,
.textArea-2Spzkt::-webkit-scrollbar-track {
	margin: 0 !important;
}

::-webkit-scrollbar {
	position: absolute;
	width: 6px !important;
	background: transparent;
}

::-webkit-scrollbar-track {
	background: rgba(0,0,0,0) !important;
}

::-webkit-scrollbar-track-piece {
	border: 0 solid transparent !important;
	background-color: transparent !important;
	margin: 0;
}

::-webkit-scrollbar-thumb {
	display: initial;
	background-color: rgba(255,255,255,0.1) !important;
	border: 0 solid transparent !important;
	border-radius: 0 !important;
}

::-webkit-scrollbar-thumb:hover {
	background-color: rgba(255,255,255,0.125) !important;
}

::-webkit-scrollbar-thumb:active {
	display: initial;
	background-color: rgba(255,255,255,0.15) !important;
}


/*
 *
 *	BETTER DISCORD SETTINGS
 *
 */

.bd-plugin-container,
.bda-slist li {
	padding: 16px !important;
}

.bda-slist li {
	max-height: 500px;
}

.ui-standard-sidebar-view .bda-slist,
.ui-standard-sidebar-view .bda-slist li p,
.ui-standard-sidebar-view .bda-slist li span,
.ui-standard-sidebar-view .bda-slist .bda-description,
.bd-plugin-container .bd-plugin-info .bd-plugin-name,
.bda-slist .bda-name {
	color: #aaa !important;
}

.repo-controls {
	margin: 0 0 16px 0 !important;
}

.bda-slist li:not(.pluginEntry):not(.themeEntry) .bda-name {
	display: block !important;
	max-height: 16px !important;
	margin: 0 0 8px 0 !important;
	font-size: 1em !important;
	font-weight: 500 !important;
	color: #b9bbbe !important;
}

.bda-slist li:not(.pluginEntry):not(.themeEntry) {
	min-height: 48px !important;
	max-height: 480px !important;
	margin: 0 0 8px 0 !important;
	background: var(--card-color) !important;
}

.bda-slist li:last-child {
	margin: 0 0 16px 0 !important;
}

.bda-slist li div:not(.bda-right):nth-of-type(2) {
	margin: 0;
}

.bda-slist .pluginEntry,
.bda-slist .themeEntry {
	margin: 0 0 8px 0 !important;
	padding: 0 !important;
	background: #272a2e !important;
}

.bda-slist .pluginEntry .bda-header,
.bda-slist .pluginEntry .bda-description-wrap,
.bda-slist .themeEntry .bda-header,
.bda-slist .themeEntry .bda-description-wrap {
	padding: 16px;
}

.bda-slist .pluginEntry .bda-footer,
.bda-slist .themeEntry .bda-footer {
	padding: 8px 16px;
}

.bda-slist .pluginEntry .bda-header .bda-name,
.bda-slist .themeEntry .bda-header .bda-name {
	font-size: 1.25em;
}

.bda-slist .pluginEntry .bda-description,
.bda-slist .themeEntry .bda-description {
	max-height: 100px;
	overflow-y: auto;
	margin: 0 !important;
	padding: 0 !important;
}

.bda-slist .bda-footer button:disabled {
	opacity: 1;
}

.scroller-2FKFPG {
	overflow-y: auto !important;
}

.pluginrepo-modal .pluginEntry .favIcon,
.themerepo-modal .themeEntry .favIcon {
	width: 24px !important;
	height: 24px !important;
}

.pluginrepo-modal .pluginEntry .favIcon path,
.themerepo-modal .themeEntry .favIcon path {
	d: path('M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z') !important;
}

.pluginrepo-modal .pluginEntry .favIcon:not(.favorized) path,
.themerepo-modal .themeEntry .favIcon:not(.favorized) path {
	fill: #888 !important;
	stroke: #888 !important;
}

.modal-3HD5ck .header-1R_AjF.marginBottom20-32qID7 {
	margin: 0 !important;
}

.pluginrepo-modal .tab-content .inner-3wn6Q5,
.pluginrepo-modal .tab-content.inner-3wn6Q5,
.themerepo-modal .tab-content .inner-3wn6Q5,
.themerepo-modal .tab-content.inner-3wn6Q5 {
	padding: 16px 12px 0 20px;
}

.ui-standard-sidebar-view #bd-settingspane-container {
	background: var(--main-color) !important;
}

#bd-settingspane-container .ui-switch-item {
	padding: 8px 0;
	border-bottom: 1px solid #444;
}

#bd-settingspane-container .ui-switch-item .ui-switch-wrapper {
	top: 16px !important;
}

#bd-settingspane-container .bda-slist .ui-switch-item {
	padding: 0 !important;
}

#bd-settingspane-container .bda-slist .ui-switch-item.settings-open {
	position: relative !important;
}

#bd-settingspane-container .bda-slist .ui-switch-item.settings-open svg {
	position: absolute !important;
	top: 16px !important;
	right: 16px !important;
}

#bd-settingspane-container .bda-slist .ui-switch-item .ui-switch-wrapper {
	top: 0 !important;
}

#bd-settingspane-container .bda-header {
	padding: 16px !important;
}

#bd-settingspane-container .bda-header .bda-name {
	font-size: 1.25em !important;
}

#bd-settingspane-container .bda-description-wrap {
	padding: 8px 16px !important;
}

#bd-settingspane-container .bda-footer {
	padding: 8px !important;
}

#bd-settingspane-container .ui-switch-item h3 {
	color: #b9bbbe;
}

#bd-settingspane-container .ui-switch-item .style-description {
	line-height: 16px;
	color: #888;
	border: none;
}

#bd-settingspane-container .ui-switch-item:last-child {
	border-bottom: none;
}

#bd-settingspane-container input[type="checkbox"]:after {
	background-color: rgba(65,65,65,0.65);
}

#bd-settingspane-container .bda-description {
	min-height: 24px !important;
	max-height: 96px !important;
	font-size: 16px !important;
	color: #888 !important;
	overflow-y: hidden;
}

#bd-settingspane-container .bda-header .trashIcon {
	top: 24px !important;
	right: 72px;
}

#bd-settingspane-container .bda-right .trashIcon,
#bd-settingspane-container .bda-header .trashIcon {
	right: 60px !important;
}

#bd-settingspane-container .bda-header .trashIcon path,
.bda-footer .trashIcon path {
	d: path('M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z') !important;
	transform: translate(-2px, -2px);
}

#bd-settingspane-container .bda-left {
	width: calc(100% - 115px) !important;
}

#bd-settingspane-container .bda-right {
	position: relative !important;
	width: 100px !important;
	height: 62px !important;
}

#bd-settingspane-container .bda-right button {
	position: absolute;
	right: -6px !important;
	bottom: 0 !important;
}

#bd-settingspane-container .bda-right .ui-switch-wrapper {
	position: absolute !important;
	width: 36px !important;
	height: 14px !important;
	top: 3px;
	right: 0;
	background: transparent !important;
}

#bd-settingspane-container .bda-right .ui-switch-wrapper .ui-switch,
#bd-settingspane-container .bda-right .ui-switch-wrapper .ui-switch:before,
#bd-settingspane-container .bda-right .ui-switch-wrapper .ui-switch:after {
	position: absolute;
	content: " ";
	transition: 200ms ease all;
}

#bd-settingspane-container .bda-right .ui-switch-wrapper .ui-switch {
	width: 100%;
	height: 100%;
	top: 0;
	background: transparent !important;
	border-radius: 7.5px;
	cursor: pointer;
}

#bd-settingspane-container .bda-right .ui-switch-wrapper .ui-switch:before {
	width: 100%;
	height: 100%;
	background: rgba(65,65,65,0.65);
	border-radius: 7.5px;
}

#bd-settingspane-container .bda-right .ui-switch-wrapper .ui-switch:after {
	width: 20px;
	height: 20px;
	top: -3px;
	background: #777;
	border-radius: 50%;
	transform: translateX(-1px);
}

#bd-settingspane-container .bda-right .ui-switch-wrapper input:checked + .ui-switch:before {
	background: #1a3c57;
}

#bd-settingspane-container .bda-right .ui-switch-wrapper input:checked + .ui-switch:after {
	background: var(--accent-color);
	transform: translateX(17px);
}

#bd-settingspane-container .bda-right .ui-switch-wrapper input {
	display: none;
}

#bd-settingspane-container .bda-slist .plugin-settings {
	padding: 16px !important;
}

#bd-settingspane-container .bda-slist .plugin-settings button {
	margin: 0 8px 0 0 !important;
	font-size: 0.9em !important;
}

.ui-standard-sidebar-view .bda-slist li input {
	padding: 6px 0;
	background: transparent; !important;
	border: none !important;
	border-bottom: 2px solid #444 !important;
	color: #aaa !important;
	outline: none !important;
}

.repo-controls .searchWrapper #input-search {
	padding: 4px 0 !important;
}

/* BETTER DISCORD SETTINGS -> SWITCHES */

#bd-settingspane-container .ui-switch-item .ui-switch-wrapper {
	width: 38px;
	height: 20px;
	overflow: visible;
}

#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch {
	height: 14px;
	top: 3px;
}

#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch:before {
	width: 20px;
	height: 20px;
	margin: 0;
	top: -3px;
	left: 0;
}

#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch {
	background-color: rgba(65,65,65,0.65);
}

#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch:before {
	background-color: #777;
}

#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch.checked:before {
	transform: translateX(18px);
}

/* BETTER DISCORD SETTINGS -> BUTTONS */

/*svg.trashIcon path {
	width: 100% !important;
	height: 100% !important;
	d: path('M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z') !important;

}*/

.ui-standard-sidebar-view .bda-slist li button {
	height: 36px !important;
	margin: 0 !important;
	padding: 0 16px !important;
	line-height: 36px !important;
	color: #fff !important;
	font-size: 1em !important;
	font-weight: 500 !important;
}

.ui-standard-sidebar-view .bda-slist .bda-footer .bda-settings-button {
	font-size: 1.15em !important;
}

#bd-settingspane-container .bd-pfbtn,
#bd-settingspane-container .btn-enableall,
#bd-settingspane-container .btn-disableall {
	padding: 0 8px;
	background: transparent !important;
	box-shadow: none !important;
	font-weight: 500 !important;
}

#bd-settingspane-container .btn-enableall,
#bd-settingspane-container .btn-disableall {
	padding: 0;
}

/* BETTER DISCORD SETTINGS -> CUSTOM CSS */

.ace_editor * {
	font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif !important;
}

.ace_content {
	background: var(--message-color) !important;
}

.ace_gutter,
.content-region #bd-customcss-attach-controls,
#bd-customcss-detach-container #bd-customcss-attach-controls {
	background-color: var(--popout-color) !important;
}

.ace-monokai .ace_gutter-active-line {
	background: rgba(0,0,0,0.25) !important;
}

.ace-monokai .ace_marker-layer .ace_active-line {
	background: transparent !important;
}

.ace-monokai .ace_marker-layer .ace_selection {
	background: rgba(255,255,255,0.1) !important;
}

.content-region #bd-customcss-attach-controls,
#bd-customcss-detach-container #bd-customcss-attach-controls {
	border: none !important;
}

.ui-standard-sidebar-view #bd-customcss-attach-controls button,
.bd-detached-css-editor #bd-customcss-attach-controls button {
	margin: 6px 6px 0 0 !important;
	background: var(--popout-alt) !important;
	border: none !important;
	font-weight: normal;
}

/* BETTER DISCORD SETTINGS -> MODAL */

.bd-modal-wrapper .header {
	box-shadow: none !important;
	border-bottom: 1px solid #444 !important;
}

.bd-modal-wrapper .footer-1PYmcw {
	border-top: 1px solid #444 !important;
}


/*
 *
 *	SUPPORTED PLUGINS
 *
 */

/* SUPPORTED PLUGINS -> BetterFormattingRedux */

.bf-toolbar .format {
	width: 27px;
	margin: 0 4px;
	text-align: center;
}

.bf-toolbar .format:hover {
	background: transparent !important;
}

/* SUPPORTED PLUGINS -> ImageGallary */

.image-gallery .imageWrapper-2p5ogY.prev,
.image-gallery .imageWrapper-2p5ogY.next {
	width: 56px !important;
	height: 56px !important;
	top: 0 !important;
	bottom: 0 !important;
	margin: auto 0;
	background-color: var(--popout-alt);
	background-repeat: no-repeat;
	background-position: 50%;
	border-radius: 50% !important;
	cursor: pointer;
	transition: 200ms var(--default-animation);
}

.image-gallery .imageWrapper-2p5ogY.prev {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yMCwxMVYxM0g4TDEzLjUsMTguNUwxMi4wOCwxOS45Mkw0LjE2LDEyTDEyLjA4LDQuMDhMMTMuNSw1LjVMOCwxMUgyMFoiIC8+Cjwvc3ZnPg==);
}

.image-gallery .imageWrapper-2p5ogY.next {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik00LDExVjEzSDE2TDEwLjUsMTguNUwxMS45MiwxOS45MkwxOS44NCwxMkwxMS45Miw0LjA4TDEwLjUsNS41TDE2LDExSDRaIiAvPgo8L3N2Zz4=);
}

.image-gallery .imageWrapper-2p5ogY.prev img,
.image-gallery .imageWrapper-2p5ogY.next img {
	display: none !important;
}
