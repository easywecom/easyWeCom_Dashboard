const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permissions: state => state.user.permissions,
  permission_routes: state => state.permission.routes,
  isSuperAdmin: state => state.user.isSuperAdmin,
  userId: state => state.user.userId,
  enterPriseWechatConfig: state => state.enterPriseWechatConfig,
  corpId: state => state.enterPriseWechatConfig?.corpId,
  serverInfo: state => state.serverInfo.serverType,
  materialInfo: state => state.materialInfo,
  companyName: state => state.enterPriseWechatConfig.companyName,
  userList: state => state.listInfo.userList,
  tagList: state => state.listInfo.tagList,
  groupTagList: state => state.listInfo.groupTagList,
  customerProperList: state => state.customerProperty.customerProperList
};
export default getters;
