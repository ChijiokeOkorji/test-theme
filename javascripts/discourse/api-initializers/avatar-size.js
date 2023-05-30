import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "avatar-size",
  
  initialize(container) {
    withPluginApi("0.8.7", (api) => {
      const site = api.container.lookup("site:main");
      // Change avatar size on desktop
      if (!site.mobileView) {
        console.log('I definitely ran')
        // api.changeWidgetSetting("post-avatar", "size", 60);
        api.changeWidgetSetting("post-avatar", "size", 360);
      }
    });
  },
};
