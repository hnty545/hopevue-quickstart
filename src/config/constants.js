export const GENDERS = [
  { label: '男', value: 'm' },
  { label: '女', value: 'f' }
];

export const VIDEO_RATES = [
  { label: '流畅', value: 'ld', pixelSize: [640, 360] },
  { label: '高清', value: 'hd', pixelSize: [1280, 720] },
  { label: '1080p', value: 'fhd', pixelSize: [1920, 1080] }
];

export const POST_STATUS_NORMAL = 1;
export const POST_STATUS_DELETED = 2;

export const UI_WAIT = { code: 1, msg: '正在加载,请稍候...' };
export const UI_NODATA = { code: 2, msg: '没有查询到符合条件的记录' };

export const THEME = {
  primary: '#1976D2',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
};

export const PAGE_SIZE = 15;

export const COOKIES_KEY = {
  userName: 'un',
  passWord: 'pw',
  savePassword: 'sp'
};

export const TITLE_HEIGHT = 48;
