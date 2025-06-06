import { ReactNode } from 'react';

export type Errors = {
  errors?: string[];
  showAd?: boolean;
};

export type ApiError = {
  title?: string;
  description?: string;
};

// export interface Results {
//   data?: Errors;
//   error?: ApiError;
//   request: {
//     toExclude: string;
//     toRewrite: string;
//   };
// }

export interface TextError {
  type: string;
  word: string;
  start: number;
  end: number;
  explanation: string;
  source: string;
  suggestions: string[];
}
export interface Results {
  errors: TextError[];
}

export type AdType = 'adPlacement' | 'preloader';

export interface ButtonOption {
  value: string;
  label: string | ReactNode;
  icon?: ReactNode;
  isLink?: boolean;
  pro?: boolean;
  description?: string;
}

export interface AuthContext {
  isAuthenticated: boolean;
  isPro: boolean;
  isLogged: boolean;
  isAdmin: boolean;
  isBlocked: boolean;
  isLimitReached: boolean;
  isRecaptchaRequired: boolean;
  isHpRequired: boolean;
  isWordInputRequired: boolean;
  isAdRequired: boolean;
  isPreloaderRequired: boolean;
  isRedirectRequired: boolean;
  isProRequired: boolean;
  isLoginRequired: boolean;
  isBlockedRequired: boolean;
  isLimitReachedRequired: boolean;
  isRecaptchaValidationRequired: boolean;
  isHpValidationRequired: boolean;
  isWordInputValidationRequired: boolean;
  isAdValidationRequired: boolean;
  isPreloaderValidationRequired: boolean;
  isRedirectValidationRequired: boolean;
  isProValidationRequired: boolean;
  isLoginValidationRequired: boolean;
  isBlockedValidationRequired: boolean;
  isLimitReachedValidationRequired: boolean;
}

export interface SgRewriteTextsProps {
  endpoint: string;
  endpointAds?: string;
  endpointUpdAds?: string;
  endpointFeedback?: string;
  sitekey?: string;
  redirect?: boolean;
  debug?: boolean;
  redirectPlaceholder?: string;
  toExclude?: string;
  toRewrite?: string;
  tag?: string;
  idTool?: string;
  adType?: AdType;
  adPlacementClientId?: string;
  adPlacementAdChannelId?: string;
  langCode?: string;
  projectId?: string;
  utmSource?: string;
  authContext?: AuthContext;
  onAuthContextChange?: (context: AuthContext) => void;
} 