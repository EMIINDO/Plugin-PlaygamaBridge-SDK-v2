'use strict'
{
    const PLUGIN_ID = 'PlaygamaBridge'
    // callMap Deprecated const PLUGIN_VERSION = '1.19.0'
    const PLUGIN_CATEGORY = 'platform-specific'

    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = (SDK.Plugins.PlaygamaBridge = class PlaygamaBridgePlugin extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID)

            SDK.Lang.PushContext('plugins.' + PLUGIN_ID.toLowerCase())
            this._info.SetName(lang('.name'))
            this._info.SetDescription(globalThis.lang('.description'))
         // callMap Deprecated this._info.SetVersion(PLUGIN_VERSION)
            this._info.SetCategory(PLUGIN_CATEGORY)
            this._info.SetAuthor(globalThis.lang('.author'))
            this._info.SetHelpUrl(globalThis.lang('.help-url'))
            this._info.SetIsSingleGlobal(true)
            this._info.SetSupportedRuntimes(['c3'])

            SDK.Lang.PushContext('.properties')
            this._info.SetProperties([
                new SDK.PluginProperty('check', 'load-sdk-from-cdn', true),
                new SDK.PluginProperty('text', 'custom-cdn-url', ''),
                new SDK.PluginProperty('text', 'game-distribution-game-id', ''),
                new SDK.PluginProperty('text', 'y8-game-id', ''),
                new SDK.PluginProperty('text', 'y8-channel-id', ''),
                new SDK.PluginProperty('text', 'y8-adsense-id', ''),
                new SDK.PluginProperty('text', 'lagged-dev-id', ''),
                new SDK.PluginProperty('text', 'lagged-publisher-id', ''),
                new SDK.PluginProperty('text', 'facebook-placement-id', ''),
                new SDK.PluginProperty('text', 'adsgram-block-id', ''),
                new SDK.PluginProperty('check', 'show-interstitial-on-init', true)
            ]);

            SDK.Lang.PopContext()
            SDK.Lang.PopContext()
        }
    })

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS)
}
