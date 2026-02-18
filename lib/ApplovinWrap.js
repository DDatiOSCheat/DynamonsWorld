
class ApplovinWrap {

    //CONSTS

    APPLOVIN_MODULE_PATH = "cordova-plugin-applovin-max.AppLovinMAX";

    APPLOVIN_SDK_KEY = "BZUN5Or6AWK0snLO4E2IVsXMD00rL9MWksuqEkwOFFP60lU5-XNTNwqbxrRG-oniefXtORFdhfkhODoNmAr84f";

    INTER_AD_UNIT_ID_ANDROID = "5bffe342cc80c5b5";

    REWARD_AD_UNIT_ID_ANDROID = "1a71bd6eeadbae17";
    
    INTER_AD_UNIT_ID_IOS = "7977752ad4f7b52d";

    REWARD_AD_UNIT_ID_IOS = "68b100762eb08bfe";

    //FIELDS

    INTER_AD_UNIT_ID = null;

    REWARD_AD_UNIT_ID = null;

    cordova = null;

    AppLovinMAX = null;

    isCordova = false;

    isInited = false;

    constructor(){
        if (typeof window != 'undefined' && window.cordova) {
            this.cordova = window.cordova;
            this.AppLovinMAX = this.cordova.require(this.APPLOVIN_MODULE_PATH);
            this.isCordova = true;
        }
        else {
            this.isCordova = false;
        }
    }

    setInited() {
        this.isInited = true;
    }

    init() {
        if (this.isCordova) {
                this.setInterstitialId();
                this.setRewardId();
                this.AppLovinMAX.initialize(this.APPLOVIN_SDK_KEY, function (configuration) {
                window.dispatchEvent(new Event("AplovingWasInited"));
        });
        return this.isCordova;
        }
        else {
            return this.isCordova;
        }
    }

    inited() {
        return this.isInited;
    }

    isRewardLoaded() {
        if (this.isInited) {
            return this.AppLovinMAX.isRewardedAdReady(this.REWARD_AD_UNIT_ID);
        }
        return false;
    }

    isInterLoaded() {
        if (this.isInited) {
            return this.AppLovinMAX.isInterstitialReady(this.INTER_AD_UNIT_ID);
        }
        return false;
    }

    
    tryShowInterstitial(){
        if (this.isInterLoaded())
        {
            this.AppLovinMAX.showInterstitial(this.INTER_AD_UNIT_ID);
            return true;
        }
        return false;
    }

    tryShowReward(){
        if (this.isRewardLoaded())
        {
            this.AppLovinMAX.showRewardedAd(this.REWARD_AD_UNIT_ID);
            return true;
        }
        return false;
    }

    setMuted(value) {
        if(this.isInited) {
            this.AppLovinMAX.setMuted(value);
        }
    }

    showDebugger() {
        if(this.isInited) {
            this.AppLovinMAX.showMediationDebugger();
        }
    }

    setInterstitialId() {
         if (window.cordova.platformId.toUpperCase() === 'IOS') {
            this.INTER_AD_UNIT_ID = this.INTER_AD_UNIT_ID_IOS;
        } else {
            this.INTER_AD_UNIT_ID = this.INTER_AD_UNIT_ID_ANDROID;
        }
    }

    setRewardId() {
        if (window.cordova.platformId.toUpperCase() === 'IOS') {
           this.REWARD_AD_UNIT_ID = this.REWARD_AD_UNIT_ID_IOS;
       } else {
           this.REWARD_AD_UNIT_ID = this.REWARD_AD_UNIT_ID_ANDROID;
       }
   }

     loadInterstitial()
    {
        if (!this.isInterLoaded() && this.isInited) {
            this.AppLovinMAX.loadInterstitial(this.INTER_AD_UNIT_ID);
        }
    }

    loadRewardedAd()
    {
        if (!this.isRewardLoaded() && this.isInited) {
            this.AppLovinMAX.loadRewardedAd(this.REWARD_AD_UNIT_ID);
        }
    }
    setHasUserConsent(value){
        if (this.isInited) {
            this.AppLovinMAX.setHasUserConsent(value);
        }
    }
    setIsAgeRestrictedUser(value){
        if (this.isInited) {
            this.AppLovinMAX.setIsAgeRestrictedUser(value);
        }
    }
}