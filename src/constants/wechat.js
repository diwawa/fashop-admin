export const GET_WECHAT_MENU_LIST = 'GET_WECHAT_MENU_LIST'   //读取（查询）已设置菜单
export const SET_WECHAT_MENU_LIST = 'SET_WECHAT_MENU_LIST'   //设置列表菜单
export const SET_CURRENT_MENU = 'SET_CURRENT_MENU'   //设置当前菜单
export const CREATE_WECHAT_MENU_LIST = 'CREATE_WECHAT_MENU_LIST'   //普通菜单添加

export const GET_WECHAT_IFBIND = 'GET_WECHAT_IFBIND'   //获取用户是否绑定公众号
export const GET_WECHAT_API_STATUS = 'GET_WECHAT_API_STATUS'   //获取用户绑定公众号的信息是否有效
export const SET_WECHAT_IFBIND = 'SET_WECHAT_IFBIND'   //设置用户是否绑定公众号
export const SET_WECHAT_API_STATUS = 'SET_WECHAT_API_STATUS'   //设置用户绑定公众号的信息是否有效
export const SET_WECHAT_CONFIG = 'SET_WECHAT_CONFIG'   //用户绑定公众号

export const GET_AUTO_REPLY_STATUS = 'GET_AUTO_REPLY_STATUS'   //获取关键词回复
export const SAVE_AUTO_REPLY_STATUS = 'SAVE_AUTO_REPLY_STATUS'   //保存关键词回复
export const SET_AUTO_REPLY_STATUS = 'SET_AUTO_REPLY_STATUS'   //设置关键词回复
export const START_GET_KEYWORDS_REPLY_LIST = 'START_GET_KEYWORDS_REPLY_LIST'   //开始获取关键词回复列表（table loading）
export const GET_KEYWORDS_REPLY_LIST = 'GET_KEYWORDS_REPLY_LIST'   //获取关键词回复列表
export const SAVE_KEYWORDS_REPLY_LIST = 'SAVE_KEYWORDS_REPLY_LIST'   //保存关键词回复列表
export const DEL_AUTO_REPLY_KEYWORDS = 'DEL_AUTO_REPLY_KEYWORDS'   //关键词回复删除
export const ADD_AUTO_REPLY_KEYWORDS = 'ADD_AUTO_REPLY_KEYWORDS'   //关键词回复添加
export const EDIT_AUTO_REPLY_KEYWORDS = 'EDIT_AUTO_REPLY_KEYWORDS'   //关键词回复修改
export const GET_AUTO_REPLY_KEYWORDS_DETAIL = 'GET_AUTO_REPLY_KEYWORDS_DETAIL'   //获取关键词回复详情
export const SET_AUTO_REPLY_KEYWORDS_DETAIL = 'SET_AUTO_REPLY_KEYWORDS_DETAIL'   //设置关键词回复详情
export const GET_FOLLOWED_REPLY_INFO = 'GET_FOLLOWED_REPLY_INFO'   //获取被关注回复信息
export const SAVE_FOLLOWED_REPLY_INFO = 'SAVE_FOLLOWED_REPLY_INFO'   //保存被关注回复信息
export const SET_FOLLOWED_REPLY_INFO = 'SET_FOLLOWED_REPLY_INFO'   //设置被关注回复信息

export const START_GET_WECHAT_USER_LIST = 'START_GET_WECHAT_USER_LIST'   //开始获取用户列表（table loading）
export const GET_WECHAT_USER_LIST = 'GET_WECHAT_USER_LIST'   //获取用户列表
export const SET_WECHAT_USER_LIST = 'SET_WECHAT_USER_LIST'   //设置用户列表
export const SET_WECHAT_USER_LIST_PAGE_ARR = 'SET_WECHAT_USER_LIST_PAGE_ARR'   //设置用户分页数组
export const START_GET_WECHAT_USER_LIST_BY_TAG = 'START_GET_WECHAT_USER_LIST_BY_TAG'   //通过标签 - 开始获取用户列表（table loading）
export const SET_WECHAT_USER_LIST_BY_TAG = 'SET_WECHAT_USER_LIST_BY_TAG'   //通过标签 - 设置用户列表
export const GET_WECHAT_USER_LIST_BY_TAG = 'GET_WECHAT_USER_LIST_BY_TAG'   //通过标签 - 获取用户列表
export const START_GET_WECHAT_USER_BLACK_LIST = 'START_GET_WECHAT_USER_BLACK_LIST'   //开始获取用户黑名单列表（table loading）
export const GET_WECHAT_USER_BLACK_LIST = 'GET_WECHAT_USER_BLACK_LIST'   //获取用户黑名单列表
export const SET_WECHAT_USER_BLACK_LIST = 'SET_WECHAT_USER_BLACK_LIST'   //设置用户黑名单列表
export const GET_WECHAT_USER_INFO_LIST = 'GET_WECHAT_USER_INFO_LIST'   //获取用户信息列表
export const SET_WECHAT_USER_INFO_LIST = 'SET_WECHAT_USER_INFO_LIST'   //设置用户信息列表
export const SET_WECHAT_USER_INFO_BLACK_LIST = 'SET_WECHAT_USER_INFO_BLACK_LIST'   //设置用户信息黑名单列表
export const SET_WECHAT_USER_BLACK = 'SET_WECHAT_USER_BLACK'   //拉黑用户
export const SET_WECHAT_USER_UNBLACK = 'SET_WECHAT_USER_UNBLACK'   //取消拉黑用户
export const EDIT_WECHAT_USER_REMARK = 'EDIT_WECHAT_USER_REMARK'   //修改用户备注

export const GET_WECHAT_USER_TAG_LIST = 'GET_WECHAT_USER_TAG_LIST'   //获取用户标签
export const SET_WECHAT_USER_TAG_LIST = 'SET_WECHAT_USER_TAG_LIST'   //设置用户标签
export const ADD_WECHAT_USER_TAG_LIST = 'ADD_WECHAT_USER_TAG_LIST'   //添加用户标签
export const EDIT_WECHAT_USER_TAG_LIST = 'EDIT_WECHAT_USER_TAG_LIST'   //修改用户标签
export const DEL_WECHAT_USER_TAG_LIST = 'DEL_WECHAT_USER_TAG_LIST'   //删除用户标签
export const TAG_WECHAT_USER = 'TAG_WECHAT_USER'   //批量为用户添加标签
export const UNTAG_WECHAT_USER = 'UNTAG_WECHAT_USER'   //批量为用户移除标签

export const START_GET_BROADCAST_RECORD = 'START_GET_BROADCAST_RECORD'   //开始获取群发记录（table loading）
export const GET_BROADCAST_RECORD = 'GET_BROADCAST_RECORD'   //获取群发记录
export const SET_BROADCAST_RECORD = 'SET_BROADCAST_RECORD'   //设置群发记录
export const CREATE_WECHAT_BROADCAST = 'CREATE_WECHAT_BROADCAST'   //创建群发
export const DEL_WECHAT_BROADCAST = 'DEL_WECHAT_BROADCAST'   //删除群发
export const GET_BROADCAST_USER_SEARCH = 'GET_BROADCAST_USER_SEARCH'   //获取消息群发用户（发送给多少人）
export const SET_BROADCAST_USER_SEARCH = 'SET_BROADCAST_USER_SEARCH'   //设置消息群发用户（发送给多少人）
export const GET_BROADCAST_SURPLUS = 'GET_BROADCAST_SURPLUS'   //获取群发当日可发送状态检查
export const SET_BROADCAST_SURPLUS = 'SET_BROADCAST_SURPLUS'   //设置群发当日可发送状态检查

export const ADD_WECHAT_MATERIAL = 'ADD_WECHAT_MATERIAL'   //添加永久素材
export const EDIT_WECHAT_MATERIAL = 'EDIT_WECHAT_MATERIAL'   //修改永久素材
export const DEL_WECHAT_MATERIAL = 'DEL_WECHAT_MATERIAL'   //删除永久素材
export const ADD_WECHAT_MATERIAL_VOICE = 'ADD_WECHAT_MATERIAL_VOICE'   //添加永久素材
export const START_GET_MATERIAL_LIST = 'START_GET_MATERIAL_LIST'   //开始获取微信永久素材列表（table loading）
export const GET_MATERIAL_LIST = 'GET_MATERIAL_LIST'   //获取微信永久素材列表
export const SET_IMAGE_MATERIAL_LIST = 'SET_IMAGE_MATERIAL_LIST'   //设置图片素材
export const SET_VIDEO_MATERIAL_LIST = 'SET_VIDEO_MATERIAL_LIST'   //设置视频素材
export const SET_VOICE_MATERIAL_LIST = 'SET_VOICE_MATERIAL_LIST'   //设置语音素材
export const SET_NEWS_MATERIAL_LIST = 'SET_NEWS_MATERIAL_LIST'   //设置图文素材
export const START_GET_LOCAL_NEWS_MATERIAL_LIST = 'START_GET_LOCAL_NEWS_MATERIAL_LIST'   //开始获取本地图文列表（table loading）
export const GET_LOCAL_NEWS_MATERIAL_LIST = 'GET_LOCAL_NEWS_MATERIAL_LIST'   //获取本地图文列表
export const SET_LOCAL_NEWS_MATERIAL_LIST = 'SET_LOCAL_NEWS_MATERIAL_LIST'   //设置本地图文列表
export const ADD_LOCAL_NEWS_MATERIAL_LIST = 'ADD_LOCAL_NEWS_MATERIAL_LIST'   //添加本地图文列表
export const EDIT_LOCAL_NEWS_MATERIAL_LIST = 'EDIT_LOCAL_NEWS_MATERIAL_LIST'   //修改本地图文列表
export const DEL_LOCAL_NEWS_MATERIAL_LIST = 'DEL_LOCAL_NEWS_MATERIAL_LIST'   //删除本地图文列表

// 添加图文数据
export const GET_WECHAT_MATERIAL_INFO = 'GET_WECHAT_MATERIAL_INFO'   //获取微信图文列表
export const GET_LOCALNEWS_MATERIAL_INFO = 'GET_LOCALNEWS_MATERIAL_INFO'   //获取本地图文列表
export const SET_WECHAT_MATERIAL_INFO = 'SET_WECHAT_MATERIAL_INFO'   //设置微信图文列表
export const SET_LOCALNEWS_MATERIAL_INFO = 'SET_LOCALNEWS_MATERIAL_INFO'   //设置本地图文列表
