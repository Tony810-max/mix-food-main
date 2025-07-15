export enum TAB_VALUES {
  PERSONAL_INFO = 'personalInfo',
  CHANGE_PASSWORD = 'changePassword',
  VERIFY_EMAIL = 'verifyEmail',
}

export type TTabValues = `${TAB_VALUES}`;

export const tabs = [
  { key: TAB_VALUES.PERSONAL_INFO, label: 'Personal Info' },
  { key: TAB_VALUES.CHANGE_PASSWORD, label: 'Change Password' },
  { key: TAB_VALUES.VERIFY_EMAIL, label: 'Verify Email' },
];
