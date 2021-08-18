export const RoutePosition = {
  MAIN: `main`,
  SLIDE: `slide`,
};

export const ServerURL = {
  REQUEST_CALL_BACK: `/api/reestrdoma/callback/start/`,
  USER: `/api/user/`,
  USER_STATISTIC: `/api/user/statistic/`,
  NOTIFICATIONS: `/api/reestrdoma/notifications/:pagination`,
  UPDATE_NOTIFICATIONS: `/api/reestrdoma/bulk/notification-work/`,
  UPDATE_NOTIFY: `/api/reestrdoma/notification-work/:id/`,
  CACHING: `/api/reestrdoma/caching/:id/`, //key
};

export const OtherSiteRoute = {
  //TODO: прописать правильные ссылки, пока некоторые хз)
  OLD_SITE: `https://reestrdoma.ru`,
  INFORMATION: `https://reestrdoma.ru/about`,
  NEW_SITE: `https://test-alpha.reestrdoma.ru/new-core/`,
  NEW_SITE_STATISTIC: `https://test-alpha.reestrdoma.ru/new-core/`,
  NEW_SITE_EXTRACTS: `https://test-alpha.reestrdoma.ru/new-core/extracts`,
  NEW_SITE_COMPANIES: `https://test-alpha.reestrdoma.ru/new-core/companies`,
  NEW_SITE_PAYED_MODULES: `https://test-alpha.reestrdoma.ru/new-core/profile/payed-modules`,
  NEW_SITE_PERSONAL_ACCOUNT: `https://test-alpha.reestrdoma.ru/new-core/profile/personal-account`,
  NEW_SITE_DEPOSIT_ACCOUNT: `https://test-alpha.reestrdoma.ru/new-core/profile/deposit-account`,
  NEW_SITE_INVOICES: `https://test-alpha.reestrdoma.ru/new-core/profile/invoices`,
  NEW_SITE_CART: `https://test-alpha.reestrdoma.ru/new-core/cart`,
  CALCULATOR: `https://lk.reestrdoma.ru/calculator`,
  DEBTOR: `https://lk.reestrdoma.ru/fdebtor`,
  CONTROL_ROOM: `https://test-alpha.reestrdoma.ru/control-room`,


  // NEW_SITE_PRICES: `https://lk.reestrdoma.ru/reestrdoma/prices`,
  // NEW_SITE_ACCOUNT: `https://lk.reestrdoma.ru/reestrdoma/personal-account`,
  // LEGAL: `https://reestrdoma.ru/legal`,
  // QUESTIONS: `https://reestrdoma.ru/questions`,
  // SERVICES_PRICE: `https://reestrdoma.ru/price`,
  // CONTACTS: `https://reestrdoma.ru/contacts`,
  // PRICE: `https://lk.reestrdoma.ru/reestrdoma/price/:id`,
};

export const LocationMenu = {
  CORE: `CORE`,
  CALCULATOR: `CALCULATOR`,
  DEBTOR: `DEBTOR`,
  CONTROL_ROOM: `CONTROL_ROOM`,
};

export const DataAttrHeadingLevel = {
  LEVEL_1: 1,
  LEVEL_2: 2,
  LEVEL_3: 3,
  LEVEL_4: 4,
  LEVEL_5: 5,
  LEVEL_6: 6,
  LEVEL_7: 7,
};

export const AttrType = {
  BUTTON: `button`,
  SUBMIT: `submit`,
};

export const DataAttrSvgType = {
  FILL: `fill`,
  STROKE: `stroke`,
};

export const DataAttrSize = {
  XXXXL: `xxxxl`,
  XXXL: `xxxl`,
  XXL: `xxl`,
  XL: `xl`,
  L: `l`,
  M: `m`,
  S: `s`,
  XS: `xs`,
};

export const DataAttrColorTheme = {
  INHERIT: `inherit`,
  DEFAULT: `default`,
  OPACITY: `opacity`,
  DEFAULT_LIGHT: `default-light`,
  BLUE_PRIMARY: `blue-primary`,
  BLUE_PRIMARY_LIGHT: `blue-primary-light`,
  BLUE_SECONDARY: `blue-secondary`,
  BLUE_TERTIARY: `blue-tertiary`,
  BLUE_QUATERNARY: `blue-quaternary`,
  BLUE_QUINARY: `blue-quinary`,
  BLUE_SENARY: `blue-senary`,
  BLUE_LIGHT_PRIMARY: `blue-light-primary`,
  BLUE_LIGHT_SECONDARY: `blue-light-secondary`,
  BLUE_LIGHT_TERTIARY: `blue-light-tertiary`,
  BLUE_LIGHT_QUATERNARY: `blue-light-quaternary`,
  BLUE_LIGHT_QUINARY: `blue-light-quinary`,
  BLUE_DARK_PRIMARY: `blue-dark-primary`,
  BLUE_DARK_SECONDARY: `blue-dark-secondary`,
  GRAY_PRIMARY: `gray-primary`,
  GRAY_PRIMARY_LIGHT: `gray-primary-light`,
  GRAY_SECONDARY: `gray-secondary`,
  GRAY_SECONDARY_LIGHT: `gray-secondary-light`,
  GRAY_TERTIARY: `gray-tertiary`,
  GRAY_TERTIARY_LIGHT: `gray-tertiary-light`,
  GRAY_QUATERNARY: `gray-quaternary`,
  ORANGE_PRIMARY: `orange-primary`,
  ORANGE_PRIMARY_LIGHT: `orange-primary-light`,
  ORANGE_SECONDARY: `orange-secondary`,
  ORANGE_TERTIARY: `orange-tertiary`,
  ORANGE_QUATERNARY: `orange-quaternary`,
  ORANGE_QUINARY: `orange-quinary`,
  YELLOW_PRIMARY: `yellow-primary`,
  YELLOW_PRIMARY_LIGHT: `yellow-primary-light`,
  YELLOW_SECONDARY: `yellow-secondary`,
  YELLOW_TERTIARY: `yellow-tertiary`,
  YELLOW_QUATERNARY: `yellow-quaternary`,
  YELLOW_QUINARY: `yellow-quinary`,
  GREEN_PRIMARY: `green-primary`,
  GREEN_PRIMARY_LIGHT: `green-primary-light`,
  GREEN_SECONDARY: `green-secondary`,
  GREEN_TERTIARY: `green-tertiary`,
  GREEN_QUATERNARY: `green-quaternary`,
  GREEN_QUINARY: `green-quinary`,
  AZURE_PRIMARY: `azure-primary`,
  AZURE_SECONDARY: `azure-secondary`,
  AZURE_TERTIARY: `azure-tertiary`,
  AZURE_QUATERNARY: `azure-quaternary`,
  AZURE_QUINARY: `azure-quinary`,
  VELVET_PRIMARY: `velvet-primary`,
  VELVET_PRIMARY_LIGHT: `velvet-primary-light`,
  VELVET_SECONDARY: `velvet-secondary`,
  VELVET_TERTIARY: `velvet-tertiary`,
  VELVET_QUATERNARY: `velvet-quaternary`,
  VELVET_QUINARY: `velvet-quinary`,
  RED_PRIMARY: `red-primary`,
  RED_PRIMARY_LIGHT: `red-primary-light`,
  RED_SECONDARY: `red-secondary`,
  RED_TERTIARY: `red-tertiary`,
  RED_QUATERNARY: `red-quaternary`,
  RED_QUINARY: `red-quinary`,
  BLACK: `black`,
  BLACK_PRIMARY: `black-primary`,
  WHITE: `white`,
  WHITE_PRIMARY: `white-primary`,
  WHITE_SECONDARY: `white-secondary`,
};

export const FieldValidateThemeName = {
  ERROR: DataAttrColorTheme.RED_PRIMARY,
  SUCCESS: DataAttrColorTheme.GREEN_PRIMARY,
};

export const DataAttrState = {
  FOCUS: `focus`,
  HOVER: `hover`,
  ACTIVE: `active`,
  DISABLED: `disabled`,
  CURRENT: `current`,
  CHECKED: `checked`,
};

export const DataAttrWidth = {
  FULL_WIDTH: `fullwidth`,
};

export const DataAttrBg = {
  ROTATE_0: `rotate-0`,
  ROTATE_90: `rotate-90`,
  ROTATE_180: `rotate-180`,
  ROTATE_270: `rotate-270`,
};

export const MessageType = {
  SUCCESS: `SUCCESS`,
  WARNING: `WARNING`,
  ERROR: `ERROR`,
  INFO: `INFO`,
};

export const DataAttrDirection = {
  HORIZONTAL: `horizontal`,
  VERTICAL: `vertical`,
};

export const ElementPosition = {
  TOP: `top`,
  RIGHT: `right`,
  BOTTOM: `bottom`,
  LEFT: `left`,
  CENTER: `center`,
  BETWEEN: `between`,
};

export const FormFieldType = {
  BUTTON: `button`,
  SUBMIT: `submit`,
  TEXT: `text`,
  NUMBER: `number`,
  CHECKBOX: `checkbox`,
  RADIO: `radio`,
};
